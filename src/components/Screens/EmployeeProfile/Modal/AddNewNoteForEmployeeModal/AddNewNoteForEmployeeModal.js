import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StatusBar,
  Pressable,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import CloseIcon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const AddNewNoteForEmployeeModal = props => {
  return (
    <Modal
      visible={props.showAddNewNoteModal}
      animationType="slide"
      transparent
      onRequestClose={() => props.setShowAddNewNoteModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={styles.container}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>new note</Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => props.setShowAddNewNoteModal(false)}
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
            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.reqType}>
                  note <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput style={styles.commentTextInput} multiline />
              </View>
            </View>

            <View style={styles.cancelAndSendReqContainer}>
              <Pressable
                onPress={() => props.setShowAddNewNoteModal(false)}
                disabled={props.isLoading}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#6c757d'},
                ]}>
                <Text style={[styles.cancelPressableText]}>close</Text>
              </Pressable>

              <Pressable
                onPress={() => props.submit()}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.sendReqPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
                ]}>
                {props.isLoading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.cancelPressableText}>save</Text>
                )}
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default AddNewNoteForEmployeeModal;
