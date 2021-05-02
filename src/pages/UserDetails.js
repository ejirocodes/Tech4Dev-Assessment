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
      {user && (
        <div>
          <div className="back" onClick={() => history.goBack()}>
            Back
          </div>
          <h1> {userClass.getUser().name}</h1>
          {/* Hide gender if it's not available */}
          {userClass.getUser().gender !== 'n/a' && (
            <p>{userClass.getUser().gender}</p>
          )}
          <p>{userClass.getUser().height}</p>
        </div>
      )}
    </>
  );
}
