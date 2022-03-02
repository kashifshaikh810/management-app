import React from 'react';
import {View, Text, ScrollView, Pressable, SectionList} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import ArrowDownIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ArrowLeftIcon from 'react-native-vector-icons/MaterialIcons';
import SelectArrowIcon from 'react-native-vector-icons/Entypo';
import tw from 'tailwind-react-native-classnames';

import Header from '../Header/Header';
import styles from './styles';

const EquipmentAndLicenseMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.text}>EMPLOYEE COMPLAINTS</Text>
        </View>

        <View style={styles.headingContainer}>
          <HomeIcon
            name="home"
            size={15}
            color="green"
            style={styles.homeIcon}
          />
          <Text style={styles.slash}>/</Text>
          <Text style={styles.headingText}>Employee Complaints</Text>
        </View>

        <View style={styles.todoCard}>
          <View style={styles.requestContainer}>
            <Text style={styles.request}>all request</Text>
          </View>
          <View style={styles.line} />
          <Pressable style={() => [styles.pressable]}>
            <Text style={styles.refineText}>refine complaints</Text>
            <ArrowDownIcon
              name={
                // props.showInputSection
                // ? 'arrow-up-bold-circle'
                'arrow-down-bold-circle'
              }
              style={styles.arrowIcon}
              size={20}
              color="#006f44"
            />
          </Pressable>

          <View style={styles.rowView}>
            <View style={styles.columnView}>
              <View style={tw`flex-row`}>
                <SelectArrowIcon name="select-arrows" size={15} color="black" />
                <Text style={styles.allHeadingText}>date submited</Text>
              </View>
              <Text>28/02/2022 16:17:54</Text>
            </View>
            <View style={[styles.columnView, tw`ml-5`]}>
              <Text style={styles.allHeadingText}>Reviewer</Text>
              <Text>reviewer name here...</Text>
            </View>
          </View>

          <View style={styles.rowView}>
            <View style={styles.columnView}>
              <View style={tw`flex-row`}>
                <SelectArrowIcon name="select-arrows" size={15} color="black" />
                <Text style={styles.allHeadingText}>Date of Incident</Text>
              </View>
              <Text>03/04/2022</Text>
            </View>
            <View style={[styles.columnView, tw`ml-5`]}>
              <View style={styles.heading}>
                <View style={tw`flex-row`}>
                  <SelectArrowIcon
                    name="select-arrows"
                    size={15}
                    color="black"
                  />
                  <Text style={styles.allHeadingText}>Time of Incident</Text>
                </View>
              </View>
              <Text>19:45:00</Text>
            </View>
          </View>

          <View style={styles.rowView}>
            <View style={styles.columnView}>
              <View style={tw`flex-row`}>
                <SelectArrowIcon name="select-arrows" size={15} color="black" />
                <Text style={styles.allHeadingText}>Status</Text>
              </View>
              <View
                style={[
                  styles.viewDetailsPressable,
                  {backgroundColor: '#006f44', flexDirection: 'row'},
                ]}>
                <ArrowLeftIcon
                  name="arrow-left"
                  style={styles.arrowIcon}
                  size={20}
                  color="#fff"
                />
                <Text style={tw`text-white p-2`}>resolved</Text>
              </View>
            </View>
            <View style={[styles.columnView, tw`ml-5`]}>
              <Text style={styles.allHeadingText}>Actions</Text>
              <Pressable
                onPress={() => {}}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.viewDetailsPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
                ]}>
                <Text style={styles.cancelPressableText}>view details</Text>
              </Pressable>
            </View>
          </View>

          <View style={[styles.line, tw`mb-2`]} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EquipmentAndLicenseMarkup;
