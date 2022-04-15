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
import LockIcon from 'react-native-vector-icons/FontAwesome5';
import VisaIcon from 'react-native-vector-icons/FontAwesome';
import DiscoverIcon from 'react-native-vector-icons/FontAwesome';
import MasterCardIcon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import tw from 'tailwind-react-native-classnames';

const UpdatePaymentInformationModal = props => {
  return (
    <Modal
      visible={props.showCompanyCountryModal}
      animationType="slide"
      transparent
      onRequestClose={() => props.setShowCompanyCountryModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>
              update payment information
            </Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => props.setShowCompanyCountryModal(false)}
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
                  card holder name <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  selectionColor="#b3b3b3"
                  keyboardType="default"
                  value={props.cardHolderName}
                  onChangeText={text => props.setCardHolderName(text)}
                  style={styles.emailTextInput}
                />
              </View>
            </View>

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>
                  card number <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  selectionColor="#b3b3b3"
                  keyboardType="number-pad"
                  placeholder="2222 2222 2222 2222"
                  value={props.cardNumber}
                  onChangeText={text => props.handleCardNumber(text)}
                  style={styles.emailTextInput}
                  maxLength={19}
                />
              </View>
            </View>

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>
                  expiration date <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  selectionColor="#b3b3b3"
                  keyboardType="number-pad"
                  placeholder="MM / YY"
                  maxLength={5}
                  value={props.expirationDate}
                  onChangeText={text => props.handleExpirationDate(text)}
                  style={styles.emailTextInput}
                />
              </View>
            </View>

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={[styles.email, tw`uppercase`]}>
                  cCV <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  selectionColor="#b3b3b3"
                  keyboardType="number-pad"
                  placeholder="CCV"
                  //   value={props.email}
                  //   onChangeText={text => props.setEmail(text)}
                  style={styles.emailTextInput}
                />
              </View>
            </View>

            <View
              style={[
                styles.headingContainer,
                styles.lockIconAndIconContainer,
              ]}>
              <View
                style={[
                  styles.lockIconContainer,
                  {borderColor: '#ffa700', borderWidth: 5},
                ]}>
                <LockIcon name="lock" size={30} color="#ffa700" />
              </View>

              <Text style={styles.safeText}>
                Safe money transfers with your Credit Card Visa, Discover and
                Master Card
              </Text>
            </View>

            <View
              style={[styles.headingContainer, styles.paymentsCardContainer]}>
              <VisaIcon name="cc-visa" size={30} style={styles.visaIcon} />
              <DiscoverIcon name="cc-discover" size={30} style={styles.Icon} />
              <MasterCardIcon
                name="cc-mastercard"
                size={30}
                style={styles.Icon}
              />
            </View>

            <View style={[styles.line, tw`mt-4`]} />

            <View style={styles.cancelAndSubmitContainer}>
              <Pressable
                onPress={() => props.setShowCompanyCountryModal(false)}
                disabled={props.isLoading}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#ff4c52'},
                ]}>
                <Text style={[styles.cancelPressableText]}>cancel</Text>
              </Pressable>

              <Pressable
                onPress={() => {}}
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

export default UpdatePaymentInformationModal;
