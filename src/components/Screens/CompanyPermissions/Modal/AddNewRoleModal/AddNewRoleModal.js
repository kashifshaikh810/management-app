import React from 'react';
import {
  View,
  Text,
  Modal,
  StatusBar,
  Pressable,
  TextInput,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from 'react-native';
import CloseIcon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import tw from 'tailwind-react-native-classnames';

import styles from './styles';
import CheckBox from '@react-native-community/checkbox';

const myUserData = [
  {
    name: 'Memon',
    email: 'memon123@mail.com',
  },
  {
    name: 'Shah Sahab',
    email: 'shahsahab91@mail.com',
  },
  {
    name: 'Mehmood Khan',
    email: 'mehmood54@mail.com',
  },
];

const roleInformationTabSection = props => {
  if (props.showRoleModalTab === 'role-information') {
    return (
      <>
        <View>
          <View style={styles.rewardTextContainer}>
            <Text style={styles.reward}>
              title <Text style={styles.star}>*</Text>
            </Text>
          </View>
          <View>
            <TextInput
              selectionColor="#b3b3b3"
              placeholder="e.g Manager"
              keyboardType="default"
              //   value={props.reward}
              //   onChangeText={text => props.setreward(text)}
              style={styles.rewardTextInput}
            />
          </View>
        </View>

        <View>
          <View style={styles.rewardTextContainer}>
            <Text style={styles.reward}>
              description <Text style={styles.star}>*</Text>
            </Text>
          </View>
          <View>
            <TextInput
              selectionColor="#b3b3b3"
              placeholder="Describe Role"
              keyboardType="default"
              //   value={props.reward}
              //   onChangeText={text => props.setreward(text)}
              style={styles.descriptionTextInput}
              multiline
            />
          </View>
        </View>

        <View style={[styles.line, styles.marginTopFour]} />

        <View>
          <View style={styles.rewardTextContainer}>
            <Text style={styles.reward}>View employees only from office</Text>
          </View>
          <View style={[styles.rewardTextInput, styles.pickerContainer]}>
            <Picker
              mode="dropdown"
              // selectedValue={props.officesActiveOrNotAction}
              // onValueChange={(itemValue, itemIndex) =>
              //   props.setOfficesActiveOrNotAction(itemValue)
              // }
            >
              <Picker.Item label="" value="" />
            </Picker>
          </View>
        </View>

        <View>
          <View style={styles.rewardTextContainer}>
            <Text style={styles.reward}>
              View employees only from department
            </Text>
          </View>
          <View style={[styles.rewardTextInput, styles.pickerContainer]}>
            <Picker
              mode="dropdown"
              // selectedValue={props.officesActiveOrNotAction}
              // onValueChange={(itemValue, itemIndex) =>
              //   props.setOfficesActiveOrNotAction(itemValue)
              // }
            >
              <Picker.Item label="" value="" />
            </Picker>
          </View>
        </View>
      </>
    );
  }
};

const roleResourcesTabSection = props => {
  if (props.showRoleModalTab === 'role-resources') {
    return (
      <View>
        <View style={styles.resourcesAccessContainer}>
          <Text style={styles.resourcesAccess}>resources access</Text>
          <View style={styles.enableAndDisablePressableContainer}>
            <Pressable
              onPress={() => props.setShowButton('grant-all-access')}
              style={({pressed}) => [
                styles.enablePressable,
                props.showButton === 'grant-all-access'
                  ? tw`bg-green-600`
                  : tw`bg-white`,
              ]}>
              <Text
                style={[
                  styles.enableAndDisablePressableText,
                  props.showButton === 'grant-all-access'
                    ? tw`text-white`
                    : tw`text-gray-200`,
                ]}>
                grant all access
              </Text>
            </Pressable>

            <Pressable
              onPress={() => props.setShowButton('custom')}
              style={({pressed}) => [
                styles.disablePressable,
                props.showButton === 'custom' ? tw`bg-green-600` : tw`bg-white`,
              ]}>
              <Text
                style={[
                  styles.enableAndDisablePressableText,
                  props.showButton === 'custom'
                    ? tw`text-white`
                    : tw`text-gray-200`,
                ]}>
                custom
              </Text>
            </Pressable>
          </View>
        </View>

        {customButtonSection({...props})}
      </View>
    );
  }
};

const customButtonSection = props => {
  if (props.showButton === 'custom') {
    return (
      <View>
        <Text>aaa</Text>
      </View>
    );
  }
};

const roleUsersTabSection = props => {
  if (props.showRoleModalTab === 'role-users') {
    return (
      <View>
        <View>
          <View style={styles.rewardTextContainer}>
            <Text style={styles.reward}>search</Text>
          </View>
          <View>
            <TextInput
              selectionColor="#b3b3b3"
              keyboardType="default"
              //   value={props.reward}
              //   onChangeText={text => props.setreward(text)}
              style={styles.rewardTextInput}
            />
          </View>
        </View>
        <View style={styles.cancelAndSubmitContainer}>
          <Pressable
            onPress={() => {}}
            disabled={props.isLoading}
            android_ripple={{color: '#fff'}}
            style={({pressed}) => [styles.clearPressable]}>
            <Text style={[styles.clearPressableText]}>clear</Text>
          </Pressable>

          <Pressable
            onPress={() => {}}
            android_ripple={{color: '#fff'}}
            style={({pressed}) => [
              styles.searchPressable,
              {backgroundColor: pressed ? 'rgba(0,0,0,0.5)' : 'green'},
            ]}>
            {props.isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.cancelPressableText}>search</Text>
            )}
          </Pressable>
        </View>

        <ScrollView horizontal={true} style={styles.scrollView}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={() => (
              <View style={[styles.headingContainer, styles.userTable]}>
                <Text style={styles.nameHeadingText}>name</Text>
                <Text style={styles.emailHeadingText}>email</Text>
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

const AddNewRoleModal = props => {
  return (
    <Modal
      visible={props.showNewRoleModal}
      animationType="slide"
      transparent
      onRequestClose={() => props.setShowNewRoleModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>add new role</Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => props.setShowNewRoleModal(false)}
                style={({pressed}) => [
                  styles.closePressabel,
                  {backgroundColor: pressed ? '#b3b3b3' : '#fff'},
                ]}>
                {({pressed}) => (
                  <CloseIcon
                    name="close"
                    size={20}
                    color={pressed ? '#fff' : '#b3b3b3'}
                  />
                )}
              </Pressable>
            </View>
          </View>
          <View style={styles.line} />
          <ScrollView
            style={styles.scrollView}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <ScrollView style={styles.scrollView} horizontal={true}>
              <View style={styles.tabsContainer}>
                <Pressable
                  style={[
                    styles.roleInfoTab,
                    props.showRoleModalTab === 'role-information'
                      ? tw`bg-white`
                      : tw`bg-gray-50`,
                    props.showRoleModalTab === 'role-information'
                      ? tw``
                      : tw`border-b-2`,
                  ]}
                  onPress={() => props.setShowRoleModalTab('role-information')}>
                  <Text
                    style={[
                      styles.tabsText,
                      props.showRoleModalTab === 'role-information'
                        ? tw`text-gray-600`
                        : tw`text-gray-400`,
                    ]}>
                    role information
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.roleResourcesTab,
                    props.showRoleModalTab === 'role-resources'
                      ? tw`bg-white`
                      : tw`bg-gray-50`,
                    props.showRoleModalTab === 'role-resources'
                      ? tw``
                      : tw`border-b-2`,
                  ]}
                  onPress={() => props.setShowRoleModalTab('role-resources')}>
                  <Text
                    style={[
                      styles.tabsText,
                      props.showRoleModalTab === 'role-resources'
                        ? tw`text-gray-600`
                        : tw`text-gray-400`,
                    ]}>
                    role resources
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.roleResourcesTab,
                    props.showRoleModalTab === 'role-users'
                      ? tw`bg-white`
                      : tw`bg-gray-50`,
                    props.showRoleModalTab === 'role-users'
                      ? tw``
                      : tw`border-b-2`,
                  ]}
                  onPress={() => props.setShowRoleModalTab('role-users')}>
                  <Text
                    style={[
                      styles.tabsText,
                      props.showRoleModalTab === 'role-users'
                        ? tw`text-gray-600`
                        : tw`text-gray-400`,
                    ]}>
                    role users
                  </Text>
                </Pressable>
              </View>
            </ScrollView>
            <View style={styles.tabLinesContainer}>
              <View>
                <View style={[styles.line, styles.widthFour]} />
              </View>
              <View style={styles.lineContainer}>
                <View style={[styles.line, styles.widthFour]} />
              </View>
            </View>

            {roleInformationTabSection({...props})}

            {roleResourcesTabSection({...props})}

            {roleUsersTabSection({...props})}

            <View style={[styles.line, styles.marginTopFour]} />

            <View style={styles.cancelAndSubmitContainer}>
              <Pressable
                onPress={() => props.setShowNewRoleModal(false)}
                disabled={props.isLoading}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : 'red'},
                ]}>
                <Text style={[styles.cancelPressableText]}>cancel</Text>
              </Pressable>

              <Pressable
                onPress={() => {}}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.submitPressable,
                  {backgroundColor: pressed ? 'rgba(0,0,0,0.5)' : 'green'},
                ]}>
                {props.isLoading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.cancelPressableText}>
                    save & continue
                  </Text>
                )}
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default AddNewRoleModal;
