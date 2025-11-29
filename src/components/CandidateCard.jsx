import React from 'react';

const CandidateCard = ({ candidate, onVote, showVotes, isAdmin }) => {
  const displayVotes = showVotes || isAdmin;

  return (
    <div className="group relative overflow-hidden rounded-xl glass-effect hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="aspect-[3/4] relative overflow-hidden">
        <img 
          src={candidate.image} 
          alt={candidate.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-secondary text-accent px-4 py-1 rounded-full text-sm font-bold">
              N° {candidate.number}
            </div>
            {displayVotes && (
              <div className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">
                <span className="text-white font-semibold">{candidate.votes} votes</span>
              </div>
            )}
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-1">{candidate.name}</h3>
          <p className="text-gray-300 text-sm mb-4">{candidate.program}</p>
          
          <button
            onClick={() => onVote(candidate)}
            className="w-full btn-primary text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
            <span>Voter maintenant</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;