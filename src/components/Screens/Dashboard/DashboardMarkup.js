import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import AccountIcon from 'react-native-vector-icons/MaterialIcons';
import UserNameLoader from '../../Loaders/UserNameLoader/UserNameLoader';

import Header from '../Header/Header';
import styles from './styles';

const DashboardMarkup = props => {
  const {firstName, middleName, lastName} = props?.currentUserData;

  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {props.currentUserData && (
          <View style={styles.userNameContiner}>
            {props.isDataLoading ? (
              <UserNameLoader />
            ) : (
              <Text style={styles.userName}>
                {firstName} {middleName} {lastName}
              </Text>
            )}
          </View>
        )}

        <View style={styles.headingContainer}>
          <HomeIcon name="home" size={15} color="green" />
          <Text style={styles.headingTextSlash}>/</Text>
          <Text style={styles.headingText}>Employee Dashboard</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>who is out</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.cardContent}>
            <View style={styles.cardItems}>
              <AccountIcon name="account-circle" size={18} color="green" />
            </View>
            <View style={styles.cardItems}>
              <Text style={styles.fullName}>Ahmed Khan</Text>
            </View>
            <View style={styles.cardItems}>
              <Text style={styles.text}>is out today</Text>
            </View>
            <View style={styles.cardItems}>
              <Text style={styles.text}>(Holiday)</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>MY UPCOMING TIME OFF</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.cardTwoContent}>
            <View style={styles.noRecordContainer}>
              <Text style={styles.noRecordText}>
                We couldn't find any records.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.timeOffDetailsCard}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>TIME OFF DETAILS</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.infoCard}>
            <View style={styles.textContainer}>
              <Text style={styles.holiday}>holiday</Text>
              <Text style={styles.numOfHoliday}>112</Text>
              <Text style={styles.hoursAvailable}>hours available</Text>
              <Text style={styles.headingOfTotalHours}>
                <Text style={styles.numOfTotalHours}>112</Text> total hours
              </Text>
            </View>

            <View style={styles.roundCircle}>
              <Text style={styles.numOfUsedHours}>0</Text>
              <Text style={styles.hoursAvailable}>hours used</Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <View style={styles.textContainer}>
              <Text style={styles.holiday}>sick</Text>
              <Text style={styles.numOfHoliday}>56</Text>
              <Text style={styles.hoursAvailable}>hours available</Text>
              <Text style={styles.headingOfTotalHours}>
                <Text style={styles.numOfTotalHours}>56</Text> total hours
              </Text>
            </View>
            <View style={styles.roundCircle}>
              <Text style={styles.numOfUsedHours}>0</Text>
              <Text style={styles.hoursAvailable}>hours used</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardMarkup;
