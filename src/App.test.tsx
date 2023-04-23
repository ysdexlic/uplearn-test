import { render, screen } from '@testing-library/react'
import { fetchLaunches } from './api'
import App from './App'

jest.mock('./api.ts')

describe('App', () => {
  const mockFetchLaunches = jest.mocked(fetchLaunches)
  mockFetchLaunches.mockResolvedValue({
    data: {},
    loading: false,
    networkStatus: 7,
  })

  it('renders the app', () => {
    render(<App />)

    const appElement = screen.getByTestId('app')
    expect(appElement).toBeInTheDocument()
  })
})
