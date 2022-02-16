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

const inputsSection = props => {
  if (props.showEmergencyContactModalInputs || props?.emergencyContactData) {
    return (
      <>
        <View>
          <View style={styles.commentTextContainer}>
            <Text style={styles.reqType}>
              first name <Text style={styles.star}>*</Text>
            </Text>
          </View>
          <View>
            <TextInput
              value={props.emergencyContactFirstName}
              onChangeText={text => props.setEmergencyContactFirstName(text)}
              style={styles.commentTextInput}
            />
          </View>
        </View>

        <View>
          <View style={styles.commentTextContainer}>
            <Text style={styles.commentText}>middle name</Text>
          </View>
          <View>
            <TextInput
              value={props.emergencyContactMiddleName}
              onChangeText={text => props.setEmergencyContactMiddleName(text)}
              style={styles.commentTextInput}
            />
          </View>
        </View>

        <View>
          <View style={styles.commentTextContainer}>
            <Text style={styles.reqType}>
              last name <Text style={styles.star}>*</Text>
            </Text>
          </View>
          <View>
            <TextInput
              value={props.emergencyContactLastName}
              onChangeText={text => props.setEmergencyContactLastName(text)}
              style={styles.commentTextInput}
            />
          </View>
        </View>

        <View>
          <View style={styles.commentTextContainer}>
            <Text style={styles.commentText}>relationship</Text>
          </View>
          <View>
            <TextInput
              value={props.emergencyContactRelationShip}
              onChangeText={text => props.setEmergencyContactRelationShip(text)}
              style={styles.commentTextInput}
            />
          </View>
        </View>

        <View>
          <View style={styles.commentTextContainer}>
            <Text style={styles.commentText}>office phone</Text>
          </View>
          <View>
            <TextInput
              value={props.emergencyContactOfficePhone}
              onChangeText={text => props.setEmergencyContactOfficePhone(text)}
              style={styles.commentTextInput}
              keyboardType="number-pad"
            />
          </View>
        </View>

        <View>
          <View style={styles.commentTextContainer}>
            <Text style={styles.reqType}>
              mobile phone <Text style={styles.star}>*</Text>
            </Text>
          </View>
          <View>
            <TextInput
              value={props.emergencyContactMobilePhone}
              onChangeText={text => props.setEmergencyContactMobilePhone(text)}
              keyboardType="number-pad"
              style={styles.commentTextInput}
            />
          </View>
        </View>

        <View style={styles.addButton}>
          <Pressable
            onPress={() => props.setShowEmergencyContactModalInputs(false)}
            android_ripple={{color: '#fff'}}
            style={({pressed}) => [
              styles.removePressable,
              {backgroundColor: pressed ? 'rgba(0,0,0,0)' : '#fff'},
            ]}>
            <Text style={[styles.cancelPressableText, {color: 'red'}]}>
              remove
            </Text>
          </Pressable>
        </View>
      </>
    );
  }
};

const EmergencyContactModal = props => {
  return (
    <Modal
      visible={props.showEmergencyContactModal}
      animationType="slide"
      transparent
      onRequestClose={() => props.setShowEmergencyContactModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={styles.container}>
        <View
          style={[
            styles.modalBody,
            {
              height:
                props.showEmergencyContactModalInputs ||
                props?.emergencyContactData
                  ? '90%'
                  : '30%',
            },
          ]}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>emergency contacts</Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => props.setShowEmergencyContactModal(false)}
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
            {inputsSection(props)}

            <View style={styles.addButton}>
              <Pressable
                disabled={props.showEmergencyContactModalInputs}
                onPress={() => props.setShowEmergencyContactModalInputs(true)}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.add,
                  {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
                ]}>
                <Text style={styles.cancelPressableText}>
                  add an emergency contact
                </Text>
              </Pressable>
            </View>

            <View style={styles.cancelAndSendReqContainer}>
              <Pressable
                onPress={() => {
                  props.setShowEmergencyContactModal(false);
                  props.setShowEmergencyContactModalInputs(false);
                }}
                disabled={props.isEmergencyContactLoading}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#6c757d'},
                ]}>
                <Text style={[styles.cancelPressableText]}>close</Text>
              </Pressable>

              <Pressable
                onPress={() => props.emergencyContactSubmit()}
                disabled={
                  props.isEmergencyContactLoading ||
                  (props.emergencyContactFirstName ===
                    props.emergencyContactData.emergencyContactFirstName &&
                    props.emergencyContactLastName ===
                      props.emergencyContactData.emergencyContactLastName &&
                    props.emergencyContactMobilePhone ===
                      props.emergencyContactData.emergencyContactMobilePhone &&
                    props.emergencyContactOfficePhone ===
                      props.emergencyContactData.emergencyContactOfficePhone &&
                    props.emergencyContactRelationShip ===
                      props.emergencyContactData.emergencyContactRelationShip &&
                    props.emergencyContactMiddleName ===
                      props.emergencyContactData.emergencyContactMiddleName)
                }
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.sendReqPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
                ]}>
                {props.isEmergencyContactLoading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.cancelPressableText}>submit</Text>
                )}
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default EmergencyContactModal;
