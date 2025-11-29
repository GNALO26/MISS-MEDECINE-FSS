import React, { useState, useEffect } from 'react';
import { login, isAuthenticated } from '../utils/auth';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
    if (isAuthenticated()) {
      loadCandidates();
    }
  }, []);

  const loadCandidates = async () => {
    setLoading(true);
    try {
      const response = await fetch('/.netlify/functions/get-votes');
      const data = await response.json();
      setCandidates(data.candidates || []);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('/.netlify/functions/admin-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });

      const data = await response.json();
      
      if (data.success) {
        login(data.token);
        setIsLoggedIn(true);
        loadCandidates();
      } else {
        setError('Identifiants incorrects');
      }
    } catch (error) {
      setError('Erreur de connexion');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="max-w-md w-full glass-effect rounded-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">
              <span className="gradient-text">Administration</span>
            </h1>
            <p className="text-gray-400">Accès réservé aux administrateurs</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nom d'utilisateur
              </label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary"
                required
              />
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500 rounded-lg p-3 text-red-200 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full btn-primary text-white font-semibold py-3 rounded-lg"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">
            <span className="gradient-text">Tableau de bord</span>
          </h1>
          <button
            onClick={() => {
              localStorage.removeItem('admin_token');
              setIsLoggedIn(false);
            }}
            className="glass-effect text-white px-6 py-2 rounded-lg hover:border-secondary transition-all"
          >
            Déconnexion
          </button>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="loading-shimmer w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="text-gray-400">Chargement des données...</p>
          </div>
        ) : (
          <>
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Total des votes</h3>
                <p className="text-4xl font-bold gradient-text">
                  {candidates.reduce((sum, c) => sum + c.votes, 0)}
                </p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Candidates</h3>
                <p className="text-4xl font-bold text-white">{candidates.length}</p>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-gray-400 text-sm font-medium mb-2">En tête</h3>
                <p className="text-2xl font-bold text-secondary">
                  {candidates.length > 0 
                    ? candidates.reduce((max, c) => c.votes > max.votes ? c : max, candidates[0]).name
                    : 'N/A'
                  }
                </p>
              </div>
            </div>

            {/* Candidates Table */}
            <div className="glass-effect rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">N°</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Candidate</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Programme</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">Votes</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">Pourcentage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {candidates
                      .sort((a, b) => b.votes - a.votes)
                      .map((candidate) => {
                        const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0);
                        const percentage = totalVotes > 0 ? (candidate.votes / totalVotes * 100).toFixed(1) : 0;
                        
                        return (
                          <tr key={candidate.id} className="hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center justify-center w-8 h-8 bg-secondary text-accent rounded-full font-bold text-sm">
                                {candidate.number}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-3">
                                <img 
                                  src={candidate.image} 
                                  alt={candidate.name}
                                  className="w-10 h-10 rounded-full object-cover"
                                />
                                <span className="font-medium text-white">{candidate.name}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-gray-300">{candidate.program}</td>
                            <td className="px-6 py-4 text-right">
                              <span className="text-secondary font-bold">{candidate.votes}</span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex items-center justify-end space-x-3">
                                <div className="w-24 bg-white/10 rounded-full h-2">
                                  <div 
                                    className="bg-gradient-to-r from-secondary to-yellow-500 h-2 rounded-full transition-all"
                                    style={`{ width: ${percentage}% }`}
                                  />
                                </div>
                                <span className="text-white font-medium w-12 text-right">
                                  {percentage}%
                                </span>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 glass-effect rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Informations</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>Les statistiques sont mises à jour en temps réel</p>
                <p>Les votes sont visibles au public jusqu'à 14 jours avant l'événement</p>
                <p>Après cette date, seuls les administrateurs peuvent voir les résultats</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;