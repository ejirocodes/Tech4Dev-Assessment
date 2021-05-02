import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CharacterDetails() {
  const [character, setCharacter] = useState({});
  const { index } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await fetch(`https://swapi.dev/api/people/${index}/`, {
          method: 'GET',
          headers: new Headers({
            // Accept: 'application/vnd.github.cloak-preview',
            'Content-Type': 'application/x-www-form-urlencoded',
          }),
        });

        let transformedData = await data.json();

        setCharacter(transformedData);
        console.log({ character });
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  return (
    <>
      {character && (
        <div>
          <h1> {character.name}</h1>
          {/* Hide gender if it's not available */}
          {character.gender !== 'n/a' && <p>{character.gender}</p>}
          <p>{character.height}</p>
        </div>
      )}
    </>
  );
}
