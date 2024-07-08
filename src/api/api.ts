const BASE_URL = 'https://swapi.dev/api';

export async function fetchAllStarships() {
  const response = await fetch(`${BASE_URL}/starships`);
  const data = await response.json();
  return data.results;
}

export async function fetchSearchedStarships(search: string) {
  console.log('startFetching');
  const response = await fetch(`${BASE_URL}/starships/?search=${search}`);
  const data = await response.json();
  return data.results;
}
