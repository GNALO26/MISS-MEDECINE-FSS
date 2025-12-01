import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { path: '/', label: 'Accueil' },
    { path: '/vote', label: 'Voter' },
    { path: '/billetterie', label: 'Billetterie' },
    { path: '/a-propos', label: 'À propos' },
  ];

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="container-pro">
        {/* Main */}
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src="/images/logo-event.png" 
                  alt="Miss FSS" 
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">Miss FSS-Médecine</h3>
                  <p className="text-sm text-gray-400">2025</p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed max-w-md">
                Le concours d'élégance et de beauté de la Faculté des Sciences de Santé du Bénin.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-[#FFD700] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Partenaires</h4>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 glass-pro rounded-lg flex items-center justify-center p-2">
                    <img src="/images/logo-aemc.png" alt="AEMC" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">AEMC</p>
                    <p className="text-xs text-gray-500">Organisateur</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 glass-pro rounded-lg flex items-center justify-center p-2">
                    <img src="/images/logo-guilok.png" alt="GUI-LOK" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">GUI-LOK Dev</p>
                    <p className="text-xs text-gray-500">Développeur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {year} Miss FSS-Médecine. Tous droits réservés.</p>
            <div className="flex items-center gap-4">
              <span>Organisé par <span className="text-[#FFD700]">AEMC</span></span>
              <span>·</span>
              <span>Développé par <span className="text-[#FFD700]">GUI-LOK Dev</span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;