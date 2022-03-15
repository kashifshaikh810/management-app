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
import CloseIcon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';

import styles from './styles';
import tw from 'tailwind-react-native-classnames';

const AddTimeOffTypeModal = props => {
  return (
    <Modal
      visible={props.showAddTimeOffTypeModal}
      animationType="fade"
      transparent
      onRequestClose={() => props.setShowAddTimeOffTypeModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>add time off type</Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => props.setShowAddTimeOffTypeModal(false)}
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
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>
                  name {''}
                  <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  selectionColor="#b3b3b3"
                  keyboardType="default"
                  //   value={props.email}
                  //   onChangeText={text => props.setEmail(text)}
                  style={styles.emailTextInput}
                />
              </View>
            </View>

            <View style={styles.checkboxAndTextContainer}>
              <CheckBox
                disabled={false}
                style={{
                  transform: [{scaleX: 0.8}, {scaleY: 0.8}],
                }}
                tintColors={{true: 'gray', false: 'black'}}
                value={true}
                // onValueChange={newValue => props.setToggleCheckBox(newValue)}
              />
              <Text style={styles.email}>approve automatically?</Text>
            </View>

            <View style={[styles.line, tw`mt-4`]} />

            <View style={styles.cancelAndSubmitContainer}>
              <Pressable
                onPress={() => props.setShowAddTimeOffTypeModal(false)}
                disabled={props.isLoading}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#f3f3f3' : '#b3b3b3'},
                ]}>
                <Text style={[styles.cancelPressableText]}>close</Text>
              </Pressable>

              <Pressable
                onPress={() => {}}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.submitPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : 'brown'},
                ]}>
                {props.isLoading ? (
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

export default AddTimeOffTypeModal;
