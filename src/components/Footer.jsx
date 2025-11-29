import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-accent to-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src="/images/logo-event.png" 
              alt="Miss FSS-Médecine" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Le concours de beauté et d'élégance de la Faculté des Sciences de Santé du Bénin
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/vote" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Voter
                </Link>
              </li>
              <li>
                <Link to="/billetterie" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Billetterie
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-400 hover:text-white transition-colors text-sm">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4">Organisateur</h3>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logo-aemc.png" 
                alt="AEMC" 
                className="h-12 w-auto"
              />
              <div>
                <p className="text-white font-medium">AEMC</p>
                <p className="text-gray-400 text-xs">Association des Étudiants</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4">Développeur</h3>
            <div className="flex items-center space-x-3">
              <img 
                src="/images/logo-guilok.png" 
                alt="GUI-LOK Dev" 
                className="h-12 w-auto"
              />
              <div>
                <p className="text-white font-medium">GUI-LOK Dev</p>
                <p className="text-gray-400 text-xs">Solutions digitales</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Miss FSS-Médecine. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6">
              <p className="text-gray-400 text-sm">
                Organisé par <span className="text-secondary font-medium">AEMC</span>
              </p>
              <span className="text-gray-600">|</span>
              <p className="text-gray-400 text-sm">
                Développé par <span className="text-secondary font-medium">GUI-LOK Dev</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;