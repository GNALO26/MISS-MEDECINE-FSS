import React from 'react';

const AdminPanel = ({ candidates, onLogout }) => {
  const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0);
  const leader = candidates.length > 0 
    ? candidates.reduce((max, c) => c.votes > max.votes ? c : max, candidates[0])
    : null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="heading-section text-gold">Tableau de bord</h1>
        <button onClick={onLogout} className="btn-dark">
          Déconnexion
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-clean p-6">
          <p className="text-sm text-gray-400 mb-2">Total des votes</p>
          <p className="text-3xl font-bold text-gold">{totalVotes}</p>
        </div>
        
        <div className="card-clean p-6">
          <p className="text-sm text-gray-400 mb-2">Candidates</p>
          <p className="text-3xl font-bold text-white">{candidates.length}</p>
        </div>
        
        <div className="card-clean p-6">
          <p className="text-sm text-gray-400 mb-2">En tête</p>
          <p className="text-xl font-bold text-white">
            {leader ? leader.name : 'N/A'}
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="card-clean overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">#</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Candidate</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Programme</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">Votes</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">%</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {candidates
                .sort((a, b) => b.votes - a.votes)
                .map((candidate) => {
                  const percentage = totalVotes > 0 
                    ? ((candidate.votes / totalVotes) * 100).toFixed(1)
                    : 0;
                  
                  return (
                    <tr key={candidate.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="w-8 h-8 bg-[#FFD700] rounded-lg flex items-center justify-center">
                          <span className="text-black font-bold text-sm">
                            {candidate.number}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img 
                            src={candidate.image}
                            alt={candidate.name}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                          <span className="font-medium text-white">{candidate.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-400 text-sm">{candidate.program}</td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-[#FFD700] font-bold">{candidate.votes}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <div className="w-24 bg-white/10 rounded-full h-2">
                            <div 
                              className="bg-[#FFD700] h-2 rounded-full transition-all"
                              style={{ width: `${percentage}%` }}
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

      {/* Info */}
      <div className="card-clean p-6">
        <h3 className="font-semibold text-white mb-3">Informations</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>• Les statistiques sont mises à jour en temps réel</li>
          <li>• Les votes sont visibles au public jusqu'à 14 jours avant l'événement</li>
          <li>• Après cette date, seuls les administrateurs peuvent voir les résultats</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;