import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Notification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardHeadingContainer}>
        <Text style={styles.cardHeadingText}>notifications</Text>
      </View>
      <View style={styles.line} />

      <View style={{flex: 1, alignItems: 'center', marginVertical: 30}}>
        <Text
          style={{color: '#b3b3b3', fontSize: 18, textTransform: 'capitalize'}}>
          no messages for you.
        </Text>
      </View>
    </View>
  );
};

export default Notification;
