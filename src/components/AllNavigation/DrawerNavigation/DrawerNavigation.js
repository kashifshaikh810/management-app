import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DASHBOARD, EMPLOYEES, NEWSFEED, TIMEOFF} from './DrawerNavigationNames';
import Dashboard from '../../Screens/Dashboard/Dashboard';
import DasboardIcon from 'react-native-vector-icons/FontAwesome';
import EmployeesIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TimeOffIcon from 'react-native-vector-icons/AntDesign';
import NewsFeedIcon from 'react-native-vector-icons/FontAwesome5';
import Employees from '../../Screens/Employees/Employees';
import NewsFeed from '../../Screens/NewsFeed/NewsFeed';
import TimeOff from '../../Screens/TimeOff/TimeOff';
import CustomContent from '../DrawerNavigation/CustomContent';
import EmployeeProfile from '../../Screens/EmployeeProfile/EmployeeProfile';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomContent {...props} />}
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
        drawerStyle: {backgroundColor: '#263238'},
        drawerLabelStyle: {color: '#fff'},
        drawerActiveBackgroundColor: '#006f44',
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <DasboardIcon name="dashboard" size={20} color="#fff" />
          ),
        }}
        name={DASHBOARD}
        component={Dashboard}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <EmployeesIcon name="account" size={20} color="#fff" />
          ),
        }}
        name={EMPLOYEES}
        component={Employees}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <TimeOffIcon name="clockcircle" size={20} color="#fff" />
          ),
        }}
        name={TIMEOFF}
        component={TimeOff}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <NewsFeedIcon name="book-reader" size={20} color="#fff" />
          ),
        }}
        name={NEWSFEED}
        component={NewsFeed}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
