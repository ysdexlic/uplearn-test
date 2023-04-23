import { useEffect, useState } from 'react'

import { LaunchResponseType, LaunchType } from './types'

import './App.css'
import { LaunchCard } from './LaunchCard'
import { fetchLaunches } from './api'

const App = () => {
  const [launchResult, setLaunchResult] = useState<LaunchResponseType>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchLaunches()
      setLaunchResult(res)
    }
    fetchData()
  }, [setLaunchResult])

  return (
    <div className="App" data-testid="app">
      <div className="launches">
        {launchResult &&
          launchResult.data.launches.map((launch: LaunchType) => (
            <LaunchCard {...launch} key={launch.id} />
          ))}
      </div>
    </div>
  )
}

export default App
