import { useState, useEffect } from 'react';
import Actrice from './Actrice';
import { actricesData } from './data.js';
import './App.css'

function App() {
  const [actriceActive, setActriceActive] = useState(2); // Index de l'actrice initialement active

  // Gestion des animations avec useEffect
  useEffect(() => {
    // Sélectionner les éléments à animer
    const $mainMenuItems = document.querySelectorAll("#main-menu ul li");

    // Appliquer les animations en fonction de l'état "actriceActive"
    $mainMenuItems.forEach((item, index) => {
      if (index === actriceActive) {
        // Ouvrir la section
        item.style.width = '420px';
      } else {
        // Fermer la section
        item.style.width = '140px';
      }
    });
  }, [actriceActive]); // Déclencher useEffect lorsque actriceActive change

  const handleClick = (index) => {
    // Comportement "toggle":
    setActriceActive(prevIndex => (prevIndex === index ? -1 : index)); 
  };

  return (
    <div>
      <header>
        <h1>Top 5 des meilleures actrices</h1>
      </header>
      <section id="main-menu">
        <ul>
          {/* Boucle pour afficher chaque actrice */}
          {actricesData.map((actrice, index) => (
            <Actrice key={index} index={index} {...actrice} active={index === actriceActive} handleClick={handleClick} />
          ))}
        </ul>
      </section>
      <section id="buttons-menu">
        <ul>
          {/* Boucle pour afficher les boutons */}
          {actricesData.map((actrice, index) => (
            <li 
              key={index} 
              className="button" 
              // Gestionnaire d'événement au clic
              onClick={() => handleClick(index)}
            >
              {actrice.prenom}<br />{actrice.nom}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;