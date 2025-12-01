import React from 'react';

const CandidateCard = ({ candidate, onVote, showVotes, isAdmin }) => {
  const displayVotes = showVotes || isAdmin;

  return (
    <div className="card-clean h-full group">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-900">
        <img 
          src={candidate.image}
          alt={candidate.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="400"%3E%3Crect fill="%23111" width="300" height="400"/%3E%3Ctext fill="%23666" font-family="Arial" font-size="16" dy="200" dx="80"%3ENo Image%3C/text%3E%3C/svg%3E';
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        {/* Number */}
        <div className="absolute top-4 left-4 w-10 h-10 bg-[#FFD700] rounded-lg flex items-center justify-center">
          <span className="text-black font-bold text-lg">#{candidate.number}</span>
        </div>

        {/* Votes */}
        {displayVotes && (
          <div className="absolute top-4 right-4 glass-pro px-3 py-1.5 rounded-lg">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              <span className="text-white text-sm font-semibold">{candidate.votes}</span>
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="heading-card text-white mb-2 line-clamp-2">
            {candidate.name}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2">
            {candidate.program}
          </p>
        </div>

        {/* Button */}
        <button
          onClick={() => onVote(candidate)}
          className="w-full btn-gold text-sm py-3"
        >
          Voter · 100F
        </button>
      </div>
    </div>
  );
};

export default CandidateCard;