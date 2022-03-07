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

const CompanyDetailsModal = props => {
  return (
    <Modal
      visible={false}
      animationType="slide"
      transparent
      onRequestClose={() => {}}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>
              update company information
            </Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => {}}
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
            {/* <MyModal {...props} /> */}

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>company name</Text>
              </View>
              <View>
                <TextInput
                  keyboardType="email-address"
                  //   value={props.email}
                  //   onChangeText={text => props.setEmail(text)}
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
                  keyboardType="email-address"
                  //   value={props.email}
                  //   onChangeText={text => props.setEmail(text)}
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
                  //   props.setIsShowLanguagesModal({show: true, type: 'Language'})
                  {}
                }
                style={styles.pressable}>
                <Text style={styles.text}>
                  {(props?.isShowLanguagesModal &&
                    props?.isShowLanguagesModal?.chooseVal) ||
                    props?.profileDetails?.language}
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
                  keyboardType="email-address"
                  //   value={props.email}
                  //   onChangeText={text => props.setEmail(text)}
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
                  keyboardType="email-address"
                  //   value={props.email}
                  //   onChangeText={text => props.setEmail(text)}
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
              <Pressable
                onPress={() =>
                  //   props.setIsShowLanguagesModal({show: true, type: 'Language'})
                  {}
                }
                style={styles.pressable}>
                <Text style={styles.text}>
                  {(props?.isShowLanguagesModal &&
                    props?.isShowLanguagesModal?.chooseVal) ||
                    props?.profileDetails?.language}
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
                  zip code <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  keyboardType="number-pad"
                  //   value={props.email}
                  //   onChangeText={text => props.setEmail(text)}
                  style={styles.emailTextInput}
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
                  keyboardType="number-pad"
                  //   value={props.email}
                  //   onChangeText={text => props.setEmail(text)}
                  style={styles.emailTextInput}
                />
              </View>
            </View>

            <View style={[styles.line, tw`mt-4`]} />

            <View style={styles.cancelAndSubmitContainer}>
              <Pressable
                onPress={() => {}}
                disabled={props.isLoading}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#6c757d'},
                ]}>
                <Text style={[styles.cancelPressableText]}>cancel</Text>
              </Pressable>

              <Pressable
                onPress={() => {}}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.sendReqPressable,
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
