function Actrice({ nom, prenom, films, active, position, handleClick, index }) {
  // Déterminer les classes CSS dynamiquement en fonction de l'état "active"
  const imageClass = active ? 'color' : 'bw'; 
  const descriptionClass = active ? 'description active' : 'description'; 

  return (
    <li onClick={() => handleClick(index)}>
        <div className="images">
            {/* Appliquer la classe dynamique à l'élément d'image */}
            <div className={imageClass} style={{ backgroundPositionX: position }}></div> 
        </div>
        <div className={descriptionClass}>
            <h2>
                {prenom}
                <br />
                {nom}
            </h2>
            <h3>Ses meilleurs films</h3>
            <p className="p1">{films[0]}</p>
            <p className="p2">{films[1]}</p>
            <p className="p3">{films[2]}</p>
        </div>
    </li>
  );
}

export default Actrice;