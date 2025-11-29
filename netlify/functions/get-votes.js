// Fonction Netlify pour récupérer les votes
// Cette fonction devra être connectée à une base de données

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // TODO: Récupérer les votes depuis la base de données
    // const candidates = await getCandidatesFromDB();

    // Pour l'instant, données de test
    const candidates = [
      { id: 1, number: 1, name: 'Candidate 1', program: 'Médecine Générale', image: '/images/candidates/candidate-1.jpg', votes: 127 },
      { id: 2, number: 2, name: 'Candidate 2', program: 'Chirurgie', image: '/images/candidates/candidate-2.jpg', votes: 98 },
      { id: 3, number: 3, name: 'Candidate 3', program: 'Pédiatrie', image: '/images/candidates/candidate-3.jpg', votes: 145 },
      { id: 4, number: 4, name: 'Candidate 4', program: 'Gynécologie', image: '/images/candidates/candidate-4.jpg', votes: 89 },
      { id: 5, number: 5, name: 'Candidate 5', program: 'Cardiologie', image: '/images/candidates/candidate-5.jpg', votes: 156 },
      { id: 6, number: 6, name: 'Candidate 6', program: 'Neurologie', image: '/images/candidates/candidate-6.jpg', votes: 112 },
      { id: 7, number: 7, name: 'Candidate 7', program: 'Dermatologie', image: '/images/candidates/candidate-7.jpg', votes: 134 },
      { id: 8, number: 8, name: 'Candidate 8', program: 'Ophtalmologie', image: '/images/candidates/candidate-8.jpg', votes: 92 },
      { id: 9, number: 9, name: 'Candidate 9', program: 'Psychiatrie', image: '/images/candidates/candidate-9.jpg', votes: 178 },
      { id: 10, number: 10, name: 'Candidate 10', program: 'Anesthésie', image: '/images/candidates/candidate-10.jpg', votes: 103 },
    ];

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ candidates })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erreur lors de la récupération des votes' })
    };
  }
};