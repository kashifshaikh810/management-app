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
  Image,
} from 'react-native';
import CloseIcon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import {SvgUri} from 'react-native-svg';

import styles from './styles';
import tw from 'tailwind-react-native-classnames';

const AwardsTabCreateNewRewardModal = props => {
  return (
    <Modal
      visible={props.showRewardsModal}
      animationType="slide"
      transparent
      onRequestClose={() => props.setShowRewardsModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>
              create new reward earning rule
            </Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => props.setShowRewardsModal(false)}
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
            <Pressable
              style={styles.svgImageContainer}
              onPress={() => props.uploadAwardNewImage()}>
              {props?.newAwardImage ? (
                <Image
                  style={styles.newRewardImage}
                  source={{uri: props?.newAwardImage?.uri}}
                />
              ) : (
                <SvgUri
                  width="100"
                  height="100"
                  uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
                />
              )}
            </Pressable>
            <Pressable
              onPress={() => props.uploadAwardNewImage()}
              android_ripple={{color: '#fff'}}
              style={({pressed}) => [
                styles.uploadNewImagePressable,
                {backgroundColor: pressed ? 'rgba(0,0,0,0.5)' : 'green'},
              ]}>
              <Text style={styles.cancelPressableText}>upload new image</Text>
            </Pressable>

            <View>
              <View style={styles.rewardTextContainer}>
                <Text style={styles.reward}>
                  reward title <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  selectionColor="#b3b3b3"
                  keyboardType="default"
                  //   value={props.reward}
                  //   onChangeText={text => props.setreward(text)}
                  style={styles.rewardTextInput}
                />
              </View>
            </View>

            <View>
              <View style={styles.rewardTextContainer}>
                <Text style={styles.reward}>
                  points <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  selectionColor="#b3b3b3"
                  keyboardType="number-pad"
                  //   value={props.reward}
                  //   onChangeText={text => props.setreward(text)}
                  style={styles.rewardTextInput}
                />
              </View>
            </View>

            <View>
              <View style={styles.rewardTextContainer}>
                <Text style={styles.reward}>
                  active? <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View style={[styles.rewardTextInput, styles.pickerContainer]}>
                <Picker
                  mode="dropdown"
                  // selectedValue={props.officesActiveOrNotAction}
                  // onValueChange={(itemValue, itemIndex) =>
                  //   props.setOfficesActiveOrNotAction(itemValue)
                  // }
                >
                  <Picker.Item label="Yes" value="Yes" />
                  <Picker.Item label="No" value="No" />
                </Picker>
              </View>
            </View>

            <View>
              <View style={styles.rewardTextContainer}>
                <Text style={styles.reward}>reviewer(s)</Text>
              </View>
              <View>
                <TextInput
                  selectionColor="#b3b3b3"
                  keyboardType="default"
                  //   value={props.reward}
                  //   onChangeText={text => props.setreward(text)}
                  style={styles.rewardTextInput}
                />
              </View>
            </View>

            <View>
              <View style={styles.rewardTextContainer}>
                <Text style={styles.reward}>description</Text>
              </View>
              <View>
                <TextInput
                  selectionColor="#b3b3b3"
                  keyboardType="default"
                  //   value={props.reward}
                  //   onChangeText={text => props.setreward(text)}
                  style={styles.descriptionTextInput}
                  multiline
                />
              </View>
            </View>

            <View style={[styles.line, tw`mt-4`]} />

            <View style={styles.cancelAndSubmitContainer}>
              <Pressable
                onPress={() => props.setShowRewardsModal(false)}
                disabled={props.isLoading}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : 'red'},
                ]}>
                <Text style={[styles.cancelPressableText]}>close</Text>
              </Pressable>

              <Pressable
                onPress={() => {}}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.submitPressable,
                  {backgroundColor: pressed ? 'rgba(0,0,0,0.5)' : 'green'},
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

export default AwardsTabCreateNewRewardModal;
