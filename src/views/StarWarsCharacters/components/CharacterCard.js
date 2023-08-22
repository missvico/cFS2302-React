function CharacterCard({character}) {
  return (
    <div className="card text-bg-warning mb-3" style={{maxWidth: "18rem"}}>
      <div className="card-header">Character</div>
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          <ul>
            {character.birth_year && <li>Birth Year: {character.birth_year}</li>}
            {character.height &&<li>Height: {character.height}</li>}
            {character.mass &&<li>Mass: {character.mass}</li>}
            {character.skin_color &&<li>Skin Color: {character.skin_color}</li>}
            {character.eye_color &&<li>Eye Color: {character.eye_color}</li>}
            {character.gender &&<li>Gender: {character.gender}</li>}

        </ul>
        </p>
      </div>
    </div>
  );
}

export default CharacterCard;
