import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  ActivityIndicator,
  Pressable,
} from 'react-native';

import HomeIcon from 'react-native-vector-icons/FontAwesome';
import DOBIcon from 'react-native-vector-icons/FontAwesome';
import PlusIcon from 'react-native-vector-icons/Feather';

import styles from './styles';
import Header from '../Header/Header';
import AddNewNoteForEmployeeModal from './Modal/AddNewNoteForEmployeeModal/AddNewNoteForEmployeeModal';

const EmployeeProfileMarkup = props => {
  const {firstName, middleName, lastName} = props?.companyUserData;
  const {profileImage, email, dateOfBirth} =
    props?.companyUserProfileDetailsData;
  const {about, favoriteBooks, hobbies, musicPreference, sports} =
    props?.companyUserBioData;
  const {collageOrUniversity, degree, major, yearGraduated} =
    props?.companyUserEducationData;

  return (
    <View style={styles.container}>
      <Header {...props} name="profile" />
      {props.isFetchDataLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color="green" size={50} />
        </View>
      ) : (
        <ScrollView style={styles.scrollView}>
          <View style={styles.empHeadingContainer}>
            <Text style={styles.empHeading}>
              {firstName} {middleName ? null : middleName} {lastName}
            </Text>
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
              {profileImage ? (
                <Image
                  source={{uri: profileImage}}
                  style={styles.userProfile}
                />
              ) : (
                <Image
                  source={require('../../Assists/images/defaultProfile.png')}
                  style={styles.userProfile}
                />
              )}
            </View>

            <View style={styles.userNameContainer}>
              <Text style={styles.userName}>
                {firstName} {middleName} {lastName}
              </Text>
            </View>

            <View style={styles.contentContainer}>
              <Text style={styles.email}>{email}</Text>
            </View>

            <View style={styles.doBContainer}>
              <DOBIcon
                name="birthday-cake"
                size={15}
                color="#fff"
                style={styles.icon}
              />
              <Text style={styles.userDOB}>{dateOfBirth}</Text>
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

            {props.companyUserBioData.length === undefined && (
              <View style={styles.hobbiesContainer}>
                <View>
                  <Text>
                    Get to know me better: {about && <Text>{about}</Text>}
                  </Text>
                </View>
                <View>
                  <Text>Hobbies: {hobbies && <Text>{hobbies}</Text>}</Text>
                </View>
                <View>
                  <Text>
                    Favorite Books:{' '}
                    {favoriteBooks && <Text>{favoriteBooks}</Text>}
                  </Text>
                </View>
                <View>
                  <Text>
                    Music Preference:
                    {musicPreference && <Text>{musicPreference}</Text>}
                  </Text>
                </View>
                <View>
                  <Text>Sports: {sports && <Text>{sports}</Text>}</Text>
                </View>
              </View>
            )}

            {props.companyUserBioData.length === 0 && (
              <View style={styles.managerNotesTextContainer}>
                <View style={styles.managerNotesBackground}>
                  <Text style={styles.managerNotesText}>
                    We couldn't find any records.
                  </Text>
                </View>
              </View>
            )}
          </View>

          <View style={styles.managerNotesCard}>
            <View style={styles.cardHeadingContainer}>
              <Text style={[styles.itMyOwn]}>manager's note</Text>
              <View style={styles.editContainer}>
                <Pressable
                  onPress={() => props.setShowAddNewNoteModal(true)}
                  style={({pressed}) => [
                    styles.plusIconPressable,
                    {backgroundColor: pressed ? '#b3b3b3' : '#ffa700'},
                  ]}>
                  <PlusIcon name="plus" size={16} color="#fff" />
                </Pressable>
              </View>
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

            {props.companyUserEducationData.length === undefined && (
              <View style={styles.hobbiesContainer}>
                <View>
                  <Text>
                    Collage:{' '}
                    {collageOrUniversity && <Text>{collageOrUniversity}</Text>}
                  </Text>
                </View>
                <View>
                  <Text>Major: {major && <Text>{major}</Text>}</Text>
                </View>
                <View>
                  <Text>Degree: {degree && <Text>{degree}</Text>}</Text>
                </View>
                <View>
                  <Text>
                    Year Graduated:{' '}
                    {yearGraduated && <Text>{yearGraduated}</Text>}
                  </Text>
                </View>
              </View>
            )}

            {props.companyUserEducationData.length === 0 && (
              <View style={styles.educationTextContainer}>
                <View style={styles.educationBackground}>
                  <Text style={styles.educationText}>
                    We couldn't find any records.
                  </Text>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      )}

      {/* add new note for employee  */}
      <AddNewNoteForEmployeeModal {...props} />
    </View>
  );
};

export default EmployeeProfileMarkup;
