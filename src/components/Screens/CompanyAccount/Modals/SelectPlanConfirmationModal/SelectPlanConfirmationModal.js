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
import InfoIcon from 'react-native-vector-icons/Entypo';

import styles from './styles';
import tw from 'tailwind-react-native-classnames';

const SelectPlanConfirmationModal = props => {
  const {data} =
    props?.showCompanySelecPlanYearlyModal.type === 'yearly'
      ? props?.showCompanySelecPlanYearlyModal
      : props?.showCompanySelecPlanModal;

  return (
    <Modal
      visible={
        props.showCompanySelecPlanModal.show ||
        props.showCompanySelecPlanYearlyModal.show ||
        false
      }
      animationType="slide"
      transparent
      onRequestClose={() =>
        props.showCompanySelecPlanYearlyModal.type === 'yearly'
          ? props.setShowCompanySelecPlanYearlyModal({show: false})
          : props.setShowCompanySelecPlanModal({show: false})
      }>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>confirmation</Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() =>
                  props.showCompanySelecPlanYearlyModal.type === 'yearly'
                    ? props.setShowCompanySelecPlanYearlyModal({show: false})
                    : props.setShowCompanySelecPlanModal({show: false})
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
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{data?.type}</Text>
              <Text style={styles.numberOfEmployees}>
                {data?.numOfEmployees}{' '}
                <InfoIcon
                  name="info-with-circle"
                  size={15}
                  style={styles.infoIcon}
                />
              </Text>
              <Text style={styles.itemDescription}>{data?.description}</Text>

              <View
                style={[
                  styles.headingContainer,
                  styles.buttonAndPriceContainer,
                ]}>
                <Text style={styles.itemPrice}>
                  $
                  {props.showCompanySelecPlanYearlyModal.type
                    ? data?.price || 50000000
                    : data?.price || 5000}
                </Text>
                <Text style={styles.monthText}>/</Text>
                <Text style={styles.monthText}>
                  {props.showCompanySelecPlanYearlyModal.type === 'yearly'
                    ? 'year'
                    : 'month'}
                </Text>
              </View>
            </View>

            <View style={[styles.line, styles.smallLine]} />

            <View style={styles.marginTop}>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>apply discount code</Text>
              </View>
              <View style={styles.emailTextInput}>
                <TextInput
                  selectionColor="#b3b3b3"
                  keyboardType="number-pad"
                  placeholder="Enter Discount Code"
                  //   value={props.email}
                  style={styles.width}
                  //   onChangeText={text => props.setEmail(text)}
                />
                <View style={styles.applyPressableContainer}>
                  <Pressable
                    style={({pressed}) => [
                      styles.applyPressable,
                      pressed ? tw`bg-green-600` : tw`bg-white`,
                    ]}>
                    {({pressed}) => (
                      <Text
                        style={[
                          styles.applyPressableText,
                          pressed ? tw`text-white` : tw`text-green-500`,
                        ]}>
                        Apply
                      </Text>
                    )}
                  </Pressable>
                </View>
              </View>
            </View>

            <View style={[styles.line, styles.marginTop]} />

            <View style={styles.cancelAndSubmitContainer}>
              <Pressable
                onPress={() =>
                  props.showCompanySelecPlanYearlyModal.type === 'yearly'
                    ? props.setShowCompanySelecPlanYearlyModal({show: false})
                    : props.setShowCompanySelecPlanModal({show: false})
                }
                disabled={props.isLoading}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#f3f3f3' : '#b3b3b3'},
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
                  <Text style={styles.cancelPressableText}>update</Text>
                )}
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default SelectPlanConfirmationModal;
