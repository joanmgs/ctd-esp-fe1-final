const filterCharactersURL = "https://rickandmortyapi.com/api/character/?";

const getPersonajes = async (search: string, url?: string): Promise<any> => {
  const response = await fetch( !url ? `${filterCharactersURL}name=${search}` : url);
  const data = await response.json();
  console.log(data);
  return data;
};



export default getPersonajes;
