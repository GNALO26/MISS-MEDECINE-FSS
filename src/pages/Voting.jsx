import React, { useState, useEffect } from 'react';
import CandidateCard from '../components/CandidateCard';
import { initKkiapay } from '../utils/kkiapay';

const Voting = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showVotes, setShowVotes] = useState(true);

  // À remplacer par vos vraies données
  const initialCandidates = [
    { id: 1, number: 1, name: 'Candidate 1', program: 'Médecine Générale', image: '/images/candidates/candidate-1.jpg', votes: 0 },
    { id: 2, number: 2, name: 'Candidate 2', program: 'Chirurgie', image: '/images/candidates/candidate-2.jpg', votes: 0 },
    { id: 3, number: 3, name: 'Candidate 3', program: 'Pédiatrie', image: '/images/candidates/candidate-3.jpg', votes: 0 },
    { id: 4, number: 4, name: 'Candidate 4', program: 'Gynécologie', image: '/images/candidates/candidate-4.jpg', votes: 0 },
    { id: 5, number: 5, name: 'Candidate 5', program: 'Cardiologie', image: '/images/candidates/candidate-5.jpg', votes: 0 },
    { id: 6, number: 6, name: 'Candidate 6', program: 'Neurologie', image: '/images/candidates/candidate-6.jpg', votes: 0 },
    { id: 7, number: 7, name: 'Candidate 7', program: 'Dermatologie', image: '/images/candidates/candidate-7.jpg', votes: 0 },
    { id: 8, number: 8, name: 'Candidate 8', program: 'Ophtalmologie', image: '/images/candidates/candidate-8.jpg', votes: 0 },
    { id: 9, number: 9, name: 'Candidate 9', program: 'Psychiatrie', image: '/images/candidates/candidate-9.jpg', votes: 0 },
    { id: 10, number: 10, name: 'Candidate 10', program: 'Anesthésie', image: '/images/candidates/candidate-10.jpg', votes: 0 },
  ];

  useEffect(() => {
    loadCandidates();
    checkVotesVisibility();
  }, []);

  const loadCandidates = async () => {
    try {
      const response = await fetch('/.netlify/functions/get-votes');
      const data = await response.json();
      setCandidates(data.candidates || initialCandidates);
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
      setCandidates(initialCandidates);
    } finally {
      setLoading(false);
    }
  };

  const checkVotesVisibility = () => {
    const eventDate = new Date('2026-01-21T20:00:00');
    const fourteenDaysBefore = new Date(eventDate);
    fourteenDaysBefore.setDate(fourteenDaysBefore.getDate() - 14);
    
    const now = new Date();
    const shouldShowVotes = now < fourteenDaysBefore;
    
    setShowVotes(shouldShowVotes);
  };

  const handleVote = (candidate) => {
    setSelectedCandidate(candidate);
    
    initKkiapay({
      amount: 100,
      position: 'center',
      callback: async (response) => {
        if (response.status === 'SUCCESS') {
          try {
            await fetch('/.netlify/functions/vote', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                candidateId: candidate.id,
                transactionId: response.transactionId
              })
            });
            
            loadCandidates();
            alert(`Merci d'avoir voté pour ${candidate.name} !`);
          } catch (error) {
            console.error('Erreur lors de l\'enregistrement du vote:', error);
          }
        }
      },
      theme: '#8B0000'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <div className="loading-shimmer w-16 h-16 rounded-full mx-auto mb-4" />
          <p className="text-gray-400">Chargement des candidates...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: 'url(/images/background-voting.jpg)' }}
      />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Votez pour votre favorite</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Chaque vote compte 100 FCFA. Vous pouvez voter autant de fois que vous le souhaitez.
          </p>
          <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-white font-medium">Votes en cours</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {candidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              onVote={handleVote}
              showVotes={showVotes}
              isAdmin={isAdmin}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-effect rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Comment voter ?</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-accent font-bold">
                  1
                </div>
                <p className="text-gray-300">
                  Choisissez votre candidate favorite parmi les 10 participantes
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-accent font-bold">
                  2
                </div>
                <p className="text-gray-300">
                  Cliquez sur "Voter maintenant" et effectuez le paiement de 100 FCFA via KKiaPay
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-accent font-bold">
                  3
                </div>
                <p className="text-gray-300">
                  Votre vote est comptabilisé instantanément. Votez autant de fois que vous voulez !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voting;