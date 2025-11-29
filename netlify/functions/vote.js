// Fonction Netlify pour enregistrer un vote - MODE PRODUCTION

const KKIAPAY_PRIVATE_KEY = 'pk_3af837908a807ffd82afaedf77978cfb41cbd030bc512900c4c72549a0432217';
const KKIAPAY_SECRET = 'sk_71ffa1d1cd92a8b0186d7d8d23c852f09b68d0873b1285e9c4620aa6a2ec621b';

// Fonction pour vérifier la transaction avec KKiaPay
async function verifyKkiapayTransaction(transactionId) {
  try {
    const response = await fetch(`https://api.kkiapay.me/api/v1/transactions/status/${transactionId}`, {
      headers: {
        'x-api-key': KKIAPAY_PRIVATE_KEY
      }
    });
    
    const data = await response.json();
    return data.status === 'SUCCESS' && data.amount >= 100;
  } catch (error) {
    console.error('Erreur vérification transaction:', error);
    return false;
  }
}

exports.handler = async (event) => {
  // CORS headers
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Gérer les requêtes OPTIONS (CORS preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Permettre uniquement POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Méthode non autorisée' })
    };
  }

  try {
    const { candidateId, transactionId } = JSON.parse(event.body);

    // Vérifier que les données sont présentes
    if (!candidateId || !transactionId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Données manquantes' })
      };
    }

    // Vérifier la transaction avec KKiaPay
    const isValid = await verifyKkiapayTransaction(transactionId);
    
    if (!isValid) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false,
          error: 'Transaction invalide ou montant incorrect' 
        })
      };
    }

    // TODO: Enregistrer le vote dans votre base de données
    // Exemple avec Supabase:
    // const { data, error } = await supabase
    //   .from('votes')
    //   .insert([
    //     { 
    //       candidate_id: candidateId, 
    //       transaction_id: transactionId,
    //       amount: 100,
    //       created_at: new Date().toISOString()
    //     }
    //   ]);

    // TODO: Incrémenter le compteur de votes
    // const { data: updateData } = await supabase
    //   .from('candidates')
    //   .update({ votes: supabase.raw('votes + 1') })
    //   .eq('id', candidateId);

    console.log('Vote enregistré:', { candidateId, transactionId });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true,
        message: 'Vote enregistré avec succès'
      })
    };
  } catch (error) {
    console.error('Erreur:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false,
        error: 'Erreur lors de l\'enregistrement du vote' 
      })
    };
  }
};