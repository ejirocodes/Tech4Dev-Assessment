import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Preloader from '../components/Preloader';

class User {
  constructor(user) {
    this.user = user;
  }

  getUser() {
    let userDetails = {
      name: this.user.name,
      gender: this.user.gender,
      height: this.user.height,
    };
    return userDetails;
  }
}

export default function UserDetails() {
  const [user, setCharacter] = useState({});
  const history = useHistory();

  const { index } = useParams();

  const userClass = new User(user);
  userClass.getUser();

  useEffect(() => {
    const getUser = async () => {
      try {
        // Get single user details based on the index passed from route param
        const data = await fetch(`https://swapi.dev/api/people/${index}/`, {
          method: 'GET',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
          }),
        });
        let transformedData = await data.json();
        setCharacter(transformedData);
        console.log(!userClass.getUser().name);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  return (
    <>
      {!userClass.getUser().name && <Preloader />}
      {userClass.getUser().name && (
        <section style={{ padding: '2rem' }}>
          <span className="back" onClick={() => history.goBack()}>
            Back
          </span>
          <div className="character_grid character_grid2">
            <figure title={userClass.getUser().name}>
              <img
                className="character-img"
                src="http://cliparts101.com/files/367/63BA654AECB7FD26A32D08915C923030/avatar_nick.png"
                alt={userClass.getUser().name}
                title={userClass.getUser().name}
              />
              <figcaption className="username">
                {' '}
                {userClass.getUser().name}
              </figcaption>
              {/* Hide gender if it's not available */}
              {userClass.getUser().gender !== 'n/a' && (
                <p>Gender: {userClass.getUser().gender}</p>
              )}
              <p>Height: {userClass.getUser().height}</p>
              <div className="go-corner" href="#">
                <div className="go-arrow">→</div>
              </div>
            </figure>
          </div>
        </section>
      )}
    </>
  );
}
