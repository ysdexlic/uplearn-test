import { LaunchType } from '../types'

import './index.css'

function formatDate(date: Date) {
  let day: string | number = date.getDate()
  let month: string | number = date.getMonth() + 1
  let hours: string | number = date.getHours()
  let minutes: string | number = date.getMinutes()
  day = day < 10 ? '0' + day : day
  month = month < 10 ? '0' + month : month
  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  const strTime = hours + ':' + minutes
  return `${day}/${month}/${date.getFullYear()}  ${strTime}`
}

export const LaunchCard = ({
  details,
  mission_name,
  rocket: { rocket_name },
  links: { video_link, article_link },
  launch_date_utc,
}: LaunchType) => (
  <div className="launch-card">
    <div className="launch-card__header">
      <h1>{mission_name}</h1>
      <h3>({rocket_name})</h3>
    </div>
    <h5>{formatDate(new Date(launch_date_utc))}</h5>
    <p>{details}</p>
    <div className="launch-card__links">
      {video_link && (
        <p>
          <a href={video_link}>Link to video</a>
        </p>
      )}
      {article_link && (
        <p>
          <a href={article_link}>Link to article</a>
        </p>
      )}
    </div>
  </div>
)
