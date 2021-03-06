import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  FlatList,
  TextInput,
} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import tw from 'tailwind-react-native-classnames';
import ArrowDownIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EditIcon from 'react-native-vector-icons/MaterialIcons';

import Header from '../Header/Header';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import AddNewRoleModal from './Modal/AddNewRoleModal/AddNewRoleModal';

const myData = [
  {
    roleTitle: 'Employee',
    description: 'hello world hi',
    createdDate: '02/12/2020',
    status: 'Active',
    actions: 'icons',
  },
  {
    roleTitle: 'Manager',
    description: 'testing',
    createdDate: '09/8/2021',
    status: 'Active',
    actions: 'icons',
  },
  {
    roleTitle: 'Employee',
    description: 'hello world hi',
    createdDate: '07/7/2022',
    status: 'Active',
    actions: 'icons',
  },
];

const myUserData = [
  {
    name: 'Memon',
    email: 'memon123@mail.com',
    role: 'Employee',
    status: 'Pending',
  },
  {
    name: 'Shah Sahab',
    email: 'shahsahab91@mail.com',
    role: 'Manager',
    status: 'Active',
  },
  {
    name: 'Mehmood Khan',
    email: 'mehmood54@mail.com',
    role: 'Owner',
    status: 'Active',
  },
];

const refineRolesTextInputSection = props => {
  if (props.showRefineRolesInputSection) {
    return (
      <View>
        <View style={[styles.fieldInputContainer, styles.marginTop]}>
          <Text style={styles.fieldLabelText}>role title</Text>
          <View style={styles.fieldInput}>
            <TextInput />
          </View>
        </View>

        <View style={styles.fieldInputContainer}>
          <Text style={styles.fieldLabelText}>status</Text>
          <View style={styles.fieldInput}>
            <TextInput />
          </View>
        </View>

        <View style={[styles.headingContainer, styles.selfEnd]}>
          <Pressable
            android_ripple={{color: '#f1f1f1'}}
            style={() => [styles.clearPressable]}>
            <Text style={styles.clearPressableText}>clear</Text>
          </Pressable>

          <Pressable
            android_ripple={{color: '#f3f3f3'}}
            style={() => [
              styles.savePressable,
              styles.marginLeft,
              styles.searchPressable,
            ]}>
            <Text style={styles.savePressableText}>search</Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

const rolesTabSection = props => {
  if (props.showTab === 'roles') {
    return (
      <>
        <Pressable
          style={[
            styles.headingContainer,
            styles.marginTop,
            styles.refineFieldContainer,
          ]}
          onPress={() =>
            props.setShowRefineRolesInputSection(
              !props.showRefineRolesInputSection,
            )
          }>
          <Text style={styles.refineText}>refine roles</Text>
          <ArrowDownIcon
            name={
              props.showRefineRolesInputSection
                ? 'arrow-up-bold-circle'
                : 'arrow-down-bold-circle'
            }
            style={styles.arrowIcon}
            size={20}
            color="#006f44"
          />
        </Pressable>

        {refineRolesTextInputSection({...props})}

        <ScrollView horizontal={true} style={styles.scrollView}>
          <FlatList
            ListHeaderComponent={() => (
              <View
                style={[styles.headingContainer, styles.tableHeadingContainer]}>
                <Text style={styles.roleTitleHeadingText}>Role Title</Text>
                <Text style={styles.descHeadingText}>Description</Text>
                <Text style={styles.descHeadingText}>Created</Text>
                <Text style={styles.statusHeadingText}>Status</Text>
                <Text style={styles.descHeadingText}>Actions</Text>
              </View>
            )}
            contentContainerStyle={styles.scrollView}
            keyExtractor={(item, index) => index.toString()}
            data={myData}
            renderItem={({item, index}) => (
              <>
                <View
                  style={[
                    styles.headingContainer,
                    styles.headingItemsContainer,
                  ]}>
                  <Text style={styles.roleTitleTableItemText}>
                    {item.roleTitle}
                  </Text>
                  <Text style={styles.descTableItemText}>
                    {item.description}
                  </Text>
                  <Text style={styles.descTableItemText}>
                    {item.createdDate}
                  </Text>
                  <View style={tw`w-16`}>
                    <Text style={styles.statusTableItemText}>
                      {item.status}
                    </Text>
                  </View>
                  <View
                    style={[styles.headingContainer, styles.editAndDeleteIcon]}>
                    <Pressable>
                      <EditIcon
                        name="edit"
                        size={17}
                        color={'#b3b3b3'}
                        style={styles.icon}
                      />
                    </Pressable>
                    <Pressable>
                      <DeleteIcon
                        name="delete"
                        size={17}
                        color={'#b3b3b3'}
                        style={[styles.marginLeft, styles.icon]}
                      />
                    </Pressable>
                  </View>
                </View>
                <View style={[styles.line, styles.tableLine]} />
              </>
            )}
          />
        </ScrollView>
      </>
    );
  }
};

const usersTabSection = props => {
  if (props.showTab === 'users') {
    return (
      <View>
        <View style={[styles.fieldInputContainer, styles.marginTop]}>
          <Text style={styles.fieldLabelText}>change role</Text>
          <View style={[styles.fieldInput, styles.pickerContainer]}>
            <Picker
              mode="dropdown"
              selectedValue={props.terminationReasonActiveOrNotAction}
              onValueChange={(itemValue, itemIndex) =>
                props.setTerminationReasonActiveOrNotAction(itemValue)
              }>
              <Picker.Item label="" value="" />
              <Picker.Item
                label="fetch from database"
                value="fetch from database"
              />
            </Picker>
          </View>
          <View style={styles.applyPressableContainer}>
            <Pressable
              android_ripple={{color: '#f3f3f3'}}
              style={() => [
                styles.savePressable,
                styles.marginTop,
                styles.searchPressable,
              ]}>
              <Text style={styles.savePressableText}>apply</Text>
            </Pressable>
          </View>
        </View>

        <ScrollView horizontal={true} style={styles.scrollView}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={() => (
              <View style={[styles.headingContainer, styles.userTable]}>
                <View style={styles.marginRightFive}>
                  <CheckBox
                    disabled={false}
                    style={{
                      transform: [{scaleX: 0.8}, {scaleY: 0.8}],
                    }}
                    tintColors={{true: 'gray', false: 'black'}}
                    value={props.toggleCheckBox}
                    onValueChange={newValue =>
                      props.setToggleCheckBox(newValue)
                    }
                  />
                </View>
                <Text style={styles.nameHeadingText}>name</Text>
                <Text style={styles.emailHeadingText}>email</Text>
                <Text style={styles.roleHeadingText}>roles</Text>
                <Text style={styles.userStatusHeadingText}>Status</Text>
              </View>
            )}
            contentContainerStyle={styles.scrollView}
            data={myUserData}
            renderItem={({item, index}) => (
              <>
                <View
                  style={[
                    styles.headingContainer,
                    styles.userHeadingItemsContainer,
                  ]}>
                  <View style={styles.marginRightFive}>
                    <CheckBox
                      disabled={false}
                      style={{
                        transform: [{scaleX: 0.8}, {scaleY: 0.8}],
                      }}
                      tintColors={{true: 'gray', false: 'black'}}
                      value={props.toggleCheckBox}
                      onValueChange={newValue =>
                        props.setToggleCheckBox(newValue)
                      }
                    />
                  </View>
                  <Text style={styles.nameTableItemText}>{item.name}</Text>
                  <Text style={styles.emailTableItemText}>{item.email}</Text>
                  <Text style={styles.roleTableItemText}>{item.role}</Text>
                  <View style={tw`w-10`}>
                    <Text
                      style={[
                        styles.userStatusTableItemText,
                        item.status === 'Pending'
                          ? tw`bg-gray-500`
                          : tw`bg-green-400`,
                      ]}>
                      {item.status}
                    </Text>
                  </View>
                </View>
                <View style={[styles.line, styles.tableLine]} />
              </>
            )}
          />
        </ScrollView>
      </View>
    );
  }
};

const CompanyPermissionsMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.scrollView}>
        <View
          style={[
            styles.textContainer,
            styles.headingContainer,
            tw`items-center`,
          ]}>
          <View>
            <Text style={styles.text}>permissions</Text>
            <View style={[styles.headingContainer, styles.marginTop]}>
              <HomeIcon name="home" size={15} color="green" />
              <Text style={styles.slash}>/</Text>
              <Text style={styles.headingText}>settings</Text>
              <Text style={styles.slash}>/</Text>
              <Text style={styles.headingText}>permissions</Text>
            </View>
          </View>

          <View style={styles.createPressableContainer}>
            <Pressable
              onPress={() => props.setShowNewRoleModal(true)}
              style={() => [styles.createPressable]}
              android_ripple={{color: '#fff'}}>
              <Text style={styles.createPressableText}>add new role</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.headingContainer}>
            <Pressable
              style={[
                styles.tab,
                props.showTab === 'roles' ? tw`bg-gray-100` : tw`bg-white`,
              ]}
              onPress={() => props.setShowTab('roles')}>
              <Text
                style={[
                  styles.tabText,
                  props.showTab === 'roles'
                    ? tw`text-gray-500`
                    : tw`text-black`,
                ]}>
                roles
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.tab,
                props.showTab === 'users' ? tw`bg-gray-100` : tw`bg-white`,
              ]}
              onPress={() => props.setShowTab('users')}>
              <Text
                style={[
                  styles.tabText,
                  props.showTab === 'users'
                    ? tw`text-gray-500`
                    : tw`text-black`,
                ]}>
                users
              </Text>
            </Pressable>
          </View>
          <View style={styles.line} />

          {rolesTabSection({...props})}

          {usersTabSection({...props})}
        </View>

        {/* add new role modal */}
        <AddNewRoleModal {...props} />
      </ScrollView>
    </View>
  );
};

export default CompanyPermissionsMarkup;
