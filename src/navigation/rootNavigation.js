import React, {createRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  DetailScreen,
  StreamingScreen,
  CyberScreen,
} from '../screens/index';
import RootTab from './rootTab';

const Stack = createStackNavigator();

const navigationRef = createRef();

export const navigationWithoutProps = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="HomeScreen" component={RootTab} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
