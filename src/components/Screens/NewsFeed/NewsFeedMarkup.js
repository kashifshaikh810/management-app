import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import Header from '../Header/Header';

const NewsFeedMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.companyNewsContainer}>
          <Text style={styles.companyHeading}>company news feed</Text>
        </View>

        <View style={styles.headingContainer}>
          <HomeIcon name="home" size={15} color="green" />
          <Text style={styles.headingTextSlash}>/</Text>
          <Text style={styles.headingText}>company news feed</Text>
        </View>

        <View style={styles.warnHeadingContainer}>
          <View style={styles.warnBackground}>
            <Text style={styles.warnText}>We couldn't find any records.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewsFeedMarkup;
