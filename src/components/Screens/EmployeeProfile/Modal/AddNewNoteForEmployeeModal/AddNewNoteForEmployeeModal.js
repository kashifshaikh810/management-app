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
      visible={props.showAddNewNoteModal || props.showEditNoteModal || false}
      animationType="slide"
      transparent
      onRequestClose={() =>
        (props.showEditNoteModal && props.setShowEditNoteModal(false),
        props.setCompanyNote('')) ||
        (props.showAddNewNoteModal && props.setShowAddNewNoteModal(false),
        props.setCompanyNote(''))
      }>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={styles.container}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>
              {(props.showAddNewNoteModal && 'new note') ||
                (props.showEditNoteModal && 'edit note')}
            </Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() =>
                  (props.showEditNoteModal && props.setShowEditNoteModal(false),
                  props.setCompanyNote('')) ||
                  (props.showAddNewNoteModal &&
                    props.setShowAddNewNoteModal(false),
                  props.setCompanyNote(''))
                }
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
                <TextInput
                  style={styles.commentTextInput}
                  multiline
                  value={props.companyNote}
                  onChangeText={text => props.setCompanyNote(text)}
                />
              </View>
            </View>

            <View style={styles.cancelAndSendReqContainer}>
              <Pressable
                onPress={() =>
                  (props.showEditNoteModal && props.setShowEditNoteModal(false),
                  props.setCompanyNote('')) ||
                  (props.showAddNewNoteModal &&
                    props.setShowAddNewNoteModal(false),
                  props.setCompanyNote(''))
                }
                disabled={props.isLoading}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#6c757d'},
                ]}>
                <Text style={[styles.cancelPressableText]}>close</Text>
              </Pressable>

              <Pressable
                onPress={() =>
                  (props.showEditNoteModal && props.editNoteForEmployee()) ||
                  (props.showAddNewNoteModal && props.addNewNoteForEmployee())
                }
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
