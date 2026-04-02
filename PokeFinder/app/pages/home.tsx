import {Text, View, ScrollView, Pressable} from "react-native";
import { Link } from 'expo-router';
import { useTheme } from '../../components/themes/context';
import { useState } from 'react';
import clsx from 'clsx';
export default function Home()  {
  const { theme, handleThemeSwitch, systemEnabled } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  function updateSidebarOpen(isOpen: boolean) {
    setSidebarOpen(isOpen);
  }

  return (
    <View className="flex h-screen bg-background">
      <Text className="text-foreground">Test UwU</Text>

      <View
        className={clsx(
          'z-9999 w-1/6 absolute left-0 top-0 flex h-screen flex-col overflow-y-hidden bg-primary duration-300 ease-linear lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}>
        <View className="lg:py-6.5 py-5.5 flex items-center justify-between gap-2 px-6">
          <Link href="/" className="px-3 py-2">
            <Text className="text-background">Go To Home</Text>
          </Link>
        </View>
        <View className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <View className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
            <Text className="text-background">Filler Text Here</Text>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() => updateSidebarOpen(!sidebarOpen)}
        className="size-[100px] rounded-full border-[5px] border-accent-foreground bg-accent translate-x-7 transition-colors duration-300 active:bg-accent-foreground">

      </Pressable>
    </View>
  );};

