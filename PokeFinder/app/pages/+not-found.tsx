import UI from '../../components/UI';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NotFoundScreen()  {
  const navigation = useNavigation();
  return (
    <ScrollView className="h-screen w-screen bg-background ">
      <View className="relative h-screen  flex items-center justify-center lg:left-[60px]">
        <Text className="text-5xl font-bold text-foreground">404</Text>
        <Text className="text-xl text-foreground">This page could not be found.</Text>
        <Pressable onPress={() => navigation.navigate('Home')} className="">
          <Text className="text-xl text-foreground underline">Return to the homepage</Text>
        </Pressable>
      </View>
      <UI />
    </ScrollView>
  );
}