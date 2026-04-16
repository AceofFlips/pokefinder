import {Theme} from './components/themes/provider'
import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './app/RootStack';
import { View } from 'react-native';
import UI from './components/UI';
import Sidebar from './components/Sidebar';
import { useEffect } from 'react';
import { useTheme } from './components/themes/context';

export default function App() {
  const config = {
    screens: {
      Home: '/',
      NotFound: '*',
    },
  };

  const linking = {
    prefixes: ['example://', 'https://example.com'],
    config,
  };


  return (
    <Theme>
      <NavigationContainer linking={linking}>
        <RootStack />
      </NavigationContainer>
    </Theme>
  );
}

