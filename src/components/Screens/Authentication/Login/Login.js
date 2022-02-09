import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
  ActivityIndicator,
  StatusBar,
  Alert,
} from 'react-native';
import GoogleIcon from 'react-native-vector-icons/FontAwesome';
import FacebookIcon from 'react-native-vector-icons/FontAwesome';
import TwitterIcon from 'react-native-vector-icons/AntDesign';
import LinkeInIcon from 'react-native-vector-icons/Entypo';

import styles from './styles';
import {Auth, Database} from '../../../firebaseTools';

const Login = props => {
  const [showErr, setShowErr] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [focus, setFocus] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logIn = () => {
    if (email && password) {
      setIsLoading(true);
      Auth()
        .signInWithEmailAndPassword(email, password)
        .then(({user}) => {
          Database()
            .ref(`/userLogin/${user.uid}`)
            .set({userID: user.uid, email: email, password: password});
          Alert.alert('Login Success.', 'You are successfully login', [
            {text: 'OK'},
          ]);
          setIsLoading(false);
          setEmail('');
          setPassword('');
        })
        .catch(err => {
          if (err.code === 'auth/invalid-email') {
            setShowErr('The email address is badly formatted');
          } else if (err.code === 'auth/wrong-password') {
            setShowErr('The password is invalid');
          } else if (err.code === 'auth/user-not-found') {
            setShowErr('This user not found, Please signUp and try again');
          }
          setIsLoading(false);
        });
    }
  };

  const emailFunc = text => {
    setEmail(text);
  };

  const passwordFunc = text => {
    setPassword(text);
  };

  if (Auth()?.currentUser?.uid) {
    props?.navigation?.replace('DrawerNavigation');
  }
  return (
    <ScrollView style={styles.scrollView}>
      <StatusBar translucent backgroundColor="transparent" barStyle="default" />
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../Assists/images/backImage.jpg')}
          style={styles.backImage}>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>Brainy HR</Text>
              </View>

              <View style={styles.headerSigInTextContainer}>
                <Text style={styles.headerSignInText}>
                  Sign in to your account
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

              <View style={styles.suggestionTextContainer}>
                <Text style={styles.suggestionText}>Or</Text>
                <Text style={styles.suggestionText}>
                  use your email account
                </Text>
              </View>

              <View style={styles.lastContainer}>
                <View
                  style={[
                    styles.textInput,
                    {
                      borderColor:
                        focus === 'emailInput' ? '#006f44' : '#b3b3b3',
                    },
                  ]}>
                  <TextInput
                    placeholder="E-Mail Address"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={text => emailFunc(text)}
                    onFocus={() => setFocus('emailInput')}
                  />
                </View>

                <View
                  style={[
                    styles.textInput,
                    {
                      borderColor:
                        focus === 'passwordInput' ? '#006f44' : '#b3b3b3',
                    },
                  ]}>
                  <TextInput
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={text => passwordFunc(text)}
                    onFocus={() => setFocus('passwordInput')}
                  />
                </View>
                <View style={styles.forgotPasswordTextContainer}>
                  <Pressable
                    onPress={() => props.navigation.navigate('ForgotPassword')}
                    style={({pressed}) => [
                      {backgroundColor: pressed ? '#b3b3b3' : '#fff'},
                    ]}>
                    <Text style={styles.forgotText}>Forgot Your Password?</Text>
                  </Pressable>
                </View>

                {showErr ? <Text style={styles.errText}>{showErr}</Text> : null}

                <View style={styles.rigerterAndLoginButtonContainer}>
                  <Pressable
                    onPress={() => props.navigation.navigate('SignUp')}
                    android_ripple={{color: '#fff'}}
                    style={({pressed}) => [
                      styles.registerButton,
                      {backgroundColor: pressed ? '#006f44' : '#fff'},
                    ]}>
                    <Text style={styles.register}>Register</Text>
                  </Pressable>

                  <Pressable
                    onPress={() => logIn()}
                    android_ripple={{color: '#fff'}}
                    style={({pressed}) => [
                      styles.loginButton,
                      {backgroundColor: pressed ? '#fff' : '#006f44'},
                    ]}>
                    {isLoading ? (
                      <ActivityIndicator color="#fff" />
                    ) : (
                      <Text style={styles.login}>Login</Text>
                    )}
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default Login;
