import Home from './pages/home';
import NotFoundScreen from "./pages/+not-found";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './pages/search';
export default function RootStack() {
  const Stack = createNativeStackNavigator();


    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="NotFound" component={NotFoundScreen}></Stack.Screen>
          <Stack.Screen name="Search" component={Search}></Stack.Screen>
      </Stack.Navigator>
    );};