import React, { useState } from 'react';

const CandidateCard = ({ candidate, onVote, showVotes, isAdmin }) => {
  const [isHovered, setIsHovered] = useState(false);
  const displayVotes = showVotes || isAdmin;

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-primary to-secondary opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700 rounded-3xl"></div>
      
      <div className="relative glass-card rounded-3xl overflow-hidden h-full">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          {/* Image */}
          <img 
            src={candidate.image} 
            alt={candidate.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%23333" width="400" height="500"/%3E%3Ctext fill="%23666" font-family="sans-serif" font-size="30" dy="250" dx="150"%3ENo Image%3C/text%3E%3C/svg%3E';
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80"></div>
          
          {/* Animated Border Top */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent transform transition-transform duration-700 ${
            isHovered ? 'scale-x-100' : 'scale-x-0'
          }`}></div>

          {/* Number Badge */}
          <div className="absolute top-4 left-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-dark blur-lg opacity-60"></div>
              <div className="relative bg-gradient-to-br from-secondary via-secondary-dark to-secondary text-accent w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                {candidate.number}
              </div>
            </div>
          </div>

          {/* Votes Display */}
          {displayVotes && (
            <div className="absolute top-4 right-4">
              <div className="glass-effect px-4 py-2 rounded-full backdrop-blur-xl">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                  <span className="text-white font-bold text-sm">{candidate.votes}</span>
                </div>
              </div>
            </div>
          )}

          {/* Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500">
            {/* Name */}
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 transform transition-all duration-500 group-hover:translate-y-0">
              {candidate.name}
            </h3>
            
            {/* Program */}
            <p className="text-sm sm:text-base text-gray-300 mb-4 transform transition-all duration-500 opacity-90 group-hover:opacity-100">
              {candidate.program}
            </p>

            {/* Vote Button */}
            <button
              onClick={() => onVote(candidate)}
              className="w-full btn-primary text-white font-semibold py-3 sm:py-4 px-6 rounded-xl flex items-center justify-center space-x-2 transform transition-all duration-300 group-hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              <span>Voter maintenant</span>
              <span className="text-xs opacity-75">(100 FCFA)</span>
            </button>
          </div>
        </div>

        {/* Decorative Border Bottom */}
        <div className="h-1 bg-gradient-to-r from-secondary via-secondary-dark to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
      </div>
    </div>
  );
};

export default CandidateCard;