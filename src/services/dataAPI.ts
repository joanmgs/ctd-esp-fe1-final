const baseURL = "https://rickandmortyapi.com/api/character?";

const getPersonajes = async (page: number): Promise<Array<any> | unknown> => {
  try {
    const response = await fetch(`${baseURL}page=${page}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return error;
  }
};

export default getPersonajes;
