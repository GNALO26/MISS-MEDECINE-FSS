// Fonction Netlify pour l'achat de billets - MODE PRODUCTION

const KKIAPAY_PRIVATE_KEY = 'pk_3af837908a807ffd82afaedf77978cfb41cbd030bc512900c4c72549a0432217';

// Fonction pour vérifier la transaction avec KKiaPay
async function verifyKkiapayTransaction(transactionId, expectedAmount) {
  try {
    const response = await fetch(`https://api.kkiapay.me/api/v1/transactions/status/${transactionId}`, {
      headers: {
        'x-api-key': KKIAPAY_PRIVATE_KEY
      }
    });
    
    const data = await response.json();
    return data.status === 'SUCCESS' && data.amount >= expectedAmount;
  } catch (error) {
    console.error('Erreur vérification transaction:', error);
    return false;
  }
}

// TODO: Configurer l'envoi d'emails
// Exemple avec Resend (recommandé)
async function sendTicketEmail(purchaseData) {
  // Installer: npm install resend
  // const { Resend } = require('resend');
  // const resend = new Resend(process.env.RESEND_API_KEY);
  
  // await resend.emails.send({
  //   from: 'Miss FSS-Médecine <noreply@votredomaine.com>',
  //   to: purchaseData.customer.email,
  //   subject: 'Votre billet pour Miss FSS-Médecine 2025',
  //   html: generateEmailHTML(purchaseData),
  //   attachments: [
  //     {
  //       filename: Billet-${purchaseData.customer.name}.pdf,
  //       content: pdfBuffer
  //     }
  //   ]
  // });
}

exports.handler = async (event) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Méthode non autorisée' })
    };
  }

  try {
    const purchaseData = JSON.parse(event.body);
    const { ticket, customer, transactionId } = purchaseData;

    // Vérifier que toutes les données sont présentes
    if (!ticket || !customer || !transactionId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Données manquantes' })
      };
    }

    // Vérifier que le client a fourni toutes ses informations
    if (!customer.name || !customer.email || !customer.phone) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Informations client incomplètes' })
      };
    }

    // Vérifier la transaction avec KKiaPay
    const isValid = await verifyKkiapayTransaction(transactionId, ticket.price);
    
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

    // TODO: Enregistrer l'achat dans la base de données
    // const { data, error } = await supabase
    //   .from('tickets')
    //   .insert([
    //     {
    //       ticket_type: ticket.id,
    //       ticket_name: ticket.name,
    //       customer_name: customer.name,
    //       customer_email: customer.email,
    //       customer_phone: customer.phone,
    //       price: ticket.price,
    //       transaction_id: transactionId,
    //       created_at: new Date().toISOString()
    //     }
    //   ]);

    // TODO: Envoyer l'email avec le PDF du billet
    // await sendTicketEmail(purchaseData);

    console.log('Billet acheté:', {
      ticket: ticket.name,
      customer: customer.name,
      amount: ticket.price
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true,
        message: 'Billet acheté avec succès. Vous recevrez un email de confirmation.'
      })
    };
  } catch (error) {
    console.error('Erreur:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false,
        error: 'Erreur lors de l\'achat du billet' 
      })
    };
  }
};