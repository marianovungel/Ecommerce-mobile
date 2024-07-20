import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart, NewRivals, ProductDetails } from './screens';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Bottom Navigation'
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='ProductDetails'
          component={ProductDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='ProductList'
          component={NewRivals}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}