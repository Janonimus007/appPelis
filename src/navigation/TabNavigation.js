import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PeliculasFavoritas from '../screens/PeliculasFavoritas';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

  const Tab = createBottomTabNavigator();
export default function TabNavigation() {

  return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="pelisFav" component={PeliculasFavoritas} />
    </Tab.Navigator>
  </NavigationContainer>
  )
}