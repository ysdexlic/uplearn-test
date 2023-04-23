import { render, screen } from '@testing-library/react'
import { LaunchCard } from '.'

const mockLaunch = {
  id: '123',
  details: 'test details',
  mission_name: 'test mission_name',
  rocket: {
    rocket_name: 'test rocket_name',
  },
  links: {
    video_link: 'https://youtube.com/watch?v=video_link',
    article_link: 'https://space.com/article_link',
  },
  launch_date_utc: '2007-03-21T01:10:00.000Z',
}

describe('LaunchCard Component', () => {
  it('renders the text', () => {
    render(<LaunchCard {...mockLaunch} />)

    const details = screen.getByText(mockLaunch.details)
    expect(details).toBeInTheDocument()

    const missionName = screen.getByText(mockLaunch.mission_name)
    expect(missionName).toBeInTheDocument()

    const rocketName = screen.getByText(`(${mockLaunch.rocket.rocket_name})`)
    expect(rocketName).toBeInTheDocument()

    const videoLink = screen.getByText('Link to video')
    expect(videoLink).toBeInTheDocument()

    const articleLink = screen.getByText('Link to article')
    expect(articleLink).toBeInTheDocument()
  })

  describe('when items are missing', () => {
    const mockLaunch = {
      id: '123',
      details: 'test details',
      mission_name: 'test mission_name',
      rocket: {
        rocket_name: 'test rocket_name',
      },
      links: {},
      launch_date_utc: '2007-03-21T01:10:00.000Z',
    }
    it("doesn't render the missing link", () => {
      render(<LaunchCard {...mockLaunch} />)
      const videoLink = screen.queryByText('Link to video')
      expect(videoLink).not.toBeInTheDocument()
    })

    it("doesn't render the missing article", () => {
      render(<LaunchCard {...mockLaunch} />)
      const articleLink = screen.queryByText('Link to article')
      expect(articleLink).not.toBeInTheDocument()
    })
  })
})
