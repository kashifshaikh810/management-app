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
  if (props.showEducationModalInputs || props.userEducationData) {
    return (
      <>
        <View>
          <View style={styles.commentTextContainer}>
            <Text style={styles.reqType}>
              college/university <Text style={styles.star}>*</Text>
            </Text>
          </View>
          <View>
            <TextInput
              value={props.collageOrUniversity}
              onChangeText={text => props.setCollageOrUniversity(text)}
              style={styles.commentTextInput}
            />
          </View>
        </View>

        <View>
          <View style={styles.commentTextContainer}>
            <Text style={styles.commentText}>
              degree <Text style={styles.star}>*</Text>
            </Text>
          </View>
          <View>
            <TextInput
              value={props.degree}
              onChangeText={text => props.setDegree(text)}
              style={styles.commentTextInput}
            />
          </View>
        </View>

        <View>
          <View style={styles.commentTextContainer}>
            <Text style={styles.commentText}>
              Major <Text style={styles.star}>*</Text>
            </Text>
          </View>
          <View>
            <TextInput
              value={props.major}
              onChangeText={text => props.setMajor(text)}
              style={styles.commentTextInput}
            />
          </View>
        </View>

        <View>
          <View style={styles.commentTextContainer}>
            <Text style={styles.reqType}>
              year graduated <Text style={styles.star}>*</Text>
            </Text>
          </View>
          <View>
            <TextInput
              value={props.yearGraduated}
              onChangeText={text => props.setYearGraduated(text)}
              keyboardType="number-pad"
              style={styles.commentTextInput}
            />
          </View>
        </View>

        <View style={styles.addButton}>
          <Pressable
            onPress={() =>
              props.userEducationData
                ? props.removeEducation()
                : props.setShowEducationModalInputs(false)
            }
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

const EducationModal = props => {
  return (
    <Modal
      visible={props.showEducationModal}
      animationType="slide"
      transparent
      onRequestClose={() => {
        props.setShowEducationModal(false);
        props.setShowEducationModalInputs(false);
      }}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={styles.container}>
        <View
          style={[
            styles.modalBody,
            {
              height:
                props.showEducationModalInputs || props.userEducationData
                  ? '90%'
                  : '30%',
            },
          ]}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>education</Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => {
                  props.setShowEducationModal(false);
                  props.setShowEducationModalInputs(false);
                }}
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
                disabled={
                  props.userEducationData || props.showEducationModalInputs
                }
                onPress={() => props.setShowEducationModalInputs(true)}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.add,
                  {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
                ]}>
                <Text style={styles.cancelPressableText}>add an education</Text>
              </Pressable>
            </View>

            <View style={styles.cancelAndSendReqContainer}>
              <Pressable
                onPress={() => {
                  props.setShowEducationModal(false);
                  props.setShowEducationModalInputs(false);
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
                onPress={() => props.educationSubmit()}
                disabled={
                  props.isEducationLoading ||
                  (props.collageOrUniversity ===
                    props?.userEducationData?.collageOrUniversity &&
                    props.degree === props?.userEducationData?.degree &&
                    props.major === props?.userEducationData?.major &&
                    props.yearGraduated ===
                      props?.userEducationData?.yearGraduated)
                }
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.sendReqPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
                ]}>
                {props.isEducationLoading ? (
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

export default EducationModal;
