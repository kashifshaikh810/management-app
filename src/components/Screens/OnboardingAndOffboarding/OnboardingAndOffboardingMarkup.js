import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import Header from '../Header/Header';

const OnboardingAndOffboardingMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>onboarding/offboarding</Text>
        </View>

        <View style={styles.headingContainer}>
          <HomeIcon name="home" size={15} color="green" />
          <Text>/</Text>
          <Text>Settings</Text>
          <Text>onboarding/offboarding</Text>
        </View>

        <View>
          <Text>addadadff</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default OnboardingAndOffboardingMarkup;
