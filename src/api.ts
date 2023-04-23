import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const gqlClient = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
})

export const fetchLaunches = async () => {
  const res = await gqlClient.query({
    query: gql`
      query Launches {
        launches {
          id
          details
          mission_name
          rocket {
            rocket_name
          }
          links {
            video_link
            article_link
          }
          launch_date_utc
        }
      }
    `,
  })
  return res
}
