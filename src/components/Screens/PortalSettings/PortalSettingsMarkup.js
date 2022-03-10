import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';

import Header from '../Header/Header';
import PrimaryColorChangeModal from './Modals/PrimaryColorChangeModal/PrimaryColorChangeModal';
import PrimaryColorHoverChangeModal from './Modals/PrimaryColorHoverChangeModal/PrimaryColorHoverChangeModal';
import styles from './styles';

const PortalSettingsMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>portal settings</Text>
        </View>

        <View style={styles.headingContainer}>
          <HomeIcon
            name="home"
            size={15}
            color="green"
            style={styles.homeIcon}
          />
          <Text style={styles.slash}>/</Text>
          <Text style={styles.headingText}>settings</Text>
          <Text style={styles.slash}>/</Text>
          <Text style={styles.headingText}>portal</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>theme settings</Text>

          <View style={styles.line} />

          <View>
            <Text style={styles.primaryText}>primary color:</Text>
            <Pressable
              style={[
                styles.box,
                {backgroundColor: props?.primaryColor || 'green'},
              ]}
              onPress={() => props.setShowPrimaryColorChangeModal(true)}
            />
          </View>

          <View>
            <Text style={styles.primaryHoverText}>primary color hover:</Text>
            <Pressable
              style={[
                styles.box,
                {backgroundColor: props?.primaryHoverColor || 'gray'},
              ]}
              onPress={() => props.setShowPrimaryColorHoverChangeModal(true)}
            />
          </View>

          <View style={[styles.line, styles.smallLine]} />
        </View>

        <Pressable
          onPress={() => {}}
          android_ripple={{color: '#fff'}}
          style={({pressed}) => [styles.cancelPressable]}>
          <Text style={[styles.cancelPressableText]}>update settings</Text>
        </Pressable>

        {/* primary color change modal       */}
        <PrimaryColorChangeModal {...props} />

        {/* primary color hover change modal  */}
        <PrimaryColorHoverChangeModal {...props} />
      </ScrollView>
    </View>
  );
};

export default PortalSettingsMarkup;
