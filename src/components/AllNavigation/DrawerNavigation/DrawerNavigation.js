import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  COMPLAINTS,
  DASHBOARD,
  EMPLOYEES,
  EQUIPMENTANDLICENSE,
  NEWSFEED,
  ONBOARDINGANDOFFBOARDING,
  REPORTS,
  TIMEOFF,
} from './DrawerNavigationNames';
import Dashboard from '../../Screens/Dashboard/Dashboard';
import DasboardIcon from 'react-native-vector-icons/FontAwesome';
import HandShakeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EmployeesIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FileIcon from 'react-native-vector-icons/FontAwesome5';
import TimeOffIcon from 'react-native-vector-icons/AntDesign';
import NewsFeedIcon from 'react-native-vector-icons/FontAwesome5';
import EquipmentAndLicenseIcon from 'react-native-vector-icons/FontAwesome5';
import ReportIcon from 'react-native-vector-icons/AntDesign';
import Employees from '../../Screens/Employees/Employees';
import Complaints from '../../Screens/Complaints/Complaints';
import EquipmentAndLicense from '../../Screens/EquipmentAndLicense/EquipmentAndLicense';
import Reports from '../../Screens/Reports/Reports';
import NewsFeed from '../../Screens/NewsFeed/NewsFeed';
import TimeOff from '../../Screens/TimeOff/TimeOff';
import CustomContent from '../DrawerNavigation/CustomContent';
import EmployeeProfile from '../../Screens/EmployeeProfile/EmployeeProfile';
import OnboardingAndOffboarding from '../../Screens/OnboardingAndOffboarding/OnboardingAndOffboarding';

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
            <DasboardIcon name="dashboard" size={17} color="#fff" />
          ),
        }}
        name={DASHBOARD}
        component={Dashboard}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <HandShakeIcon name="handshake" size={17} color="#fff" />
          ),
        }}
        name={ONBOARDINGANDOFFBOARDING}
        component={OnboardingAndOffboarding}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <EmployeesIcon name="account" size={17} color="#fff" />
          ),
        }}
        name={EMPLOYEES}
        component={Employees}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <TimeOffIcon name="clockcircle" size={17} color="#fff" />
          ),
        }}
        name={TIMEOFF}
        component={TimeOff}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <NewsFeedIcon name="book-reader" size={17} color="#fff" />
          ),
        }}
        name={NEWSFEED}
        component={NewsFeed}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <FileIcon name="file-invoice" size={17} color="#fff" />
          ),
        }}
        name={COMPLAINTS}
        component={Complaints}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <EquipmentAndLicenseIcon
              name="certificate"
              size={17}
              color="#fff"
            />
          ),
        }}
        name={EQUIPMENTANDLICENSE}
        component={EquipmentAndLicense}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <ReportIcon name="piechart" size={17} color="#fff" />
          ),
        }}
        name={REPORTS}
        component={Reports}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
