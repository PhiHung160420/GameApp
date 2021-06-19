import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, StreamingScreen, CyberScreen} from '../screens/index';
import Entypo from 'react-native-vector-icons/Entypo';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

const RootTab = () => {
  const tabBarOptions = {
    style: {backgroundColor: '#343434', borderTopWidth: 0},
    showLabel: false,
  };
  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused, color}) => {
      let iconName = '';
      const backgroundColor = focused ? '#819ee5' : '#343434';
      const size = focused ? 30 : 20;
      switch (route.name) {
        case 'HomeTab': {
          iconName = 'home';
          break;
        }
        case 'StreamTab': {
          iconName = 'game-controller';
          break;
        }
        case 'CyberTab': {
          iconName = 'user';
          break;
        }
      }
      return (
        <View
          style={{
            backgroundColor,
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 20,
          }}>
          <Entypo name={iconName} size={size} color={'white'} />
        </View>
      );
    },
  });
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="StreamTab" component={StreamingScreen} />
      <Tab.Screen name="CyberTab" component={CyberScreen} />
    </Tab.Navigator>
  );
};

export default RootTab;
