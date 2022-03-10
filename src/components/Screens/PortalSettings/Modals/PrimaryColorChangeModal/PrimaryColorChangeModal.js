import React from 'react';
import {View, Text, Modal, StatusBar, Pressable} from 'react-native';
import {TriangleColorPicker} from 'react-native-color-picker';

import styles from './styles';

const PrimaryColorChangeModal = props => {
  return (
    <Modal
      visible={props.showPrimaryColorChangeModal}
      animationType="fade"
      transparent
      onRequestClose={() => props.setShowPrimaryColorChangeModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
        <View style={styles.modalBody}>
          <View>
            <TriangleColorPicker
              defaultColor={props?.primaryColor || 'green'}
              onColorSelected={color => props.primaryColorOnSelected(color)}
              style={styles.colorPicker}
            />
            <View style={styles.saveButtonContainer}>
              <Text style={styles.saveText}>Save</Text>
            </View>
          </View>

          <View style={styles.cancelAndSubmitContainer}>
            <Pressable
              onPress={() => props.setShowPrimaryColorChangeModal(false)}
              android_ripple={{color: '#fff'}}
              style={({pressed}) => [styles.cancelPressable]}>
              <Text style={[styles.cancelPressableText]}>cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PrimaryColorChangeModal;
