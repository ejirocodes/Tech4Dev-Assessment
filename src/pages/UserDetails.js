import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import ErrorToast from '../components/ErrorToast';
import { toast } from 'react-toastify';

import Preloader from '../components/Preloader';
import avatar from '../images/avatar_nick.png';
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
  const [user, setUser] = useState({});
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
        setUser(transformedData);
      } catch (error) {
        toast.error(`An error occured! ${error}, please reload the page`, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    };
    getUser();
  }, [index]);

  return (
    <>
      {!userClass.getUser().name && <Preloader />}
      <ErrorToast />
      {userClass.getUser().name && (
        <section style={{ padding: '2rem' }}>
          <span className="back" onClick={() => history.goBack()}>
            Back
          </span>
          <div className="character_grid character_grid2">
            <figure title={userClass.getUser().name}>
              <LazyLoadImage
                className="character-img"
                src={avatar}
                alt={userClass.getUser().name}
                title={userClass.getUser().name}
                height={user.height}
                width={user.height}
                effect="blur"
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
                <div className="go-arrow">???</div>
              </div>
            </figure>
          </div>
        </section>
      )}
    </>
  );
}
