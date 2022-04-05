import React, {useState} from 'react';
import {View, Text, Modal, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {Auth, Database} from '../firebaseTools/index';
import styles from '../AllNavigation/DrawerNavigation/styles';
import ChangePassword from '../Screens/Authentication/ChangePassword/ChangePassword';

const CustomContentModal = props => {
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const navigation = useNavigation();

  // redux tool
  const {currUserData} = useSelector(state => state.reduc);

  const changePassword = () => {
    setShowChangePasswordModal(true);
    props.setShowModal(false);
    props.navigation.closeDrawer();
  };

  const goToProfile = () => {
    navigation.navigate('My Profile');
    props.setShowModal(false);
    props.navigation.closeDrawer();
  };

  const logOut = async () => {
    let userType = currUserData?.userType;
    let companyId = currUserData?.companyId;
    let uid = Auth()?.currentUser?.uid;
    await Auth()
      .signOut()
      .then(() => {
        if (userType === 'employee') {
          Database()
            .ref(`/newEmployess/${companyId}`)
            .child(uid)
            .update({activityType: 'inActive'})
            .then(() => {
              console.log('success');
              props.setShowModal(false);
              props.navigation.navigate('Login');
            })
            .catch(err => {
              console.log(err, 'err');
            });
        } else {
          console.log('success');
          props.setShowModal(false);
          props.navigation.navigate('Login');
        }
      })
      .catch(err => {
        console.log(err, 'err');
      });
  };

  return (
    <>
      <Modal
        transparent
        animationType="fade"
        visible={props.showModal}
        onRequestClose={() => props.setShowModal(false)}>
        <Pressable
          onPress={() => props.setShowModal(false)}
          style={styles.modalPressable}>
          <View style={styles.modalContent}>
            <View style={styles.modalPressables}>
              <Pressable
                onPress={() => goToProfile()}
                style={({pressed}) => [
                  {backgroundColor: pressed ? '#8dd9e8' : '#fff'},
                ]}>
                <Text style={styles.modalText}>Profile</Text>
              </Pressable>
              <Pressable
                onPress={() => changePassword()}
                style={({pressed}) => [
                  {backgroundColor: pressed ? '#8dd9e8' : '#fff'},
                ]}>
                <Text style={styles.modalText}>Change Password</Text>
              </Pressable>
              <Pressable
                onPress={() => logOut()}
                style={({pressed}) => [
                  {backgroundColor: pressed ? '#8dd9e8' : '#fff'},
                ]}>
                <Text style={styles.modalText}>Log Out</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </Modal>
      <ChangePassword
        setShowChangePasswordModal={setShowChangePasswordModal}
        showChangePasswordModal={showChangePasswordModal}
      />
    </>
  );
};

export default CustomContentModal;
