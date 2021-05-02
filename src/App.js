import './App.css';
import CharacterCard from './components/CharacterCard';
import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterDetails from './pages/CharacterDetails';

const API_ENDPOINT = `https://swapi.dev/api/people/`;

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetch(API_ENDPOINT, {
          method: 'GET',
          //   headers: new Headers({

          //   Accept: 'application/vnd.github.cloak-preview',
          // }),
        });

        let transformedData = await data.json();

        setCharacters(transformedData);
        console.log({ characters });
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <Switch>
      <Route path="/" exact>
        <CharacterCard characters={characters} />
      </Route>
      <Route path="/characters/:index">
        <CharacterDetails />
      </Route>
    </Switch>
  );
}

export default App;
