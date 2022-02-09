import React from 'react';
import {View, Text, ScrollView, ImageBackground, Image} from 'react-native';

import HomeIcon from 'react-native-vector-icons/FontAwesome';
import DOBIcon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import Header from '../Header/Header';

const EmployeeProfileMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} name="profile" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.empHeadingContainer}>
          <Text style={styles.empHeading}>employee name</Text>
        </View>

        <View style={styles.headingContainer}>
          <HomeIcon name="home" size={15} color="green" />
          <Text style={styles.headingTextSlash}>/</Text>
          <Text style={styles.headingText}>Employee</Text>
          <Text style={styles.headingTextSlash}>/</Text>
          <Text style={styles.emloyeeDetailText}>Employee Details</Text>
        </View>

        <ImageBackground
          source={require('../../Assists/images/background.jpeg')}
          style={styles.imageBack}>
          <View style={styles.contentContainer}>
            <Image
              source={require('../../Assists/images/defaultProfile.png')}
              style={styles.userProfile}
            />
          </View>

          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>user name</Text>
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.email}>email</Text>
          </View>

          <View style={styles.doBContainer}>
            <DOBIcon
              name="birthday-cake"
              size={15}
              color="#fff"
              style={styles.icon}
            />
            <Text style={styles.userDOB}>user date of birth</Text>
          </View>
        </ImageBackground>

        <View style={styles.card}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>employment details</Text>
          </View>
          <View style={styles.line} />

          <View style={styles.profileDetailsContainer}>
            <View style={styles.profileDetailsContainerChild}>
              <Text style={styles.employeeHeading}>
                Position: <Text style={styles.employeePosition}>hello</Text>
              </Text>
              <Text style={styles.employeeHeading}>
                Department:
                <Text style={styles.employeePosition}> Founders</Text>
              </Text>
              <Text style={styles.employeeHeading}>
                Date of Hire:
                <Text style={styles.employeePosition}>
                  24/11/2021 (0y 2m 8d)
                </Text>
              </Text>
              <Text style={styles.employeeHeading}>
                Level:
                <Text style={styles.employeePosition}>{/* level num */}</Text>
              </Text>
            </View>

            <View style={styles.detailsContainer}>
              <Text style={styles.employeeHeading}>
                Employment Status:
                <Text style={styles.employeePosition}>{/* status  */}</Text>
              </Text>
              <Text style={styles.employeeHeading}>
                Office:
                <Text style={styles.employeePosition}>{/* office  */}</Text>
              </Text>
              <Text style={styles.employeeHeading}>
                Direct Manager:
                <Text style={styles.employeePosition}> Master Devandgo</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.itMyOwnCard}>
          <View style={styles.cardHeadingContainer}>
            <Text style={[styles.itMyOwn]}>in my own words</Text>
          </View>
          <View style={styles.line} />

          <View style={styles.hobbiesContainer}>
            <View>
              <Text>
                Get to know me better: <Text>{/* val */}</Text>
              </Text>
            </View>
            <View>
              <Text>
                Hobbies: <Text>{/* val */}</Text>
              </Text>
            </View>
            <View>
              <Text>
                Favorite Books:
                <Text>{/* val */}</Text>
              </Text>
            </View>
            <View>
              <Text>
                Music Preference:
                <Text>{/* val */}</Text>
              </Text>
            </View>
            <View>
              <Text>
                Sports:
                <Text>{/* val */}</Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.managerNotesCard}>
          <View style={styles.cardHeadingContainer}>
            <Text style={[styles.itMyOwn]}>manager's notes</Text>
          </View>
          <View style={styles.line} />

          <View style={styles.managerNotesTextContainer}>
            <View style={styles.managerNotesBackground}>
              <Text style={styles.managerNotesText}>
                We couldn't find any records.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.educationCard}>
          <View style={styles.cardHeadingContainer}>
            <Text style={[styles.itMyOwn]}>education</Text>
          </View>
          <View style={styles.line} />

          <View style={styles.educationTextContainer}>
            <View style={styles.educationBackground}>
              <Text style={styles.educationText}>
                We couldn't find any records.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EmployeeProfileMarkup;
