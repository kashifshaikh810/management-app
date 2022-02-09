import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Pressable,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import GoogleIcon from 'react-native-vector-icons/FontAwesome';
import FacebookIcon from 'react-native-vector-icons/FontAwesome';
import TwitterIcon from 'react-native-vector-icons/AntDesign';
import LinkeInIcon from 'react-native-vector-icons/Entypo';
import AlertIcon from 'react-native-vector-icons/Foundation';
import CheckBoxIcon from 'react-native-vector-icons/MaterialIcons';
import EyeIcon from 'react-native-vector-icons/Feather';

import styles from './styles';
import {Auth, Database} from '../../../firebaseTools';

const SignUp = props => {
  const [selected, setSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setshowPass] = useState(true);
  const [focus, setFocus] = useState('');
  const [showErr, setShowErr] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createAccount = () => {
    if (firstName && lastName && phone && email && password && selected) {
      setIsLoading(true);
      Auth()
        .createUserWithEmailAndPassword(email, password)
        .then(({user}) => {
          Database().ref(`/userSignUp/${user.uid}`).set({
            userID: user.uid,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            password: password,
          });
          Auth().signOut();
          props.navigation.navigate('Login');
          Alert.alert('SignUp Success.', 'You are successfully signUp', [
            {text: 'OK'},
          ]);
          setIsLoading(false);
        })
        .catch(err => {
          if (err.code === 'auth/email-already-in-use') {
            setShowErr('The email address is already use by another account');
          } else if (err.code === 'auth/invalid-email') {
            setShowErr('The email address is invalid');
          } else if (err.code === 'auth/weak-password') {
            setShowErr('The password length must be greater then 6');
          }
          setIsLoading(false);
        });
    }
  };

  const firstNameFunc = text => {
    setFirstName(text);
    setShowErr('');
  };

  const lastNameFunc = text => {
    setLastName(text);
    setShowErr('');
  };

  const phoneFunc = text => {
    setPhone(text);
    setShowErr('');
  };

  const emailFunc = text => {
    setEmail(text);
    setShowErr('');
  };

  const passwordFunc = text => {
    setPassword(text);
    setShowErr('');
  };

  return (
    <ScrollView style={styles.keyboardAware}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={styles.headerTextContainer}>
          <Text style={styles.creatAccountText}>create an account</Text>
          <Text style={styles.suggestionText}>
            <AlertIcon name="alert" size={20} color="black" /> Start a 30-days
            free trial today. No credit card required. No obligation. No risk.
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <Pressable style={styles.pressAbleStyle}>
            <GoogleIcon
              name="google"
              size={15}
              color="#fff"
              style={styles.pressableIcon}
            />
            <Text style={styles.pressableText}>Google</Text>
          </Pressable>

          <Pressable style={styles.pressAbleStyle}>
            <TwitterIcon
              name="twitter"
              size={15}
              color="#fff"
              style={styles.pressableIcon}
            />
            <Text style={styles.pressableText}>Twitter</Text>
          </Pressable>

          <Pressable style={styles.pressAbleStyle}>
            <LinkeInIcon
              name="linkedin"
              size={15}
              color="#fff"
              style={styles.pressableIcon}
            />
            <Text style={styles.pressableText}>LinkeIn</Text>
          </Pressable>

          <Pressable style={styles.facebookPressable}>
            <FacebookIcon
              name="facebook"
              size={15}
              color="#fff"
              style={styles.pressableIcon}
            />
            <Text style={styles.pressableText}>Facebook</Text>
          </Pressable>
        </View>
        <View style={styles.orTextContainer}>
          <Text style={styles.orText}>or</Text>
        </View>

        <View style={styles.lastSectionContainer}>
          <View style={styles.inputsAndButtonsContainer}>
            <View style={styles.firstNameTextContiner}>
              <Text style={styles.firstNameText}>
                First Name<Text style={styles.star}>*</Text>
              </Text>
            </View>
            <View
              style={[
                styles.firstNameTextInput,
                {
                  borderColor:
                    focus === 'firstNameInput' ? '#006f44' : '#b3b3b3',
                },
              ]}>
              <TextInput
                value={firstName}
                onChangeText={text => firstNameFunc(text)}
                onFocus={() => setFocus('firstNameInput')}
              />
            </View>

            <View style={styles.lastNameTextContainer}>
              <Text style={styles.firstNameText}>
                Last Name<Text style={styles.star}>*</Text>
              </Text>
            </View>
            <View
              style={[
                styles.lastNameTextInput,
                {
                  borderColor:
                    focus === 'lastNameInput' ? '#006f44' : '#b3b3b3',
                },
              ]}>
              <TextInput
                value={lastName}
                onChangeText={text => lastNameFunc(text)}
                onFocus={() => setFocus('lastNameInput')}
              />
            </View>

            <View style={styles.phoneTextContainer}>
              <Text style={styles.firstNameText}>
                Phone<Text style={styles.star}>*</Text>
              </Text>
            </View>
            <View
              style={[
                styles.lastNameTextInput,
                {
                  borderColor: focus === 'phoneInput' ? '#006f44' : '#b3b3b3',
                },
              ]}>
              <TextInput
                value={phone}
                keyboardType="number-pad"
                onChangeText={text => phoneFunc(text)}
                onFocus={() => setFocus('phoneInput')}
              />
            </View>

            <View style={styles.emailTextContainer}>
              <Text style={styles.firstNameText}>
                Business Email<Text style={styles.star}>*</Text>
              </Text>
            </View>
            <View
              style={[
                styles.lastNameTextInput,
                {
                  borderColor: focus === 'emailInput' ? '#006f44' : '#b3b3b3',
                },
              ]}>
              <TextInput
                value={email}
                keyboardType="email-address"
                onChangeText={text => emailFunc(text)}
                onFocus={() => setFocus('emailInput')}
              />
            </View>

            <View style={styles.passwordTextContainer}>
              <Text style={styles.firstNameText}>
                Password<Text style={styles.star}>*</Text>
              </Text>
            </View>
            <View
              style={[
                styles.lastNameTextInput,
                {
                  borderColor:
                    focus === 'passwordInput' ? '#006f44' : '#b3b3b3',
                },
              ]}>
              <TextInput
                value={password}
                onChangeText={text => passwordFunc(text)}
                secureTextEntry={showPass}
                onFocus={() => setFocus('passwordInput')}
              />
            </View>
            <View style={styles.eyeIconContainer}>
              <Pressable
                onPress={() => setshowPass(!showPass)}
                style={styles.eyeIconPressable}>
                <EyeIcon
                  name={showPass ? 'eye' : 'eye-off'}
                  size={20}
                  color="#fff"
                />
              </Pressable>
            </View>

            {showErr ? <Text style={styles.errText}>{showErr}</Text> : null}

            <View style={styles.checkboxAndTextContainer}>
              <CheckBoxIcon
                name={selected ? 'check-box' : 'check-box-outline-blank'}
                size={20}
                color="black"
                style={styles.checkboxIcon}
                onPress={() => setSelected(!selected)}
              />
              <Text style={styles.bySubmittingText}>
                By submitting this form I agree to the Terms and Conditions and
                Privacy Policy.
              </Text>
            </View>

            <View style={styles.createAccountButtonContainer}>
              <Pressable
                onPress={() => props.navigation.navigate('Login')}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.createAccountPressable,
                  {backgroundColor: pressed ? '#f5f5f5' : '#b3b3b3'},
                ]}>
                <Text style={styles.createAccountPressableText}>Back</Text>
              </Pressable>

              <Pressable
                onPress={() => createAccount()}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.createAccountPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
                ]}>
                {isLoading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.createAccountPressableText}>
                    Create Account
                  </Text>
                )}
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
