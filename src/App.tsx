import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { useEffect, useState } from 'react'

import { LaunchResponseType, LaunchType } from './types'

import './App.css'
import { LaunchCard } from './LaunchCard'

const gqlClient = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
})

const App = () => {
  const [launchResult, setLaunchResult] = useState<LaunchResponseType>()

  useEffect(() => {
    const fetchLaunches = async () => {
      const res = await gqlClient.query({
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
        {launchResult &&
          launchResult.data.launches.map((launch: LaunchType) => (
            <LaunchCard {...launch} key={launch.id} />
          ))}
      </header>
    </div>
  )
}

export default App
