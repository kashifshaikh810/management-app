import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import DefaultIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MultiDefaultIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ArrowDownIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ArrowDropIcon from 'react-native-vector-icons/MaterialIcons';
import EmailIcon from 'react-native-vector-icons/MaterialIcons';
import DOBIcon from 'react-native-vector-icons/FontAwesome';
import EyeIcon from 'react-native-vector-icons/FontAwesome';
import PlusIcon from 'react-native-vector-icons/AntDesign';

import {DummyData} from './DummyData';
import styles from './styles';
import Header from '../Header/Header';
import MyModal from './Modal/Modal';
import AddNewEmployeeModal from './Modal/AddNewEmployeeModal/AddNewEmployeeModal';

const inputSection = props => {
  if (props.changeArrow) {
    return (
      <View style={{flex: 1}}>
        <View>
          <View style={styles.emailTextContainer}>
            <Text style={styles.firstNameText}>Name</Text>
          </View>
          <View style={styles.lastNameTextInput}>
            <TextInput />
          </View>
        </View>

        <View>
          <View style={styles.emailTextContainer}>
            <Text style={styles.firstNameText}>Email</Text>
          </View>
          <View style={styles.lastNameTextInput}>
            <TextInput keyboardType="email-address" />
          </View>
        </View>

        <View>
          <View style={styles.departmentTextContainer}>
            <Text style={styles.firstNameText}>Department</Text>
          </View>
          <Pressable
            style={styles.lastNameTextInput}
            onPress={() =>
              props.setshowDepartmentModal({show: true, type: 'Department'})
            }>
            <Text style={{marginHorizontal: 10}}>
              {props?.showDepartmentModal?.chooseVal}
            </Text>
            <View style={styles.dropIconContainer}>
              <ArrowDropIcon
                name="arrow-drop-up"
                size={20}
                style={styles.dropIcon}
              />
              <ArrowDropIcon name="arrow-drop-down" size={20} />
            </View>
          </Pressable>
        </View>

        <View>
          <View style={styles.positionTextContainer}>
            <Text style={styles.firstNameText}>Position</Text>
          </View>
          <Pressable
            onPress={() =>
              props.setshowPositionModal({show: true, type: 'Position'})
            }
            style={styles.lastNameTextInput}>
            <Text style={{marginHorizontal: 10}}>
              {props?.showPositionModal?.chooseVal}
            </Text>
            <View style={styles.dropIconContainer}>
              <ArrowDropIcon
                name="arrow-drop-up"
                size={20}
                style={styles.dropIcon}
              />
              <ArrowDropIcon name="arrow-drop-down" size={20} />
            </View>
          </Pressable>
        </View>

        <View>
          <View style={styles.officeTextContainer}>
            <Text style={styles.firstNameText}>Office</Text>
          </View>
          <View style={styles.lastNameTextInput}>
            <Text style={{marginHorizontal: 10}}>no</Text>
            <View style={styles.dropIconContainer}>
              <ArrowDropIcon
                name="arrow-drop-up"
                size={20}
                style={styles.dropIcon}
              />
              <ArrowDropIcon name="arrow-drop-down" size={20} />
            </View>
          </View>
        </View>

        <View style={styles.createAccountButtonContainer}>
          <Pressable
            onPress={() => props.clearAllInput()}
            android_ripple={{color: '#fff'}}
            style={({pressed}) => [
              styles.clearPressable,
              {backgroundColor: pressed ? '#006f44' : '#fff'},
            ]}>
            <Text
              style={[styles.createAccountPressableText, {color: '#006f44'}]}>
              Clear
            </Text>
          </Pressable>

          <Pressable
            onPress={() => props.search()}
            android_ripple={{color: '#fff'}}
            style={({pressed}) => [
              styles.createAccountPressable,
              {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
            ]}>
            {false ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.createAccountPressableText}>Search</Text>
            )}
          </Pressable>
        </View>
      </View>
    );
  } else {
    return <View style={{flex: 1}} />;
  }
};

const EmployeesMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.scrollView}>
        <View style={{flexDirection: 'row'}}>
          <View style={[styles.empHeadingContainer]}>
            <Text style={styles.empHeading}>EMPLOYEES</Text>
            <Pressable
              onPress={() => props.setShowAddNewEmployeeModal(true)}
              style={({pressed}) => [
                styles.addNewEmployeePressable,
                {backgroundColor: pressed ? '#ffa700' : '#e9e9f0'},
              ]}>
              {({pressed}) => (
                <>
                  <PlusIcon
                    name="plus"
                    size={16}
                    color={pressed ? '#fff' : '#b3b3b3'}
                    style={styles.icon}
                  />
                  <Text
                    style={[
                      styles.view,
                      {color: pressed ? '#fff' : '#263238'},
                    ]}>
                    Add New Employee
                  </Text>
                </>
              )}
            </Pressable>
          </View>
        </View>

        <View style={styles.headingContainer}>
          <HomeIcon name="home" size={15} color="green" />
          <Text style={styles.headingTextSlash}>/</Text>
          <Text style={styles.headingText}>Employee</Text>
        </View>

        <View style={styles.activeEmployeesCard}>
          <View>
            <Text style={styles.numOfActiveEmployees}>11</Text>
            <Text style={styles.activeEmployeesHeading}>active employees</Text>
          </View>

          <View>
            <DefaultIcon name="account-tie" size={100} color="#006f44" />
          </View>
        </View>

        <View style={styles.totalEmployeesCard}>
          <View>
            <Text style={styles.numOfTotalEmployees}>20</Text>
            <Text style={styles.totalEmployeesHeading}>TOTAL EMPLOYEES</Text>
          </View>

          <View>
            <MultiDefaultIcon
              name="account-multiple"
              size={100}
              color="#eb6709"
            />
          </View>
        </View>

        <View style={[styles.card, props.changeArrow && {flex: 1}]}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>employee list</Text>
          </View>
          <View style={styles.line} />

          <View style={styles.searchEmployeesHeadingContainer}>
            <Text style={styles.cardHeadingText}>search employees</Text>

            <View style={styles.pressableContainer}>
              <Pressable
                onPress={() => props.setChangeArrow(!props.changeArrow)}
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? '#b3b3b3' : '#fff',
                    borderRadius: 10,
                  },
                ]}>
                <ArrowDownIcon
                  name={
                    props.changeArrow
                      ? 'arrow-up-bold-circle'
                      : 'arrow-down-bold-circle'
                  }
                  size={20}
                  color="#006f44"
                />
              </Pressable>
            </View>
          </View>
          {inputSection(props)}

          <MyModal {...props} />

          <AddNewEmployeeModal {...props} />

          <FlatList
            keyExtractor={(item, index) => index.toString()}
            numColumns={1}
            nestedScrollEnabled
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={DummyData}
            renderItem={({item, index}) => {
              return (
                <View style={styles.itemsCard}>
                  <View style={styles.itemsContentContainer}>
                    <View style={styles.activeTextParent}>
                      <View style={styles.activeTextContainer}>
                        <Text style={styles.activeText}>Active</Text>
                      </View>
                    </View>
                    <View style={styles.imageAndNameContainer}>
                      <View style={styles.userDPImageContainer}>
                        <Image
                          source={{uri: item.userProfileImage}}
                          style={styles.userDPImage}
                        />
                      </View>

                      <View style={styles.namePositionAndDepartmentContainer}>
                        <Pressable>
                          {({pressed}) => (
                            <Text
                              style={[
                                styles.fistNameAndLastName,
                                {color: pressed ? '#006f44' : '#263238'},
                              ]}>
                              {item.firstName} {item.lastName}
                            </Text>
                          )}
                        </Pressable>
                        <Text style={styles.text}>
                          Position: {item.position}
                        </Text>
                        <Text style={styles.text}>
                          Department: {item.Department}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.emailAndDOBContainer}>
                      <View style={styles.emailContainer}>
                        <EmailIcon
                          name="email"
                          size={15}
                          color="#b1b1b1"
                          style={styles.icon}
                        />
                        <Text style={styles.email}>{item.userEmail}</Text>
                      </View>
                      <View style={styles.emailContainer}>
                        <DOBIcon
                          name="birthday-cake"
                          size={15}
                          color="#b1b1b1"
                          style={styles.icon}
                        />
                        <Text style={styles.email}>{item.userDOB}</Text>
                      </View>
                    </View>

                    <Pressable
                      onPress={() => props.viewEmployeeProfile()}
                      style={({pressed}) => [
                        styles.itemsPressable,
                        {backgroundColor: pressed ? '#ffa700' : '#e9e9f0'},
                      ]}>
                      {({pressed}) => (
                        <>
                          <EyeIcon
                            name="eye"
                            size={16}
                            color={pressed ? '#fff' : '#b3b3b3'}
                            style={styles.icon}
                          />
                          <Text
                            style={[
                              styles.view,
                              {color: pressed ? '#fff' : '#263238'},
                            ]}>
                            View
                          </Text>
                        </>
                      )}
                    </Pressable>
                  </View>
                </View>
              );
            }}
          />

          <View style={styles.totalItems}>
            <Text>Total Items: 28</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EmployeesMarkup;
