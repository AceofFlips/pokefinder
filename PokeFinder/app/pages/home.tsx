import {Text, View, ScrollView, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';
import UI from "../../components/UI";
export default function Home()  {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView className="h-screen w-screen overflow-y-auto bg-background">
          <View className="top-48 h-1/2 place-items-center lg:left-[125px]">
            <Text className="py-5 font-mono text-4xl text-foreground">Welcome to PokeFinder!</Text>
            <Text className="font-mono text-xl text-foreground">Description text here.</Text>
            <View className="grid grid-cols-3 gap-5 py-5">
              <Pressable className="border border-foreground px-1 py-3">
                <Text className="text-center font-mono text-xl text-foreground">
                  Create an Account
                </Text>
              </Pressable>
              <Pressable className="border border-foreground px-1 py-3">
                <Text className="text-center font-mono text-xl text-foreground">
                  Create a Profile
                </Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate('Search')}
                className="border border-foreground px-1 py-3">
                <Text className="text-center font-mono text-xl text-foreground">
                  Search for Pokemon
                </Text>
              </Pressable>
            </View>
          </View>
      </ScrollView>
      <UI />
    </>
  );};

