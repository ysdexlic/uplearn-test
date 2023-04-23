import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import {useEffect, useState} from 'react';

import './App.css';

const gqlClient = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
});

type LaunchType = {
  id: string;
  details: string;
  mission_name: string;
  links: {
    video_link: string;
    article_link: string;
  };
  launch_date_utc: string;
}

type ResponseType = {
  data: {
    launches: LaunchType[]
  };
  loading: boolean;
  networkStatus: number;
}

const App = () => {
  const [launchResult, setLaunchResult] = useState<ResponseType>()

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
      setLaunchResult(res)
    }
    fetchLaunches()
  }, [setLaunchResult])

  return (
    <div className="App" data-testid="app">
      <header className="App-header">
        {launchResult && launchResult.data.launches.map((launch: LaunchType) => (
          <div key={launch.id}>
            {launch.id}
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
