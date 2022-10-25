import getGraphqlData from './getGraphqlData';

export default async function getGenres() {
  const query = 'query { genres }';

  const response = await getGraphqlData<{ genres: string[] }>(query);
  return response.genres;
}
