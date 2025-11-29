// Utilitaire pour KKiaPay - MODE PRODUCTION

const KKIAPAY_PUBLIC_KEY = 'ce6c369042994a9ad088309808a0360910257580';
const KKIAPAY_PRIVATE_KEY = 'pk_3af837908a807ffd82afaedf77978cfb41cbd030bc512900c4c72549a0432217';

export const initKkiapay = ({ amount, position = 'center', callback, theme = '#8B0000' }) => {
  if (!window.openKkiapayWidget) {
    console.error('KKiaPay SDK non chargé');
    return;
  }

  window.openKkiapayWidget({
    amount,
    position,
    callback: (response) => {
      console.log('Réponse de paiement:', response);
      if (callback) {
        callback(response);
      }
    },
    theme,
    key: KKIAPAY_PUBLIC_KEY,
    sandbox: false // MODE PRODUCTION - Paiements réels
  });
};

export const verifyTransaction = async (transactionId) => {
  try {
    const response = await fetch(`https://api.kkiapay.me/api/v1/transactions/status/${transactionId}`, {
      headers: {
        'x-api-key': KKIAPAY_PRIVATE_KEY
      }
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la vérification de la transaction:', error);
    return null;
  }
};