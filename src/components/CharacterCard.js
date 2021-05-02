import React from 'react';
import { useHistory } from 'react-router';
import Preloader from './Preloader';

export default function CharacterCard({ characters }) {
  let history = useHistory();

  // const convertNameToSlug = (text) => {
  //   return text
  //     .toLowerCase()
  //     .replace(/[^\w ]+/g, '')
  //     .replace(/ +/g, '-');
  // };

  const handleCharacter = (index) => {
    // const slug = convertameToSlug(name);
    history.push(`characters/${index + 1}`);
  };

  return (
    <>
      {characters.length === 0 && <Preloader />}
      {characters.length !== 0 && (
        <section className="character_grid">
          {characters.results.map((character, i) => (
            <figure
              onClick={() => handleCharacter(i)}
              key={i}
              title={character.name}
            >
              <img
                className="character-img"
                src="http://cliparts101.com/files/367/63BA654AECB7FD26A32D08915C923030/avatar_nick.png"
                alt={character.name}
                title={character.name}
              />
              <figcaption className="username">{character.name}</figcaption>
              <div className="go-corner" href="#">
                <div className="go-arrow">→</div>
              </div>
            </figure>
          ))}
        </section>
      )}
    </>
  );
}
