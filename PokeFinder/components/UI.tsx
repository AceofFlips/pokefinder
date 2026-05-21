import { Pressable, View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import clsx from 'clsx';

const UI = () => {
  const navigation = useNavigation();

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  function updateSidebarOpen(isOpen: boolean) {
    setSidebarOpen(isOpen);
  }

  return (
    <>
      <View className="fixed h-36 w-screen justify-center bg-primary">
        <Pressable
          onPress={() => navigation.navigate('Home')}
          className="relative left-[60px] place-self-center lg:left-[125px]">
          <Text className="bg-primary text-5xl font-bold text-yellow-300">
            PokeFinder
          </Text>
        </Pressable>
      </View>
      <View
        className={clsx(
          'absolute h-screen w-screen bg-gray-950 opacity-[0.75] lg:hidden',
          sidebarOpen ? 'block' : 'hidden'
        )}
      />
      <ScrollView
        className={clsx(
          'z-9999 fixed left-0 top-0 flex h-screen w-[225px] flex-col  bg-primary duration-300 ease-linear lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}>
        <View className="relative top-36 flex  border-b-2 border-t-2 border-background px-6">
          <Pressable onPress={() => navigation.navigate('Home')} className="pt-[8%]">
            <Text className="text-xl font-semibold text-white">Profiles</Text>
          </Pressable>
          <View className="items-center py-[4%]">
            <Pressable onPress={() => navigation.navigate('Home')} className="py-[4%]">
              <Text className="text-lg text-white">View</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Home')} className="py-[4%]">
              <Text className="text-lg text-white">Create</Text>
            </Pressable>
          </View>
        </View>
        <View className="relative top-36 flex  border-b-2 border-t-2 border-background px-6">
          <Pressable onPress={() => navigation.navigate('Home')} className="pt-[8%]">
            <Text className="text-xl font-semibold text-white">Dexes</Text>
          </Pressable>
          <View className="items-center py-[4%]">
            <Pressable onPress={() => navigation.navigate('Home')} className="py-[4%]">
              <Text className="text-lg text-white">National</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Home')} className="py-[4%]">
              <Text className="text-lg text-white">Regions</Text>
            </Pressable>
          </View>
        </View>
        <Pressable
          onPress={() => navigation.navigate('Search')}
          className="relative top-36 px-6 pt-[8%]">
          <Text className="text-xl font-semibold text-white">Search</Text>
        </Pressable>
      </ScrollView>
      <Pressable
        onPress={() => updateSidebarOpen(!sidebarOpen)}
        className="fixed size-[100px] android:size-[80px] translate-x-14 translate-y-5 rounded-full border-[5px] border-accent-foreground bg-accent transition-colors duration-300 active:bg-accent-foreground"
      />
    </>
  );
};

export default UI;