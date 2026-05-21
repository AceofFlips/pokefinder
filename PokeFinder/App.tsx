import {Theme} from './components/themes/provider'
import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './app/RootStack';

export default function App() {
  const config = {
    screens: {
      Home: '/',
      NotFound: '*',
      Search: '/search',
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

