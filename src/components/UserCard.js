import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Preloader from './Preloader';
import avatar from '../images/avatar_nick.png';

export default function UserCard({ users }) {
  const [searchValue, setSearchValue] = React.useState('');
  const [filteredUsers, setFilteredUsers] = React.useState([]);

  let history = useHistory();

  // Leaving this here for my future self
  // const convertNameToSlug = (text) => {
  //   return text
  //     .toLowerCase()
  //     .replace(/[^\w ]+/g, '')
  //     .replace(/ +/g, '-');
  // };

  /**
   * Navigate to details page using the index as route param
   * @param {String} index - Index of user array passed to route param.
   */

  const handleUsers = (index) => {
    history.push(`users/${index + 1}`);
  };

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (users.length !== 0) {
      setFilteredUsers(
        users.results.filter((user) => {
          return user.name.toLowerCase().includes(searchValue.toLowerCase());
        })
      );
    }
  }, [searchValue, users]);

  return (
    <>
      {users.length === 0 && <Preloader />}
      {users.length !== 0 && (
        <>
          <div className="search">
            <input
              value={searchValue}
              onChange={handleSearchInputChanges}
              type="text"
              className="searchTerm"
              placeholder="Search for users..."
            />
          </div>
          <section className="character_grid">
            {filteredUsers.map((user, i) => (
              <figure onClick={() => handleUsers(i)} key={i} title={user.name}>
                <img
                  className="character-img"
                  src={avatar}
                  alt={user.name}
                  title={user.name}
                />
                <figcaption className="username">{user.name}</figcaption>
                <div className="go-corner" href="#">
                  <div className="go-arrow">→</div>
                </div>
              </figure>
            ))}
            {filteredUsers.length === 0 && <p>No user found</p>}
          </section>
        </>
      )}
    </>
  );
}
