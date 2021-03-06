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
import ArrowDropIcon from 'react-native-vector-icons/EvilIcons';

import MyModal from '../../../Employees/Modal/Modal';
import styles from './styles';

const AddLicenseCertificationModal = props => {
  return (
    <Modal
      visible={props.isShowAddLicenseCertification}
      animationType="slide"
      transparent
      onRequestClose={() => props.setIsShowAddLicenseCertification(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={styles.container}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>
              add license or certification
            </Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => props.setIsShowAddLicenseCertification(false)}
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
                <Text style={styles.reqType}>
                  name <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  style={styles.commentTextInput}
                  value={props.addLicenseName}
                  onChangeText={text => props.setAddLicenseName(text)}
                />
              </View>
            </View>

            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.commentText}>
                  issuing organization <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  style={styles.commentTextInput}
                  value={props.addLicenseIssuing}
                  onChangeText={text => props.setAddLicenseIssuing(text)}
                />
              </View>
            </View>

            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.reqType}>
                  credential iD <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  style={styles.commentTextInput}
                  value={props.addLicenseId}
                  keyboardType="number-pad"
                  onChangeText={text => props.setAddLicenseId(text)}
                />
              </View>
            </View>

            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.reqType}>URL</Text>
              </View>
              <View>
                <TextInput
                  style={styles.commentTextInput}
                  value={props.addLicenseUrl}
                  onChangeText={text => props.setAddLicenseUrl(text)}
                />
              </View>
            </View>

            <View>
              <View style={styles.reqTypeContainer}>
                <Text style={styles.reqType}>issue date</Text>
              </View>
              <Pressable
                onPress={() =>
                  props.setShowIssueDateMonthModal({show: true, type: 'Month'})
                }
                style={styles.pressable}>
                <Text style={styles.text}>
                  {props?.showIssueDateMonthModal?.chooseVal || 'Month'}
                </Text>
                <View style={styles.dropIconContainer}>
                  <ArrowDropIcon
                    name="chevron-down"
                    size={20}
                    color="#263238"
                  />
                </View>
              </Pressable>

              <View style={styles.reqTypeContainer} />

              <Pressable
                onPress={() =>
                  props.setShowIssueDateYearsModal({show: true, type: 'Year'})
                }
                style={styles.pressable}>
                <Text style={styles.text}>
                  {props?.showIssueDateYearsModal?.chooseVal || 'Year'}
                </Text>
                <View style={styles.dropIconContainer}>
                  <ArrowDropIcon
                    name="chevron-down"
                    size={20}
                    color="#263238"
                  />
                </View>
              </Pressable>
            </View>

            <View>
              <View style={styles.reqTypeContainer}>
                <Text style={styles.reqType}>expiration date</Text>
              </View>
              <Pressable
                onPress={() =>
                  props.setShowExpirationDateMonthModal({
                    show: true,
                    type: 'Month',
                  })
                }
                style={styles.pressable}>
                <Text style={styles.text}>
                  {props?.showExpirationDateMonthModal?.chooseVal || 'Month'}
                </Text>
                <View style={styles.dropIconContainer}>
                  <ArrowDropIcon
                    name="chevron-down"
                    size={20}
                    color="#263238"
                  />
                </View>
              </Pressable>

              <View style={styles.reqTypeContainer} />

              <Pressable
                onPress={() =>
                  props.setShowExpirationDateYearsModal({
                    show: true,
                    type: 'Year',
                  })
                }
                style={styles.pressable}>
                <Text style={styles.text}>
                  {props?.showExpirationDateYearsModal?.chooseVal || 'Year'}
                </Text>
                <View style={styles.dropIconContainer}>
                  <ArrowDropIcon
                    name="chevron-down"
                    size={20}
                    color="#263238"
                  />
                </View>
              </Pressable>
            </View>

            <MyModal {...props} />

            <View style={styles.cancelAndSendReqContainer}>
              <Pressable
                onPress={() => props.setIsShowAddLicenseCertification(false)}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#6c757d'},
                ]}>
                <Text style={[styles.cancelPressableText]}>close</Text>
              </Pressable>

              <Pressable
                disabled={
                  props?.isLicenseAndCertificationsLoading ||
                  (props?.addLicenseName ===
                    props?.licenseCertificationsData?.addLicenseName &&
                    props?.addLicenseIssuing ===
                      props?.licenseCertificationsData?.addLicenseIssuing &&
                    props?.addLicenseUrl ===
                      props?.licenseCertificationsData?.addLicenseUrl &&
                    props?.addLicenseId ===
                      props?.licenseCertificationsData?.addLicenseId &&
                    props?.showIssueDateMonthModal?.chooseVal ===
                      props?.licenseCertificationsData?.issueSectionMonth &&
                    props?.showIssueDateYearsModal?.chooseVal ===
                      props?.licenseCertificationsData?.issueSectionYear &&
                    props?.showExpirationDateMonthModal?.chooseVal ===
                      props?.licenseCertificationsData?.expireSectionMonth &&
                    props?.showExpirationDateYearsModal?.chooseVal ===
                      props?.licenseCertificationsData?.expireSectionYear)
                }
                onPress={() => props.submitAddLicense()}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.sendReqPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
                ]}>
                {props.isLicenseAndCertificationsLoading ? (
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

export default AddLicenseCertificationModal;
