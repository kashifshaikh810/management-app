import React from 'react';
import {
  View,
  Text,
  Modal,
  StatusBar,
  ActivityIndicator,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';

import styles from './styles';

const CreateTaskModal = props => {
  return (
    <Modal
      visible={props.showCreateTaskModal}
      animationType="fade"
      transparent
      onRequestClose={() => props.setShowCreateTaskModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
        <View style={styles.modalBody}>
          <View style={styles.newListHeading}>
            <Text style={styles.newListText}>new task</Text>
          </View>
          <View style={styles.line} />
          <ScrollView style={tw`flex-1 mb-2`}>
            <View style={styles.contentContainer}>
              <View style={styles.textInputContainer}>
                <Text style={styles.textInputText}>
                  Title <Text style={styles.star}>*</Text>
                </Text>

                <TextInput
                  style={styles.textInput}
                  selectionColor="#b3b3b3"
                  value={props.createTasktitle}
                  onChangeText={text => props.setCreateTaskTitle(text)}
                />
              </View>

              <View style={styles.textInputContainer}>
                <Text style={styles.textInputText}>
                  Description <Text style={styles.star}>*</Text>
                </Text>
                <View style={styles.desTextInput}>
                  <TextInput
                    multiline={true}
                    onScroll={e => {
                      e.nativeEvent.contentOffset.y;
                    }}
                    placeholder="Start Typing Here"
                    scrollEnabled={true}
                    value={props.createTaskdescription}
                    onChangeText={text => props.setCreateTaskDescription(text)}
                    selectionColor="#b3b3b3"
                  />
                </View>
              </View>
            </View>

            <View style={styles.pressablesContainer}>
              <Pressable
                onPress={() => props.setShowCreateTaskModal(false)}
                disabled={props.isLoading}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#f3f3f3' : 'gray'},
                ]}>
                <Text style={styles.cancelPressableText}>cancel</Text>
              </Pressable>

              <Pressable
                onPress={() => props.createTask(props)}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.addNewListPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
                ]}>
                {false ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.cancelPressableText}>add new list</Text>
                )}
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default CreateTaskModal;
