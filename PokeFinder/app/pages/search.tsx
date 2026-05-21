import { Text, View, ScrollView, Pressable} from 'react-native';
import { useTheme } from '../../components/themes/context';
import { useState, useMemo, useEffect } from 'react';
import clsx from 'clsx';
import UI from '../../components/UI';
import { getPokemonDetails } from '../../api/ApiConnection';
import { usePokemon } from '../../hooks/UsePokemon';
//import { useCaught } from '../../hooks/UseCaught';
import { Pokemon } from '../../api/Interfaces';
import PokemonGrid from '../../components/PokemonGrid';
import { useDebounce } from '../../hooks/UseDebounce';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';

export default function Search() {
  const {pokemonList, pokemon, loading, error, page, totalPages, setPage, retry} = usePokemon();
  //const {caught, toggleCaught} = useCaught();

  const [searchText, setSearchText] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon|null>();
  //const [uncaught, setUncaught] = <Set<number>>(());
  //const [showUncaughtOnly, setShowUncaughtOnly] = useState(false);
  //const [loadingUncaught, setLoadingUncaught] = useState(false);
  const debouncedSearchTerm = useDebounce(searchText, 300);

  //useEffect(() => {
    //if(showUncaughtOnly && caught.size < pokemon.length) {
      //setLoadingUncaught(true);
     // const getUncaught = async () => {
        //try {
          //const caughtIds = Array.from(caught);

        //}
      //}
    //}
  //})

  const filteredPokemon = useMemo(() => {
    const result = pokemonList;

    if (!debouncedSearchTerm) {
      return pokemon;
    }
    return result.filter((p) => p.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()));
  }, [pokemonList, pokemon, debouncedSearchTerm]);


  const handleCardPress = (pokemonData: Pokemon) => {
    setSelectedPokemon(pokemonData);
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };


  return (
    <>
      <ScrollView className="flex h-screen flex-row overflow-y-auto bg-background">
        <View className="h-screen w-screen">
          <View className="top-36 flex h-1/2 place-items-center lg:left-[125px]">
            <SearchBar searchTerm={searchText} onSearchChange={setSearchText} />
            {!loading && !error && (
              <PokemonGrid pokemonList={filteredPokemon} onCardPress={handleCardPress} />
            )}
            {totalPages > 1 && !loading && !error && !debouncedSearchTerm && (
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
                disabled={loading}
              />
            )}
          </View>
        </View>
      </ScrollView>
      <UI />
    </>
  );
}
