import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  FlatList,
  ActivityIndicator,
  ToastAndroid,
  Alert,
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
import {
  fetchCreateTaskListData,
  paramsListsData,
} from '../../Redux/Action/Actions';

const TaskListDetail = props => {
  const [showActionModal, setShowActionModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTaskListsLoading, setIsTaskListsLoading] = useState(false);
  const [isAddNewListLoading, setIsAddNewListLoading] = useState(false);
  const [showEditListModal, setShowEditListModal] = useState(false);
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
  const [showEditTaskModal, setShowEditTaskModal] = useState({
    show: false,
    index: '',
  });
  const [createTaskData, setCreateTaskData] = useState([]);
  const [listPushKey, setListPushKey] = useState([]);

  // create task input
  const [createTasktitle, setCreateTaskTitle] = useState('');
  const [createTaskdescription, setCreateTaskDescription] = useState('');

  // edit list inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showOnboardingOrOffboarding, setShowOnboardingOrOffboarding] =
    useState('');

  // redux
  const dispatch = useDispatch();
  const {createListsData, taskData} = useSelector(state => state.reduc);

  // params
  let taskKey = props?.route?.params?.tasksKey;
  let index = props?.route?.params?.index;

  const createTask = () => {
    let uid = Auth()?.currentUser?.uid;
    if (createTasktitle && createTaskdescription) {
      setIsAddNewListLoading(true);
      Database()
        .ref(`/createCompanyTasks/${uid}/${index}`)
        .push({
          id: uid,
          createTasktitle: createTasktitle,
          createTaskdescription: createTaskdescription,
        })
        .then(() => {
          setCreateTaskTitle('');
          setCreateTaskDescription('');
          setIsAddNewListLoading(false);
          setShowCreateTaskModal(false);
        })
        .catch(err => {
          console.log(err, 'err');
        });
    }
  };

  const editTask = () => {
    let id = taskData.companyId;
    let item = {
      companyId: id,
      title: title,
      description: description,
      showOnboardingOrOffboarding: showOnboardingOrOffboarding,
    };
    if (title && description && showOnboardingOrOffboarding) {
      setIsLoading(true);
      Database()
        .ref(`/companyAddList/${id}`)
        .child(taskKey)
        .update({
          title: title,
          description: description,
          showOnboardingOrOffboarding: showOnboardingOrOffboarding,
        })
        .then(() => {
          dispatch(paramsListsData(item));
          setIsLoading(false);
          setShowEditListModal(false);
        })
        .catch(err => {
          console.log(err, 'err');
          setIsLoading(false);
        });
    }
  };

  const goToEditTaskModal = (item, index) => {
    setShowEditTaskModal({show: true, index: index});
    setCreateTaskTitle(item?.createTasktitle);
    setCreateTaskDescription(item?.createTaskdescription);
  };

  const closeEditTaskModal = () => {
    setShowEditTaskModal({show: false});
    setCreateTaskTitle('');
    setCreateTaskDescription('');
  };

  const editTaskList = props => {
    let uid = Auth()?.currentUser?.uid;
    let listsIndex = showEditTaskModal ? showEditTaskModal.index : '';
    if (createTasktitle && createTaskdescription) {
      setIsAddNewListLoading(true);
      Database()
        .ref(`/createCompanyTasks/${uid}/${index}`)
        .child(listPushKey[listsIndex])
        .update({
          createTasktitle: createTasktitle,
          createTaskdescription: createTaskdescription,
        })
        .then(() => {
          setCreateTaskTitle('');
          setCreateTaskDescription('');
          setIsAddNewListLoading(false);
          setShowEditTaskModal({show: false});
          ToastAndroid.showWithGravityAndOffset(
            'Successfully Saved...',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
        })
        .catch(err => {
          console.log(err);
          setIsAddNewListLoading(false);
        });
    }
  };

  const deleteList = (item, listsIndex) => {
    let uid = Auth()?.currentUser?.uid;
    Alert.alert('ARE YOU SURE?', `${`You won't be able to revert this!`}`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => ok()},
    ]);
    const ok = () => {
      setIsTaskListsLoading(true);
      Database()
        .ref(`/createCompanyTasks/${uid}/${index}`)
        .child(listPushKey[listsIndex])
        .remove()
        .then(() => {
          setIsTaskListsLoading(false);
          ToastAndroid.showWithGravityAndOffset(
            'Deleted Successfully...',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
        })
        .catch(err => {
          console.log(err);
          setIsTaskListsLoading(false);
        });
    };
  };

  const removeFromLists = () => {
    let uid = Auth()?.currentUser?.uid;
    setIsTaskListsLoading(true);
    setShowActionModal(false);
    Database()
      .ref(`/companyAddList/${uid}/${taskKey}`)
      .remove()
      .then(() => {
        if (createTaskData.length >= 1) {
          Database()
            .ref(`/createCompanyTasks/${uid}/${index}`)
            .remove()
            .then(() => {
              setIsTaskListsLoading(false);
              ToastAndroid.showWithGravityAndOffset(
                'Deleted Successfully...',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50,
              );
              props.navigation.navigate('Onboarding/Offboarding');
            })
            .catch(err => {
              console.log(err, 'err');
            })
            .catch(err => {
              console.log(err);
              setIsTaskListsLoading(false);
            });
        } else {
          setIsTaskListsLoading(false);
          props.navigation.navigate('Onboarding/Offboarding');
          ToastAndroid.showWithGravityAndOffset(
            'Deleted Successfully...',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
        }
      })
      .catch(err => {
        console.log(err, 'err');
      });
  };

  const createDuplicateList = () => {};

  useEffect(() => {
    setIsTaskListsLoading(true);
    let title = taskData?.title;
    let description = taskData?.description;
    let showOnboardingOrOffboarding = taskData?.showOnboardingOrOffboarding;
    dispatch(fetchCreateTaskListData(index));
    setTimeout(() => {
      setIsTaskListsLoading(false);
    }, 1500);

    // edit states
    setShowOnboardingOrOffboarding(showOnboardingOrOffboarding);
    setTitle(title);
    setDescription(description);
  }, [props.route.params]);

  useEffect(() => {
    let createLists = createListsData ? Object.values(createListsData) : [];
    let pushKey = createListsData ? Object.keys(createListsData) : [];
    setListPushKey(pushKey);
    setCreateTaskData(createLists);
  }, [createListsData]);

  return (
    <View style={styles.container}>
      <Header {...props} name="profile" />
      <ScrollView style={styles.scrollView} nestedScrollEnabled={true}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Onboarding/Offboarding</Text>
        </View>

        <ScrollView
          style={styles.scrollView}
          horizontal={true}
          nestedScrollEnabled={true}>
          <View style={[styles.headingContainer, styles.paddingRight]}>
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
        </ScrollView>

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

        {isTaskListsLoading ? (
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
              {createTaskData.length >= 1 ? (
                <FlatList
                  data={createTaskData}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item, index}) => (
                    <>
                      <View
                        style={[styles.headingContainer, styles.itemCenter]}>
                        <View style={styles.heading}>
                          <Text style={[styles.title, tw`uppercase`]}>
                            {item.createTasktitle}
                          </Text>
                        </View>
                        <View
                          style={[
                            styles.headingContainer,
                            styles.iconsContainer,
                          ]}>
                          <Pressable
                            onPress={() => goToEditTaskModal(item, index)}
                            style={({pressed}) => [
                              styles.icon,
                              pressed ? tw`bg-gray-200` : tw`bg-yellow-400`,
                            ]}>
                            <EditIcon name="edit" size={15} color="#fff" />
                          </Pressable>

                          <Pressable
                            onPress={() => deleteList(item, index)}
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
              ) : (
                <View style={(styles.noRecordsContainer, tw`m-5`)}>
                  <View style={styles.noRecords}>
                    <Text>We couldn't find any records.</Text>
                  </View>
                </View>
              )}
            </View>
          </>
        )}

        <ActionModal
          {...props}
          showActionModal={showActionModal}
          setShowActionModal={setShowActionModal}
          setShowEditListModal={setShowEditListModal}
          removeFromLists={removeFromLists}
          createDuplicateList={createDuplicateList}
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
          isAddNewListLoading={isAddNewListLoading}
          showEditTaskModal={showEditTaskModal}
          setShowEditTaskModal={setShowEditTaskModal}
          editTaskList={editTaskList}
          closeEditTaskModal={closeEditTaskModal}
        />

        <AddListModal
          {...props}
          showEditListModal={showEditListModal}
          setShowEditListModal={setShowEditListModal}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          showOnboardingOrOffboarding={showOnboardingOrOffboarding}
          setShowOnboardingOrOffboarding={setShowOnboardingOrOffboarding}
          editTask={editTask}
          isLoading={isLoading}
        />
      </ScrollView>
    </View>
  );
};

export default TaskListDetail;
