import React from 'react';
import { useHistory } from 'react-router';
import Preloader from './Preloader';

export default function CharacterCard({ characters }) {
  let history = useHistory();

  const convertNameToSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  };

  const handleCharacter = (name) => {
    const slug = convertNameToSlug(name);
    history.push(`/slug/${name}`);
    console.log(slug);
  };

  return (
    <>
      {console.log(characters)}
      {characters.length === 0 && <Preloader />}
      {characters.length !== 0 && (
        <section className="character_grid">
          {characters.results.map((character, i) => (
            <figure onClick={() => handleCharacter(character.name)} key={i}>
              <img
                className="character-img"
                src="http://isgpp.com.ng/wp-content/uploads/bfi_thumb/isgpp_avatar_placeholder-nn13xxddqb4k2et3buosj68bh92wogalq28zpaeioo.png"
                alt={character.name}
                title={character.name}
              />
              <figcaption className="username">{character.name}</figcaption>
            </figure>
          ))}
        </section>
      )}
    </>
  );
}