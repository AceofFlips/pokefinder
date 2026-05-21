import { Pokemon } from '../api/Interfaces';
import PokemonCard from './PokemonCard';
import { Text, View } from "react-native"

interface PokemonGridProps {
  pokemonList: Pokemon[];
  //caught: Set<number>;
  //onToggleCaught: (id: number) => void;
  onCardPress: (pokemon: Pokemon) => void;
}
const PokemonGrid = ({ pokemonList,  onCardPress}: PokemonGridProps) => {
  if (pokemonList.length === 0) {
    return <Text className="text-foreground">No Pokemon found.</Text>
  }
  return (
    <View className="grid gap-2 p-2 grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 w-screen lg:w-3/4">
      {pokemonList.map((p, index) => (
        <View key={p.id} className="">
          <PokemonCard
            pokemon={p}
            //isCaught={caught.has(p.id)}
            //onToggleCaught={onToggleCaught}
            onCardPress={onCardPress}
          />
        </View>
      ))}
    </View>
  );
}
export default PokemonGrid;