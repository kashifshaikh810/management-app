import React from 'react';
import {View, Text, Pressable, Modal} from 'react-native';

import styles from './styles';

const ActionModal = props => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={props.showActionModal}
      onRequestClose={() => props.setShowActionModal(false)}>
      <Pressable
        onPress={() => props.setShowActionModal(false)}
        style={[styles.modalPressable, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
        <View style={styles.modalContent}>
          <View style={styles.modalPressables}>
            <Pressable
              onPress={() => {
                props.setShowActionModal(false);
                props.setShowEditListModal({show: true, type: 'edit'});
              }}
              style={({pressed}) => [
                styles.pressable,
                {backgroundColor: pressed ? '#f3f3f3' : '#fff'},
              ]}>
              <Text>Edit</Text>
            </Pressable>
            <Pressable
              onPress={() => {}}
              style={({pressed}) => [
                styles.pressable,
                {backgroundColor: pressed ? '#f3f3f3' : '#fff'},
              ]}>
              <Text>Duplicate</Text>
            </Pressable>
            <Pressable
              onPress={() => {}}
              style={({pressed}) => [
                styles.pressable,
                {backgroundColor: pressed ? '#f3f3f3' : '#fff'},
              ]}>
              <Text>Assign List</Text>
            </Pressable>
            <Pressable
              onPress={() => {}}
              style={({pressed}) => [
                styles.pressable,
                {backgroundColor: pressed ? '#f3f3f3' : '#fff'},
              ]}>
              <Text>Remove</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ActionModal;
