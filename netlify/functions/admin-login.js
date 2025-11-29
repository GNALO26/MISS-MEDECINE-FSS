// Fonction Netlify pour l'authentification admin - MODE PRODUCTION

// IMPORTANT: Configurez ces valeurs dans les variables d'environnement Netlify
// Site settings > Environment variables
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'MissFSS2025!SecurePassword';

// Fonction simple pour hasher (en production, utilisez bcrypt)
function simpleHash(password) {
  return Buffer.from(password).toString('base64');
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
    const { username, password } = JSON.parse(event.body);

    // Vérifier que les identifiants sont fournis
    if (!username || !password) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false,
          error: 'Nom d\'utilisateur et mot de passe requis'
        })
      };
    }

    // Limiter les tentatives (simple protection)
    // TODO: En production, implémenter un rate limiting plus robuste
    const clientIP = event.headers['client-ip'] || event.headers['x-forwarded-for'];
    console.log(`Tentative de connexion depuis: ${clientIP}`);

    // Vérifier les identifiants
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Générer un token (en production, utilisez JWT avec expiration)
      const token = Buffer.from(`${username}:${Date.now()}:${simpleHash(password)}`).toString('base64');

      console.log(`Connexion admin réussie: ${username}`);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          success: true,
          token,
          message: 'Connexion réussie'
        })
      };
    } else {
      // Log des tentatives échouées
      console.warn(`Tentative de connexion échouée: ${username} depuis ${clientIP}`);

      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ 
          success: false,
          error: 'Identifiants incorrects'
        })
      };
    }
  } catch (error) {
    console.error('Erreur lors de l\'authentification:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false,
        error: 'Erreur serveur' 
      })
    };
  }
};