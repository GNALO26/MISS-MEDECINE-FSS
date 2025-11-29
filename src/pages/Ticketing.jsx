import React, { useState } from 'react';
import { initKkiapay } from '../utils/kkiapay';
import { generateTicketPDF } from '../utils/pdfGenerator';

const Ticketing = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const tickets = [
    {
      id: 'single',
      name: 'Billet Standard',
      price: 12000,
      capacity: '1 personne',
      features: [
        'Accès à la soirée de couronnement',
        'Place assise numérotée',
        'Cocktail de bienvenue',
        'Programme de la soirée'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 'couple',
      name: 'Billet Couple',
      price: 20000,
      capacity: '2 personnes',
      popular: true,
      features: [
        'Accès à la soirée de couronnement',
        '2 places assises numérotées',
        'Cocktail de bienvenue',
        'Programme de la soirée',
        'Photo souvenir offerte'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 'group',
      name: 'Billet Groupe',
      price: 51000,
      capacity: '5 personnes',
      features: [
        'Accès à la soirée de couronnement',
        '5 places assises numérotées',
        'Cocktail de bienvenue',
        'Programme de la soirée',
        'Table réservée',
        'Photo de groupe offerte'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 'vip',
      name: 'Billet VIP',
      price: 15000,
      capacity: '1 personne',
      vip: true,
      features: [
        'Accès VIP à la soirée',
        'Place premium au premier rang',
        'Cocktail VIP exclusif',
        'Meet & greet avec les candidates',
        'Goodie bag exclusif',
        'Photo avec la gagnante'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  const handlePurchase = (ticket) => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      alert('Veuillez remplir toutes les informations');
      return;
    }

    setSelectedTicket(ticket);
    
    initKkiapay({
      amount: ticket.price,
      position: 'center',
      callback: async (response) => {
        if (response.status === 'SUCCESS') {
          try {
            const purchaseData = {
              ticket,
              customer: customerInfo,
              transactionId: response.transactionId,
              date: new Date().toISOString()
            };

            await fetch('/.netlify/functions/purchase-ticket', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(purchaseData)
            });

            generateTicketPDF(purchaseData);
            
            alert('Votre billet a été envoyé par email !');
            setCustomerInfo({ name: '', email: '', phone: '' });
          } catch (error) {
            console.error('Erreur:', error);
          }
        }
      },
      theme: '#8B0000'
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-black via-accent to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Billetterie</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Réservez votre place pour la soirée de couronnement de Miss FSS-Médecine 2025
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12 glass-effect rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Vos informations</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nom complet"
              value={customerInfo.name}
              onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary"
            />
            <input
              type="email"
              placeholder="Email"
              value={customerInfo.email}
              onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary"
            />
            <input
              type="tel"
              placeholder="Téléphone"
              value={customerInfo.phone}
              onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className={`relative glass-effect rounded-xl p-6 hover:border-secondary transition-all ${
                ticket.popular || ticket.vip ? 'border-2 border-secondary' : ''
              }`}
            >
              {ticket.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-accent px-4 py-1 rounded-full text-sm font-bold">
                    Populaire
                  </span>
                </div>
              )}
              {ticket.vip && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-secondary to-yellow-500 text-accent px-4 py-1 rounded-full text-sm font-bold">
                    VIP
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {ticket.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{ticket.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{ticket.capacity}</p>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {ticket.price.toLocaleString()}
                </div>
                <p className="text-gray-400 text-sm">FCFA</p>
              </div>

              <ul className="space-y-3 mb-6">
                {ticket.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <svg className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePurchase(ticket)}
                className={`w-full ${ticket.vip ? 'btn-secondary' : 'btn-primary'} text-white font-semibold py-3 px-6 rounded-lg`}
              >
                Acheter maintenant
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center glass-effect rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Informations importantes</h3>
          <div className="space-y-3 text-gray-300 text-left">
            <p className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              Après votre achat, vous recevrez votre billet par email au format PDF
            </p>
            <p className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              Présentez votre billet (imprimé ou sur smartphone) à l'entrée de l'événement
            </p>
            <p className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              Les billets ne sont ni remboursables ni échangeables
            </p>
            <p className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              Pour toute question, contactez-nous via nos réseaux sociaux
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticketing;