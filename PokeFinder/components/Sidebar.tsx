import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import clsx from 'clsx';
import { Link } from 'expo-router';


const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  function updateSidebarOpen(isOpen: boolean) {
    setSidebarOpen(isOpen);
  }
  return (
    <>
      <View
        className={clsx(
          'absolute h-screen w-screen bg-gray-950 lg:opacity-[0]',
          sidebarOpen ? 'opacity-[0.75]' : 'opacity-[0]'
        )}
      />
      <View
        className={clsx(
          'z-9999 fixed left-0 top-0 flex h-screen w-[225px] flex-col overflow-y-hidden bg-primary duration-300 ease-linear lg:translate-x-0',
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
        className="fixed size-[100px] translate-x-14 translate-y-5 rounded-full border-[5px] border-accent-foreground bg-accent transition-colors duration-300 active:bg-accent-foreground"
      />
    </>
  );
};

export default Sidebar;