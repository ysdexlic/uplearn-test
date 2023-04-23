import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

const gqlClient = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
});

const App = () => {
  const [launches, setLaunches] = useState({})

  useEffect(() => {
    const fetchLaunches = async () => {
      const res = await gqlClient
      .query({
        query: gql`
        query Launches {
          launches {
            id
            details
            mission_name
            links {
              video_link
              article_link
            }
            launch_date_utc
          }
        }
        `,
      })
      setLaunches(res)
    }
    fetchLaunches()
  }, [setLaunches])

  console.log(launches)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
