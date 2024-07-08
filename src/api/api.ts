const BASE_URL = 'https://swapi.dev/api';

export async function fetchAllStarships() {
  console.log('startFetching');
  const response = await fetch(`${BASE_URL}/starships`);
  const data = await response.json();
  return data.results;
}
