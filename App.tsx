/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ExploreScreen from './screens/Explore';
import Profile from './screens/Profile';
import Restaurants from './screens/Restaurants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantScreen from './screens/Restaurant';

export type RootStackParams = {
  Explore: undefined;
  Restaurants: undefined;
  Profile: undefined;
  RestaurantScreen: {
    name: string
  };
}

const RootStack = createNativeStackNavigator<RootStackParams>();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Explore'>
        <RootStack.Screen name='Explore' component={ExploreScreen} />
        <RootStack.Screen name='Restaurants' component={Restaurants} />
        <RootStack.Screen name='Profile' component={Profile} />
        <RootStack.Screen name='RestaurantScreen' component={RestaurantScreen} />

      </RootStack.Navigator>

    </NavigationContainer>
  );
}


export default App;
