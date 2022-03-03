import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import ArrowDownIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import ArrowLeftIcon from 'react-native-vector-icons/MaterialIcons';
import SelectArrowIcon from 'react-native-vector-icons/Entypo';
import tw from 'tailwind-react-native-classnames';

import Header from '../Header/Header';
import styles from './styles';

const EquipmentAndLicenseMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>EQUIPMENT AND LICENSE REQUESTS</Text>
        </View>

        <View style={styles.headingContainer}>
          <HomeIcon
            name="home"
            size={15}
            color="green"
            style={styles.homeIcon}
          />
          <Text style={styles.slash}>/</Text>
          <Text style={styles.headingText}>dashboard</Text>
          <Text style={styles.slash}>/</Text>
          <Text style={styles.headingText}>Equipment and License Requests</Text>
        </View>

        <View style={styles.todoCard}>
          <View style={styles.requestContainer}>
            <Text style={styles.request}>all request</Text>
          </View>
          <View style={styles.line} />
          <Pressable style={() => [styles.pressable]}>
            <Text style={styles.refineText}>refine request</Text>
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
                <Text style={styles.allHeadingText}>Item Requested</Text>
              </View>
              <Text>28/02/2022 16:17:54</Text>
            </View>
            <View style={[styles.columnView, tw`ml-5`]}>
              <View style={tw`flex-row`}>
                <SelectArrowIcon name="select-arrows" size={15} color="black" />
                <Text style={styles.allHeadingText}>Date Submitted</Text>
              </View>
              <Text>data ?</Text>
            </View>
          </View>

          <View style={styles.rowView}>
            <View style={styles.columnView}>
              <View style={tw`flex-row`}>
                <SelectArrowIcon name="select-arrows" size={15} color="black" />
                <Text style={styles.allHeadingText}>Employee</Text>
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
                  <Text style={styles.allHeadingText}>status</Text>
                </View>
              </View>
              <Text>19:45:00</Text>
            </View>
          </View>

          <View style={styles.rowView}>
            <View style={styles.columnView}>
              <View style={tw`flex-row`}>
                <SelectArrowIcon name="select-arrows" size={15} color="black" />
                <Text style={styles.allHeadingText}>note</Text>
              </View>
              {/* <View
                style={[
                  styles.viewDetailsPressable,
                  {backgroundColor: '#006f44'},
                ]}>
                <Text style={tw`text-white p-2`}>resolved</Text>
              </View> */}
            </View>
            <View style={[styles.columnView, tw`ml-5`]}>
              <Text style={styles.allHeadingText}>Actions</Text>
              {/* <View
                style={[
                  styles.viewDetailsPressable,
                  {backgroundColor: '#006f44', flexDirection: 'row'},
                ]}>
                <Pressable
                  onPress={() => props.changeStatus()}
                  style={({pressed}) => [
                    {
                      backgroundColor: pressed ? '#b3b3b3' : '#006f44',
                      padding: 5,
                      borderRadius: 15,
                    },
                  ]}>
                  <ArrowLeftIcon
                    name="arrow-left"
                    style={styles.arrowIcon}
                    size={20}
                    color="#fff"
                  />
                </Pressable>
                <Pressable
                  onPress={() => props.viewDetails()}
                  style={({pressed}) => [
                    {
                      backgroundColor: pressed ? '#b3b3b3' : '#006f44',
                      borderRadius: 15,
                    },
                  ]}>
                  <Text style={styles.cancelPressableText}>view details</Text>
                </Pressable>
              </View> */}
            </View>
          </View>

          <View style={[styles.line, tw`mb-2`]} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EquipmentAndLicenseMarkup;
