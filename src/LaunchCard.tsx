import { LaunchType } from './types'

export const LaunchCard = ({
  id,
  details,
  mission_name,
  links: { video_link, article_link },
  launch_date_utc,
}: LaunchType) => (
  <div>
    <h1>{mission_name}</h1>
    <p>{details}</p>
    <p>{launch_date_utc}</p>
  </div>
)
