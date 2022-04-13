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
import SelectArrowIcon from 'react-native-vector-icons/Entypo';
import CloseIcon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import tw from 'tailwind-react-native-classnames';
import MyModal from '../../../Employees/Modal/Modal';

const CompanyDetailsModal = props => {
  return (
    <Modal
      visible={props.showCompanyDetailsModal}
      animationType="slide"
      transparent
      onRequestClose={() => props.setShowCompanyDetailsModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>
              update company information
            </Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => props.setShowCompanyDetailsModal(false)}
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
            <MyModal {...props} />

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>company name</Text>
              </View>
              <View>
                <TextInput
                  selectionColor="#b3b3b3"
                  value={props.companyName}
                  onChangeText={text => props.setCompanyName(text)}
                  style={styles.emailTextInput}
                />
              </View>
            </View>

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>Namespace</Text>
              </View>
              <View>
                <TextInput
                  selectionColor="#b3b3b3"
                  value={props.companyNameSpace}
                  onChangeText={text => props.setCompanyNameSpace(text)}
                  style={styles.emailTextInput}
                />
              </View>
            </View>

            <View style={[styles.line, tw`mt-4`]} />

            <View style={styles.billingContainer}>
              <Text style={styles.billingText}>billing address</Text>
            </View>

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>
                  country <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <Pressable
                onPress={() =>
                  props.setShowCompanyCountryModal({
                    show: true,
                    type: 'Company',
                  })
                }
                style={styles.pressable}>
                <Text style={styles.text}>
                  {props?.showCompanyCountryModal?.chooseVal}
                </Text>
                <View style={styles.dropIconContainer}>
                  <SelectArrowIcon
                    name="select-arrows"
                    size={15}
                    color="black"
                  />
                </View>
              </Pressable>
            </View>

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>
                  street address 1 <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  selectionColor="#b3b3b3"
                  value={props.companyStreetAddressOne}
                  onChangeText={text => props.setCompanyStreetAddressOne(text)}
                  style={styles.emailTextInput}
                />
              </View>
            </View>

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>
                  city <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  selectionColor="#b3b3b3"
                  value={props.companyCity}
                  onChangeText={text => props.setCompanyCity(text)}
                  style={styles.emailTextInput}
                />
              </View>
            </View>

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>
                  state <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  selectionColor="#b3b3b3"
                  value={props.companyState}
                  onChangeText={text => props.setCompanyState(text)}
                  style={styles.emailTextInput}
                />
              </View>
            </View>

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>
                  zip code <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  selectionColor="#b3b3b3"
                  keyboardType="number-pad"
                  value={props.companyZipCode}
                  onChangeText={text => props.setCompanyZipCode(text)}
                  style={styles.emailTextInput}
                  maxLength={6}
                />
              </View>
            </View>

            <View style={[styles.line, tw`mt-4`]} />

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>phone number</Text>
              </View>
              <View>
                <TextInput
                  selectionColor="#b3b3b3"
                  keyboardType="number-pad"
                  value={props.companyPhoneNumber}
                  onChangeText={text => props.setCompanyPhoneNumber(text)}
                  style={styles.emailTextInput}
                  maxLength={15}
                />
              </View>
            </View>

            <View style={[styles.line, tw`mt-4`]} />

            <View style={styles.cancelAndSubmitContainer}>
              <Pressable
                onPress={() => props.setShowCompanyDetailsModal(false)}
                disabled={props.isLoading}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#ff4c52'},
                ]}>
                <Text style={[styles.cancelPressableText]}>cancel</Text>
              </Pressable>

              <Pressable
                onPress={() => props.companyDetailsSubmit()}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.submitPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
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

export default CompanyDetailsModal;
