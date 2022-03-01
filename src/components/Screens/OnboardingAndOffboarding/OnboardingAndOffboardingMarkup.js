import React from 'react';
import {View, Text, ScrollView, Pressable, TextInput} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import Header from '../Header/Header';
import tw from 'tailwind-react-native-classnames';
import ArrowDownIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AddListModal from './AddListModal/AddListModal';

const myTaskSection = props => {
  if (props.showTab === 'my-task') {
    return (
      <>
        <View style={styles.inputContainer}>
          <Text>Category</Text>
          <View style={styles.headingContainer}>
            <View style={styles.input}></View>
            <Pressable
              style={({pressed}) => [
                styles.clearButton,
                pressed ? tw`bg-gray-100` : tw`bg-white`,
              ]}>
              <Text>clear</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                styles.searchButton,
                pressed ? tw`bg-white` : tw`bg-green-600`,
              ]}>
              <Text>search</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.noRecordsContainer}>
          <View style={styles.noRecords}>
            <Text>We couldn't find any records.</Text>
          </View>
        </View>
      </>
    );
  }
};

const myTaskListSection = props => {
  if (props.showTab === 'task-list') {
    return (
      <>
        <View style={styles.inputContainer}>
          <Text>Name</Text>
          <TextInput selectionColor="#b3b3b3" style={styles.taskListInput} />

          <Text>Category</Text>
          <View style={styles.taskListInput} />

          <View style={styles.headingContainer}>
            <Pressable
              style={({pressed}) => [
                styles.clearButton,
                pressed ? tw`bg-gray-100` : tw`bg-white`,
              ]}>
              <Text>clear</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                styles.searchButton,
                pressed ? tw`bg-white` : tw`bg-green-600`,
              ]}>
              <Text>search</Text>
            </Pressable>
          </View>
        </View>

        <View style={(styles.noRecordsContainer, tw`m-5`)}>
          <View style={styles.noRecords}>
            <Text>We couldn't find any records.</Text>
          </View>
        </View>
      </>
    );
  }
};

const templatesSection = props => {
  if (props.showTab === 'temp') {
    return (
      <>
        <Pressable
          style={styles.refineTextContainer}
          onPress={() => props.setShowInputSection(!props.showInputSection)}>
          <Text style={styles.refineText}>refine task list</Text>
          <ArrowDownIcon
            name={
              props.showInputSection
                ? 'arrow-up-bold-circle'
                : 'arrow-down-bold-circle'
            }
            style={styles.arrowIcon}
            size={20}
            color="#006f44"
          />
        </Pressable>

        {props.showInputSection && (
          <>
            <View style={styles.inputContainer}>
              <Text>Name</Text>
              <TextInput
                selectionColor="#b3b3b3"
                style={styles.taskListInput}
              />

              <Text style={styles.taskListInputText}>Category</Text>
              <View style={styles.taskListInput} />

              <View style={[styles.headingContainer, tw`mt-2`]}>
                <Pressable
                  style={({pressed}) => [
                    styles.clearButton,
                    pressed ? tw`bg-gray-100` : tw`bg-white`,
                  ]}>
                  <Text style={styles.clearText}>clear</Text>
                </Pressable>
                <Pressable
                  style={({pressed}) => [
                    styles.searchButton,
                    pressed ? tw`bg-white` : tw`bg-green-600`,
                  ]}>
                  <Text style={styles.clearText}>search</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.line} />
          </>
        )}

        <View style={styles.headingContainer}>
          <View
            style={[
              styles.templatesCard,
              props.showInputSection ? tw`mt-5` : tw`mt-1`,
            ]}>
            <Text style={styles.onboardHeading}>Test Test Test</Text>
            <Text style={styles.onboardHeading}>onboarding or offboarding</Text>
            <View>
              <Pressable
                style={({pressed}) => [
                  styles.manageButton,
                  pressed ? tw`bg-green-600` : tw`bg-white`,
                ]}>
                {({pressed}) => (
                  <Text style={pressed ? tw`text-white` : tw`text-green-500`}>
                    Manage
                  </Text>
                )}
              </Pressable>
            </View>
          </View>

          <View
            style={[
              styles.templatesCard,
              props.showInputSection ? tw`mt-5` : tw`mt-1`,
            ]}>
            <Text style={styles.onboardHeading}>Test Test Test</Text>
            <Text style={styles.onboardHeading}>onboarding or offboarding</Text>
            <View>
              <Pressable
                style={({pressed}) => [
                  styles.manageButton,
                  pressed ? tw`bg-green-600` : tw`bg-white`,
                ]}>
                {({pressed}) => (
                  <Text style={pressed ? tw`text-white` : tw`text-green-500`}>
                    Manage
                  </Text>
                )}
              </Pressable>
            </View>
          </View>
        </View>

        {/* <View style={(styles.noRecordsContainer, tw`m-5`)}>
          <View style={styles.noRecords}>
            <Text>We couldn't find any records.</Text>
          </View>
        </View> */}
      </>
    );
  }
};

const OnboardingAndOffboardingMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Onboarding/Offboarding</Text>
        </View>

        <View style={styles.headingContainer}>
          <HomeIcon
            name="home"
            size={15}
            color="green"
            style={styles.homeIcon}
          />
          <Text style={styles.slash}>/</Text>
          <Text style={styles.headingText}>settings</Text>
          <Text style={styles.slash}>/</Text>
          <Text style={styles.headingText}>onboarding/offboarding</Text>
        </View>

        <View style={styles.addPressableContainer}>
          <Pressable
            onPress={() => props.setShowAddListModal(true)}
            style={({pressed}) => [
              styles.addPressable,
              pressed ? tw`bg-white` : tw`bg-green-600`,
            ]}>
            {({pressed}) => (
              <Text
                style={[
                  styles.addPressableText,
                  pressed ? tw`text-gray-500` : tw`text-white`,
                ]}>
                add list
              </Text>
            )}
          </Pressable>
        </View>

        <View style={styles.card}>
          <View style={styles.tabs}>
            <Pressable
              onPress={() => props.setShowTab('my-task')}
              style={[
                styles.tabContent,
                props.showTab === 'my-task' ? tw`bg-gray-200` : 'bg-white',
              ]}>
              <Text
                style={[
                  styles.tabText,
                  props.showTab === 'my-task'
                    ? tw`text-black`
                    : 'text-gray-100',
                ]}>
                my task
              </Text>
            </Pressable>
            <Pressable
              onPress={() => props.setShowTab('task-list')}
              style={[
                styles.tabContent,
                props.showTab === 'task-list' ? tw`bg-gray-200` : 'bg-white',
              ]}>
              <Text
                style={[
                  styles.tabText,
                  props.showTab === 'task-list'
                    ? tw`text-black`
                    : 'text-gray-100',
                ]}>
                task list
              </Text>
            </Pressable>
            <Pressable
              onPress={() => props.setShowTab('temp')}
              style={[
                styles.tabContent,
                props.showTab === 'temp' ? tw`bg-gray-200` : 'bg-white',
              ]}>
              <Text
                style={[
                  styles.tabText,
                  props.showTab === 'temp' ? tw`text-black` : 'text-gray-100',
                ]}>
                templates
              </Text>
            </Pressable>
          </View>
          <View style={styles.line} />

          {myTaskSection(props)}

          {myTaskListSection(props)}

          {templatesSection(props)}
        </View>

        <AddListModal {...props} />
      </ScrollView>
    </View>
  );
};

export default OnboardingAndOffboardingMarkup;
