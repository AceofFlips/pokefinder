import {Theme} from './components/themes/provider'
import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootStack from './app/RootStack';

export default function App() {
  return (
    <Theme>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Theme>
  );
}

