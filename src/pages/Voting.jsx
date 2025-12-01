import React, { useState, useEffect } from 'react';
import CandidateCard from '../components/CandidateCard';
import { initKkiapay } from '../utils/kkiapay';
import { getCandidates, subscribeToVotes } from '../utils/supabase';

const Voting = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showVotes, setShowVotes] = useState(true);

  useEffect(() => {
    loadCandidates();
    checkVotesVisibility();
    checkAdminStatus();
    
    const sub = subscribeToVotes(() => loadCandidates());
    return () => sub?.unsubscribe();
  }, []);

  const loadCandidates = async () => {
    try {
      const data = await getCandidates();
      setCandidates(data);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkAdminStatus = () => {
    setIsAdmin(!!localStorage.getItem('admin_token'));
  };

  const checkVotesVisibility = () => {
    const eventDate = new Date('2025-12-31T20:00:00');
    const fourteenDaysBefore = new Date(eventDate);
    fourteenDaysBefore.setDate(fourteenDaysBefore.getDate() - 14);
    setShowVotes(new Date() < fourteenDaysBefore);
  };

  const handleVote = (candidate) => {
    initKkiapay({
      amount: 100,
      position: 'center',
      callback: async (response) => {
        if (response.status === 'SUCCESS') {
          try {
            const result = await fetch('/.netlify/functions/vote', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                candidateId: candidate.id,
                transactionId: response.transactionId
              })
            });
            
            const data = await result.json();
            
            if (data.success) {
              alert(`✅ Vote enregistré pour ${candidate.name} !\nTotal : ${data.votes} votes`);
              loadCandidates();
            } else {
              alert(`❌ ${data.error}`);
            }
          } catch (error) {
            alert('❌ Erreur lors de l\'enregistrement');
          }
        }
      },
      theme: '#FFD700'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <div className="w-12 h-12 border-3 border-[#FFD700]/30 border-t-[#FFD700] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="container-pro">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto fade-up">
          <div className="badge-gold mx-auto mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Votes en cours</span>
          </div>

          <h1 className="heading-section mb-6">
            <span className="text-gold">Votez pour votre favorite</span>
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed">
            Soutenez votre candidate avec un vote à <span className="text-[#FFD700] font-semibold">100 FCFA</span>. 
            Votez autant de fois que vous le souhaitez.
          </p>
        </div>

        {/* Grid */}
        {candidates.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">Aucune candidate disponible</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {candidates.map((candidate, i) => (
              <div key={candidate.id} className="fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <CandidateCard
                  candidate={candidate}
                  onVote={handleVote}
                  showVotes={showVotes}
                  isAdmin={isAdmin}
                />
              </div>
            ))}
          </div>
        )}

        {/* Info */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="card-clean p-8">
            <h3 className="heading-card mb-6 text-center text-white">Comment voter ?</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <p className="text-gray-400 text-sm">
                  Choisissez votre candidate favorite
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <p className="text-gray-400 text-sm">
                  Payez 100 FCFA via KKiaPay
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <p className="text-gray-400 text-sm">
                  Vote enregistré instantanément
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