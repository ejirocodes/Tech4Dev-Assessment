import './App.css';
import UserCard from './components/UserCard';
import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserDetails from './pages/UserDetails';

const API_ENDPOINT = `https://swapi.dev/api/people/`;

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetch(API_ENDPOINT, {
          method: 'GET',
        });

        let transformedData = await data.json();

        setUsers(transformedData);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <Switch>
      <Route path="/" exact>
        <UserCard users={users} />
      </Route>
      <Route path="/users/:index">
        <UserDetails />
      </Route>
    </Switch>
  );
}

export default App;
