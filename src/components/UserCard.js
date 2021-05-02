import React from 'react';
import { useHistory } from 'react-router';
import Preloader from './Preloader';

export default function UserCard({ users }) {
  let history = useHistory();

  // Leaving this here for my future self
  // const convertNameToSlug = (text) => {
  //   return text
  //     .toLowerCase()
  //     .replace(/[^\w ]+/g, '')
  //     .replace(/ +/g, '-');
  // };

  const handleUsers = (index) => {
    // const slug = convertameToSlug(name);
    // navigate to details page using the index as route param
    history.push(`users/${index + 1}`);
  };

  return (
    <>
      {users.length === 0 && <Preloader />}
      {users.length !== 0 && (
        <section className="character_grid">
          {users.results.map((user, i) => (
            <figure onClick={() => handleUsers(i)} key={i} title={user.name}>
              <img
                className="character-img"
                src="http://cliparts101.com/files/367/63BA654AECB7FD26A32D08915C923030/avatar_nick.png"
                alt={user.name}
                title={user.name}
              />
              <figcaption className="username">{user.name}</figcaption>
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
