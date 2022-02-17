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
import ArrowDropIcon from 'react-native-vector-icons/MaterialIcons';

import MyModal from '../../../Employees/Modal/Modal';
import styles from './styles';

const ContactInformationModal = props => {
  return (
    <Modal
      visible={props.isShowContactInformationModal}
      animationType="slide"
      transparent
      onRequestClose={() => props.setIsShowContactInformationModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={styles.container}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>contact information</Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => props.setIsShowContactInformationModal(false)}
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
                <Text style={styles.reqType}>mobile phone number</Text>
              </View>
              <View>
                <TextInput
                  style={styles.commentTextInput}
                  value={props.contactInfoMobilePhone}
                  onChangeText={text => props.setContactInfoMobilePhone(text)}
                  keyboardType="number-pad"
                />
              </View>
            </View>

            <View>
              <View style={styles.reqTypeContainer}>
                <Text style={styles.reqType}>
                  country <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <Pressable
                onPress={() =>
                  props.setShowCountryModal({show: true, type: 'Country'})
                }
                style={styles.pressable}>
                <Text style={styles.text}>
                  {(props?.showCountryModal &&
                    props?.showCountryModal?.chooseVal) ||
                    props?.contactInformationData?.country}
                </Text>
                <View style={styles.dropIconContainer}>
                  <ArrowDropIcon
                    name="arrow-drop-up"
                    size={20}
                    style={styles.dropIcon}
                  />
                  <ArrowDropIcon name="arrow-drop-down" size={20} />
                </View>
              </Pressable>
            </View>

            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.reqType}>
                  address <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  style={styles.commentTextInput}
                  value={props.contactInfoAddress}
                  onChangeText={text => props.setContactInfoAddress(text)}
                />
              </View>
            </View>

            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.reqType}>
                  city <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  style={styles.commentTextInput}
                  value={props.contactInfoCity}
                  onChangeText={text => props.setContactInfoCity(text)}
                />
              </View>
            </View>

            <View>
              <View style={styles.reqTypeContainer}>
                <Text style={styles.reqType}>
                  state/region <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <Pressable
                onPress={() =>
                  props.setShowStateRegionModal({
                    show: true,
                    type: 'StateRegion',
                  })
                }
                style={styles.pressable}>
                <Text style={styles.text}>
                  {(props?.showStateRegionModal &&
                    props?.showStateRegionModal?.chooseVal) ||
                    props?.contactInformationData?.stateAndRegion}
                </Text>
                <View style={styles.dropIconContainer}>
                  <ArrowDropIcon
                    name="arrow-drop-up"
                    size={20}
                    style={styles.dropIcon}
                  />
                  <ArrowDropIcon name="arrow-drop-down" size={20} />
                </View>
              </Pressable>
            </View>

            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.reqType}>
                  zip/postal code <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  style={styles.commentTextInput}
                  value={props.contactInfoPostalCode}
                  onChangeText={text => props.setContactInfoPostalCode(text)}
                  keyboardType="number-pad"
                />
              </View>
            </View>

            <MyModal {...props} />

            <View style={styles.cancelAndSendReqContainer}>
              <Pressable
                onPress={() => props.setIsShowContactInformationModal(false)}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#6c757d'},
                ]}>
                <Text style={[styles.cancelPressableText]}>close</Text>
              </Pressable>

              <Pressable
                onPress={() => props.submitContactInfo()}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.sendReqPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
                ]}>
                {props.contactInIsLoading ? (
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

export default ContactInformationModal;
