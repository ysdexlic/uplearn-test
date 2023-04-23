import { render, screen } from '@testing-library/react'
import { LaunchCard } from './LaunchCard'

describe('LaunchCard Component', () => {
  const mockLaunch = {
    id: '123',
    details: 'test details',
    mission_name: 'test mission_name',
    links: {
      video_link: 'https://youtube.com/watch?v=video_link',
      article_link: 'https://space.com/article_link',
    },
    launch_date_utc: '2007-03-21T01:10:00.000Z',
  }

  it('renders the text', () => {
    render(<LaunchCard {...mockLaunch} />)

    const details = screen.getByText(mockLaunch.details)
    expect(details).toBeInTheDocument()

    const missionName = screen.getByText(mockLaunch.mission_name)
    expect(missionName).toBeInTheDocument()
  })
})
