import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DRAWER_NAVIGATION,
  EMPLOYEE_PROFILE,
  FORGOTPASSWORD,
  LOGIN,
  MY_PROFILE,
  NOTIFICATION,
  SIGNUP,
} from './NavigationName';
import Login from '../../Screens/Authentication/Login/Login';
import SignUp from '../../Screens/Authentication/SignUp/SignUp';
import ForgotPassword from '../../Screens/Authentication/ForgotPassword/ForgotPassword';
import DrawerNavigation from '../DrawerNavigation/DrawerNavigation';
import Notification from '../../Screens/Notification/Notification';
import MyProfile from '../../Screens/MyProfile/MyProfile';
import EmployeeProfile from '../../Screens/EmployeeProfile/EmployeeProfile';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={LOGIN} component={Login} />
        <Stack.Screen name={SIGNUP} component={SignUp} />
        <Stack.Screen name={FORGOTPASSWORD} component={ForgotPassword} />
        <Stack.Screen name={DRAWER_NAVIGATION} component={DrawerNavigation} />
        <Stack.Screen name={MY_PROFILE} component={MyProfile} />
        <Stack.Screen name={NOTIFICATION} component={Notification} />
        <Stack.Screen name={EMPLOYEE_PROFILE} component={EmployeeProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
