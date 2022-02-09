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
} from 'react-native';

import styles from './styles';

const ChangePassword = props => {
  return (
    <Modal
      visible={props.showChangePasswordModal}
      animationType="slide"
      transparent
      onRequestClose={() => props.setShowChangePasswordModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={styles.container}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>change password</Text>
          </View>
          <View style={styles.line} />

          <ScrollView style={{flex: 1}}>
            <View style={styles.textInputContainer}>
              <View style={styles.commentTextContainer}>
                <Text style={styles.commentText}>
                  current password <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View style={styles.commentTextInput}>
                <TextInput style={styles.textInput} />
              </View>
            </View>

            <View style={styles.textInputContainer}>
              <View style={styles.newPasswordTextContainer}>
                <Text style={styles.commentText}>
                  new password <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View style={styles.commentTextInput}>
                <TextInput style={styles.textInput} />
              </View>
            </View>

            <View style={styles.textInputContainer}>
              <View style={styles.commentTextContainer}>
                <Text style={styles.commentText}>
                  confirm password <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View style={styles.commentTextInput}>
                <TextInput style={styles.textInput} />
              </View>
            </View>

            <View
              style={[
                styles.line,
                {
                  marginVertical: 25,
                },
              ]}
            />
            <View style={styles.cancelAndSendReqContainer}>
              <Pressable
                onPress={() => props.setShowChangePasswordModal(false)}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#6c757d'},
                ]}>
                <Text style={[styles.cancelPressableText]}>close</Text>
              </Pressable>

              <Pressable
                onPress={() => {}}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.sendReqPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
                ]}>
                {false ? (
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

export default ChangePassword;
