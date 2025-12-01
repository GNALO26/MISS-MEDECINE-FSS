import React from 'react';

const TicketingSection = ({ onPurchase }) => {
  const tickets = [
    {
      id: 'single',
      name: 'Billet Standard',
      price: 12000,
      capacity: '1 personne',
      features: [
        'Accès à la soirée',
        'Place assise numérotée',
        'Cocktail de bienvenue',
        'Programme officiel'
      ]
    },
    {
      id: 'couple',
      name: 'Billet Couple',
      price: 20000,
      capacity: '2 personnes',
      popular: true,
      features: [
        'Accès à la soirée',
        '2 places assises',
        'Cocktail de bienvenue',
        'Programme officiel',
        'Photo souvenir'
      ]
    },
    {
      id: 'group',
      name: 'Billet Groupe',
      price: 51000,
      capacity: '5 personnes',
      features: [
        'Accès à la soirée',
        '5 places assises',
        'Table réservée',
        'Cocktail premium',
        'Programme officiel',
        'Photo de groupe'
      ]
    },
    {
      id: 'vip',
      name: 'Billet VIP',
      price: 15000,
      capacity: '1 personne',
      vip: true,
      features: [
        'Accès VIP',
        'Place premium',
        'Cocktail exclusif',
        'Meet & greet',
        'Goodie bag',
        'Photo avec la gagnante'
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {tickets.map((ticket, index) => (
        <div
          key={ticket.id}
          className={`card-clean p-6 flex flex-col fade-up ${
            ticket.popular || ticket.vip ? 'border-[#FFD700]/30' : ''
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Badge */}
          {(ticket.popular || ticket.vip) && (
            <div className="mb-4">
              <span className="badge-gold text-xs">
                {ticket.popular ? 'Populaire' : 'VIP'}
              </span>
            </div>
          )}

          {/* Header */}
          <div className="mb-6">
            <h3 className="heading-card text-white mb-2">{ticket.name}</h3>
            <p className="text-sm text-gray-400 mb-4">{ticket.capacity}</p>
            
            <div className="text-3xl font-bold text-gold mb-1">
              {ticket.price.toLocaleString()}
            </div>
            <p className="text-sm text-gray-500">FCFA</p>
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-6 flex-grow">
            {ticket.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <svg className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <button
            onClick={() => onPurchase(ticket)}
            className={ticket.vip ? 'btn-gold w-full' : 'btn-outline-gold w-full'}
          >
            Acheter
          </button>
        </div>
      ))}
    </div>
  );
};

export default TicketingSection;