import React, {useState} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import tw from 'tailwind-react-native-classnames';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../Header/Header';
import styles from './styles';
import ActionModal from './ActionModal/ActionModal';
import CreateTaskModal from './CreateTaskModal/CreateTaskModal';
import AddListModal from '../OnboardingAndOffboarding/AddListModal/AddListModal';

const TaskListDetail = props => {
  const [showActionModal, setShowActionModal] = useState(false);
  const [showEditListModal, setShowEditListModal] = useState(false);
  const [showCreateTaskModal, setShowCreateTaskModal] = useState({
    show: false,
    type: '',
  });

  return (
    <View style={styles.container}>
      <Header {...props} name="profile" />
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
          <Text style={styles.slash}>/</Text>
          <Text style={styles.headingText}>name here...</Text>
        </View>

        <View
          style={[
            styles.headingContainer,
            tw`w-full justify-end items-center pr-6`,
          ]}>
          <Pressable
            onPress={() => setShowCreateTaskModal(true)}
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
                create task
              </Text>
            )}
          </Pressable>

          <Pressable
            onPress={() => setShowActionModal(true)}
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
                action
              </Text>
            )}
          </Pressable>
        </View>

        <View style={styles.card}>
          <View style={styles.heading}>
            <Text>content name</Text>
          </View>

          <View style={styles.desc}>
            <Text>description</Text>
          </View>
        </View>

        <View style={styles.todoCard}>
          <View style={styles.headingContainer}>
            <View style={styles.heading}>
              <Text>content name</Text>
            </View>
            <View style={[styles.headingContainer, styles.iconsContainer]}>
              <Pressable
                onPress={() => {}}
                style={({pressed}) => [
                  styles.icon,
                  pressed ? tw`bg-gray-200` : tw`bg-yellow-400`,
                ]}>
                <EditIcon name="edit" size={15} color="#fff" />
              </Pressable>

              <Pressable
                onPress={() => {}}
                style={({pressed}) => [
                  styles.icon,
                  pressed ? tw`bg-gray-200` : tw`bg-red-400`,
                ]}>
                <DeleteIcon name="delete" size={17} color="#fff" />
              </Pressable>
            </View>
          </View>

          <View style={styles.desc}>
            <Text>description</Text>
          </View>

          <View style={styles.line} />

          <View style={styles.heading}>
            <Text>content name</Text>
          </View>

          <View style={styles.desc}>
            <Text>description</Text>
          </View>

          <View style={styles.line} />
        </View>

        <ActionModal
          {...props}
          showActionModal={showActionModal}
          setShowActionModal={setShowActionModal}
          setShowEditListModal={setShowEditListModal}
        />

        <CreateTaskModal
          {...props}
          showCreateTaskModal={showCreateTaskModal}
          setShowCreateTaskModal={setShowCreateTaskModal}
        />

        <AddListModal
          {...props}
          showEditListModal={showEditListModal}
          setShowEditListModal={setShowEditListModal}
        />
      </ScrollView>
    </View>
  );
};

export default TaskListDetail;
