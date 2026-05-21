import { NamedAPIResource, PokemonListResponse, Pokemon, Species, LocationArea } from './Interfaces';

const BASE_URL = 'https://pokeapi.co/api/v2';
export async function  getAllPokemon(): Promise<NamedAPIResource[]> {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=1025`);
    if(!response.ok){
      throw new Error('Failed to get Pokemon');
    }
    const data: PokemonListResponse = await response.json();
    return data.results;
  } catch(error){
    console.error(error);
    return [];
  }
};

export async function getPokemonDetails(name:string): Promise<Pokemon> {
  const response = await fetch(`${BASE_URL}/pokemon/${name}`);
  if(!response.ok){
    throw new Error('Failed to get Pokemon details for ${name}');
  }
  return response.json();
}