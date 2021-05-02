import './App.css';
import UserCard from './components/UserCard';
import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { toast } from 'react-toastify';
import DarkModeToggle from 'react-dark-mode-toggle';

import UserDetails from './pages/UserDetails';
import ErrorToast from './components/ErrorToast';
import useDarkMode from 'use-dark-mode';

const API_ENDPOINT = `https://swapi.dev/api/people/`;

function App() {
  const [users, setUsers] = useState([]);
  const darkMode = useDarkMode(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetch(API_ENDPOINT, {
          method: 'GET',
        });

        let transformedData = await data.json();

        setUsers(transformedData);
      } catch (error) {
        toast.error(`An error occured! ${error}, please reload the page`, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    };
    getUsers();
  }, []);

  return (
    <>
      {users.results && (
        <DarkModeToggle
          checked={darkMode.value}
          onChange={darkMode.toggle}
          size={47}
          className="theme-btn"
        />
      )}
      <ErrorToast />
      <Switch>
        <Route path="/" exact>
          <UserCard users={users} />
        </Route>
        <Route path="/users/:index">
          <UserDetails />
        </Route>
      </Switch>
    </>
  );
}

export default App;
