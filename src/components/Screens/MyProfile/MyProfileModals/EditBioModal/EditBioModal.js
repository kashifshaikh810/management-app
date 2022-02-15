import React, {useState} from 'react';
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

const EditBio = props => {
  return (
    <Modal
      visible={props.isShowEditBioModal}
      animationType="slide"
      transparent
      onRequestClose={() => props.setIsShowEditBioModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={styles.container}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>Edit Bio</Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => props.setIsShowEditBioModal(false)}
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
                <Text style={styles.reqType}>about</Text>
              </View>
              <View style={styles.commentTextInput}>
                <TextInput
                  value={props.about}
                  onChangeText={text => props.setAbout(text)}
                  multiline
                />
              </View>
            </View>

            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.commentText}>hobbies</Text>
              </View>
              <View style={styles.commentTextInput}>
                <TextInput
                  value={props.hobbies}
                  onChangeText={text => props.setHobbies(text)}
                  multiline
                />
              </View>
              <Text style={styles.textInputBottomHeading}>
                One item per line
              </Text>
            </View>

            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.reqType}>favorite books</Text>
              </View>
              <View style={styles.commentTextInput}>
                <TextInput
                  value={props.favoriteBooks}
                  onChangeText={text => props.setFavoriteBooks(text)}
                  multiline
                />
              </View>
              <Text style={styles.textInputBottomHeading}>
                One item per line
              </Text>
            </View>

            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.reqType}>music preference</Text>
              </View>
              <View style={styles.commentTextInput}>
                <TextInput
                  value={props.musicPreference}
                  onChangeText={text => props.setMusicPreference(text)}
                  multiline
                />
              </View>
              <Text style={styles.textInputBottomHeading}>
                One item per line
              </Text>
            </View>

            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.reqType}>sports</Text>
              </View>
              <View style={styles.commentTextInput}>
                <TextInput
                  value={props.sports}
                  onChangeText={text => props.setSports(text)}
                  multiline
                />
              </View>
              <Text style={styles.textInputBottomHeading}>
                One item per line
              </Text>
            </View>

            <View style={styles.cancelAndSendReqContainer}>
              <Pressable
                onPress={() => props.setIsShowEditBioModal(false)}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#6c757d'},
                ]}>
                <Text style={[styles.cancelPressableText]}>close</Text>
              </Pressable>

              <Pressable
                onPress={() => props.updateEditBio()}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.sendReqPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
                ]}>
                {false ? (
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

export default EditBio;
