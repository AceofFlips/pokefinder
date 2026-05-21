import { Pokemon } from '../api/Interfaces';
import React from 'react';
import { Pressable, View, Image, Text } from 'react-native';
import clsx from "clsx";

interface PokemonCardProps {
  pokemon: Pokemon;
  //isCaught: boolean;
  //onToggleCaught: (id:number) => void;
  onCardPress: (pokemon: Pokemon) => void;
}
const PokemonCard = ({ pokemon, onCardPress}: PokemonCardProps) => {
  const handleCaughtPress = (e: React.PointerEvent)=> {
    e.stopPropagation();
    //onToggleCaught(pokemon.id);
  };

  return (
    <View className="relative overflow-hidden bg-white border border-black p-2 w-full">
      <Image
        className="h-[130px] w-[130px] object-contain"
        source={{uri:pokemon.sprites.front_default}}
        alt={pokemon.name}
      />
      <Pressable
        className={clsx(
          'absolute right-[12px] top-[12px] h-[40px] w-[40px] items-center justify-center ',
          //isCaught ? 'bg-secondary' : 'bg-primary'
        )}
        onPress={(e) => handleCaughtPress}></Pressable>
      <Text className="text-black">{pokemon.name}</Text>
    </View>
  );
};
export default PokemonCard;