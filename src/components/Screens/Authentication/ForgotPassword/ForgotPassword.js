import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Pressable,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Auth} from '../../../firebaseTools/index';

import styles from './styles';

const ForgotPassword = props => {
  const [showErr, setShowErr] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [focus, setFocus] = useState('');
  const [email, setEmail] = useState('');

  const resetPassword = () => {
    if (email) {
      setIsLoading(true);
      Auth()
        .sendPasswordResetEmail(email)
        .then(res => {
          console.log(res);
          setIsLoading(false);
        })
        .catch(err => {
          setIsLoading(false);
          console.log(err);
        });
    }
  };

  const emailFunc = text => {
    setEmail(text);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Reset Password</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.emailAddressHeading}>
          <Text style={styles.emailAddressText}>
            E-Mail Address<Text style={styles.star}>*</Text>
          </Text>
        </View>

        <View
          style={[
            styles.textInput,
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
            onPress={() => resetPassword()}
            android_ripple={{color: '#fff'}}
            style={({pressed}) => [
              styles.createAccountPressable,
              {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
            ]}>
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.createAccountPressableText}>Reset</Text>
            )}
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
