import React from 'react';
import {View, TextInput, Image, Pressable, StatusBar} from 'react-native';

import styles from './styles';
import SearchIcon from 'react-native-vector-icons/Feather';
import BellIcon from 'react-native-vector-icons/FontAwesome5';
import MenuIcon from 'react-native-vector-icons/Entypo';
import ArrowBackIcon from 'react-native-vector-icons/Ionicons';

const HeaderMarkup = props => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.menuIconContainer}>
        <Pressable
          onPress={() =>
            props.name === 'profile'
              ? props.navigation.goBack()
              : props?.navigation?.openDrawer()
          }
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#f3f3f3' : '#fff',
              borderRadius: 20,
            },
          ]}>
          {props.name === 'profile' ? (
            <ArrowBackIcon name="arrow-back" size={30} />
          ) : (
            <MenuIcon name="menu" size={30} />
          )}
        </Pressable>
      </View>
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: props.focus ? '#fff' : '#e9e9f0',
            elevation: props.focus ? 10 : 0,
          },
        ]}>
        <SearchIcon
          name="search"
          size={15}
          color={props.focus ? 'black' : '#b3b3b3'}
        />
        <TextInput
          placeholder={`I'am looking for ...`}
          selectionColor="black"
          returnKeyType="search"
          onFocus={() => props.setFocus(true)}
          onBlur={() => props.setFocus(false)}
        />
      </View>
      <View style={styles.flagImageContainer}>
        <Image
          source={require('../../Assists/images/flag.png')}
          style={styles.flagImage}
        />
        <Pressable
          onPress={() => props.navigation.navigate('Notification')}
          style={({pressed}) => [
            styles.bellIcon,
            {backgroundColor: pressed ? '#f3f3f3' : '#fff'},
          ]}>
          <BellIcon name="bell" size={30} color="#b3b3b3" />
        </Pressable>
      </View>
    </View>
  );
};

export default HeaderMarkup;
