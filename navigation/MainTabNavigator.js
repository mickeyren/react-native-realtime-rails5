import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DiscussionScreen from '../screens/DiscussionScreen';
import GroupsScreen from '../screens/GroupsScreen';
import EventsScreen from '../screens/EventsScreen';
import MembersScreen from '../screens/MembersScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Events: {
      screen: EventsScreen,
    },
    Members: {
      screen: MembersScreen,
    },
    Groups: {
      screen: GroupsScreen,
    },        
    Discussion: {
      screen: DiscussionScreen,
    },        
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
          case 'Events':
            iconName = Platform.OS === 'ios' ? `ios-calendar${focused ? '' : '-outline'}` : 'md-calendar';
            break;
          case 'Members':
            iconName = Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'md-person';
            break;            
          case 'Groups':
            iconName = Platform.OS === 'ios' ? `ios-people${focused ? '' : '-outline'}` : 'md-people';
            break;            
          case 'Discussion':
            iconName = Platform.OS === 'ios' ? `ios-chatboxes${focused ? '' : '-outline'}` : 'md-chatboxes';
            break;            
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? `ios-notifications${focused ? '' : '-outline'}` : 'md-notifications';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
