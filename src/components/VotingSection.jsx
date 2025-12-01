import React from 'react';
import CandidateCard from './CandidateCard';

const VotingSection = ({ candidates, onVote, showVotes, isAdmin }) => {
  if (!candidates || candidates.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="card-clean p-12 max-w-md mx-auto">
          <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <p className="text-xl text-gray-400">Aucune candidate disponible</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
      {candidates.map((candidate, index) => (
        <div 
          key={candidate.id} 
          className="fade-up" 
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <CandidateCard
            candidate={candidate}
            onVote={onVote}
            showVotes={showVotes}
            isAdmin={isAdmin}
          />
        </div>
      ))}
    </div>
  );
};

export default VotingSection;