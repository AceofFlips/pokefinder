import { useState, useEffect, useCallback } from 'react';
import { getAllPokemon, getPokemonDetails } from '../api/ApiConnection';
import {NamedAPIResource, Pokemon} from '../api/Interfaces';

const MAX_PER_PAGE = 24;

export function usePokemon(){
  const [allPokemon, setAllPokemon] = useState<NamedAPIResource[]>([]);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getPokemonList = async () => {
      setLoading(true);
      setError(null);
      setPage(1);
      try {
        let pokemonNames: NamedAPIResource[];
        pokemonNames = await getAllPokemon();
        setAllPokemon(pokemonNames);
        setTotalPages(Math.ceil(pokemonNames.length / MAX_PER_PAGE));

      }
      catch (error) {
        console.error(error);
        setError(`Failed to load the Pokemon list.`);
        setAllPokemon([]);
        setTotalPages(0);
      } finally {

      }
    };

    getPokemonList();
  },[]);

  useEffect(() => {
    if(allPokemon.length === 0) {
      setPokemon([]);
      return;
    }

    const getPageDetails = async () => {
      setLoading(true);
      setError(null);
      try{

        const listPromises = allPokemon.map((p) => getPokemonDetails(p.name));
        const pokemonListResult = await Promise.all(listPromises);

        setPokemonList(pokemonListResult);

        const offset = (page - 1) * MAX_PER_PAGE;
        const pokemonForPage = allPokemon.slice(offset, offset + MAX_PER_PAGE);

        const detailPromises = pokemonForPage.map(p=> getPokemonDetails(p.name));
        const pokemonDetails = await Promise.all(detailPromises);

        setPokemon(pokemonDetails);


      } catch (error) {
        console.error(error);
        setError(`Failed to load the Pokemon details.`);
        setPokemon([]);
      } finally {
        setLoading(false);
      }
    };

    if(allPokemon.length > 0) {
      getPageDetails();
    }
  }, [allPokemon,page]);

  const retry = useCallback(() => {
    setError(null);
    setAllPokemon([]);
  }, []);

  return { pokemonList, pokemon, loading, error, page, totalPages, setPage, retry};
}