import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import tw from 'tailwind-react-native-classnames';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../Header/Header';
import styles from './styles';
import ActionModal from './ActionModal/ActionModal';
import CreateTaskModal from './CreateTaskModal/CreateTaskModal';
import AddListModal from '../OnboardingAndOffboarding/AddListModal/AddListModal';
import {Auth, Database} from '../../firebaseTools';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCreateTaskListData} from '../../Redux/Action/Actions';

const TaskListDetail = props => {
  const [showActionModal, setShowActionModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showEditListModal, setShowEditListModal] = useState(false);
  const [showCreateTaskModal, setShowCreateTaskModal] = useState({
    show: false,
    type: '',
  });
  const [createTaskData, setCreateTaskData] = useState([]);

  // create task input
  const [createTasktitle, setCreateTaskTitle] = useState('');
  const [createTaskdescription, setCreateTaskDescription] = useState('');

  // redux
  const dispatch = useDispatch();
  const {createListsData} = useSelector(state => state.reduc);

  const taskData = props?.route?.params?.tasksData;

  const createTask = () => {
    let uid = Auth()?.currentUser?.uid;
    let title = taskData.title;
    if (createTasktitle && createTaskdescription) {
      Database().ref(`/createCompanyTasks/${uid}/${title}`).push({
        id: uid,
        createTasktitle: createTasktitle,
        createTaskdescription: createTaskdescription,
      });
      setCreateTaskTitle('');
      setCreateTaskDescription('');
      setShowCreateTaskModal(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    let title = taskData?.title;
    dispatch(fetchCreateTaskListData(title));
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [props.route.params]);

  useEffect(() => {
    setCreateTaskData(createListsData);
  }, [createListsData]);

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
          <Text style={styles.headingText}>{taskData.title}</Text>
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

        {isLoading ? (
          <View style={styles.loader}>
            <ActivityIndicator color="green" size={30} />
          </View>
        ) : (
          <>
            <View style={styles.card}>
              <View style={styles.heading}>
                <Text style={styles.title}>{taskData.title}</Text>
              </View>
              <View style={styles.desc}>
                <Text style={styles.description}>{taskData.description}</Text>
              </View>
            </View>
            <View style={styles.todoCard}>
              <FlatList
                data={createTaskData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <>
                    <View style={[styles.headingContainer, styles.itemCenter]}>
                      <View style={styles.heading}>
                        <Text style={styles.title}>{item.createTasktitle}</Text>
                      </View>
                      <View
                        style={[
                          styles.headingContainer,
                          styles.iconsContainer,
                        ]}>
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
                      <Text style={styles.description}>
                        {item.createTaskdescription}
                      </Text>
                    </View>
                    <View style={styles.line} />
                  </>
                )}
              />
            </View>
          </>
        )}

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
          createTask={createTask}
          createTasktitle={createTasktitle}
          setCreateTaskTitle={setCreateTaskTitle}
          createTaskdescription={createTaskdescription}
          setCreateTaskDescription={setCreateTaskDescription}
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
