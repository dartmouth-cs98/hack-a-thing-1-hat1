import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import About from '../components/about';
import Press from '../components/press';


const MainTabBar = createBottomTabNavigator(
  {
    SearchTab: {
      screen: Press,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'Sneks',
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="briefcase"
            size={26}
            color={focused ? '#58AADA' : 'grey'}
          />
        ),
      }),
    },
    AboutTab: {
      screen: About,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'About',
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="info-circle"
            size={26}
            color={focused ? '#58AADA' : 'grey'}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: 'AboutTab',
  },
);

export default MainTabBar;
