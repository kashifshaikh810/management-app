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

import styles from './styles';
import tw from 'tailwind-react-native-classnames';
import {Picker} from '@react-native-picker/picker';

const OfficesModal = props => {
  return (
    <Modal
      visible={props.showOfficesModal}
      animationType="slide"
      transparent
      onRequestClose={() => props.setShowOfficesModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>new office</Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => props.setShowOfficesModal(false)}
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
                <Text style={styles.email}>office name</Text>
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

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>status</Text>
              </View>
              <View style={[styles.emailTextInput, styles.pickerContainer]}>
                <Picker
                  mode="dropdown"
                  selectedValue={props.officesActiveOrNotAction}
                  onValueChange={(itemValue, itemIndex) =>
                    props.setOfficesActiveOrNotAction(itemValue)
                  }>
                  <Picker.Item label="Active" value="Active" />
                  <Picker.Item label="Inactive" value="Inactive" />
                </Picker>
              </View>
            </View>

            <View style={[styles.line, tw`mt-4`]} />

            <View style={styles.cancelAndSubmitContainer}>
              <Pressable
                onPress={() => props.setShowOfficesModal(false)}
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

export default OfficesModal;
