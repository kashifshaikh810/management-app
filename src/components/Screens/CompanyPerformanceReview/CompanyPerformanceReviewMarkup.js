import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import DeletIcon from 'react-native-vector-icons/FontAwesome5';
import tw from 'tailwind-react-native-classnames';

import Header from '../Header/Header';
import styles from './styles';

const data = [
  {
    title: 'Default',
    lable: 'Inactive',
    subTitle: 'Default',
    date: '1/12/2020',
    frequency: '',
    companyFeedBack: 'disabled',
    coreValues: 'disabled',
    KPI: 'disabled',
    goalsAchievement: 'disabled',
  },
  {
    title: 'Name',
    lable: 'Active',
    subTitle: 'Default',
    date: '1/12/2020',
    frequency: 'Every 3 Months',
    companyFeedBack: 'Enable',
    coreValues: 'Enable',
    KPI: 'Enable',
    goalsAchievement: 'Enable',
  },
];

const performanceConfigurationListSection = props => {
  if (!props.showNewPerformanceConfig) {
    return (
      <View style={styles.card}>
        <Text style={styles.heading}>performance configuration list</Text>

        <View style={styles.line} />

        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View style={styles.itemCard}>
              <View style={styles.lableContainer}>
                <View
                  style={[
                    styles.lableMain,
                    item.lable === 'Active'
                      ? tw`bg-green-500`
                      : tw`bg-gray-500`,
                  ]}>
                  <Text style={styles.lableText}>{item.lable}</Text>
                </View>
              </View>
              <View style={styles.firstTextContainer}>
                <Text style={styles.titleText}>{item.title}</Text>

                <View>
                  <Text style={styles.subTitleText}>{item.subTitle}</Text>
                </View>

                <View>
                  <Text style={styles.dateText}>
                    Begin Performance Reviews on: {item.date}
                  </Text>
                </View>

                <View>
                  <Text style={styles.frequencyText}>
                    Frequency: {item.frequency}
                  </Text>
                </View>

                <View style={styles.lastTextContainer}>
                  <View>
                    <Text style={styles.lastTexts}>
                      Company Feedback: {item.companyFeedBack}
                    </Text>
                  </View>

                  <View>
                    <Text style={styles.lastTexts}>
                      Core Values: {item.coreValues}
                    </Text>
                  </View>

                  <View>
                    <Text style={styles.lastTexts}>KPI: {item.KPI}</Text>
                  </View>

                  <View>
                    <Text style={styles.lastTexts}>
                      Goals achievement: {item.goalsAchievement}
                    </Text>
                  </View>
                </View>

                <View style={styles.editAndDeletePressableContainer}>
                  <Pressable
                    onPress={() => {}}
                    style={({pressed}) => [
                      styles.editPressable,
                      {backgroundColor: pressed ? 'orange' : 'lightgray'},
                    ]}>
                    {({pressed}) => (
                      <Text
                        style={[
                          styles.editAndDeletePressableText,
                          pressed ? tw`text-white` : tw`text-black`,
                        ]}>
                        <EditIcon
                          name="edit"
                          size={15}
                          color={pressed ? '#fff' : '#b3b3b3'}
                        />{' '}
                        {''} edit
                      </Text>
                    )}
                  </Pressable>

                  <Pressable
                    onPress={() => {}}
                    style={({pressed}) => [
                      styles.deletePressable,
                      {backgroundColor: pressed ? 'orange' : 'lightgray'},
                    ]}>
                    {({pressed}) => (
                      <Text
                        style={[
                          styles.editAndDeletePressableText,
                          pressed ? tw`text-white` : tw`text-black`,
                        ]}>
                        <DeletIcon
                          name="user-times"
                          size={15}
                          color={pressed ? '#fff' : '#b3b3b3'}
                        />{' '}
                        {''}
                        delete
                      </Text>
                    )}
                  </Pressable>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
};

const addNewConfigurationSection = props => {
  if (props.showNewPerformanceConfig) {
    return (
      <View style={styles.card}>
        <View style={styles.headingContainer}>
          <Pressable
            style={[
              props.showTab === 'general-settings'
                ? tw`bg-gray-200`
                : 'bg-white',
              styles.tabsPressable,
            ]}
            onPress={() => props.setShowTab('general-settings')}>
            <Text
              style={[
                styles.tabsText,
                props.showTab === 'general-settings'
                  ? tw`text-gray-500`
                  : tw`text-gray-600`,
              ]}>
              general settings
            </Text>
          </Pressable>

          <Pressable
            style={[
              props.showTab === 'core-values' ? tw`bg-gray-200` : 'bg-white',
              styles.tabsPressable,
            ]}
            onPress={() => props.setShowTab('core-values')}>
            <Text
              style={[
                styles.tabsText,
                props.showTab === 'core-values'
                  ? tw`text-gray-500`
                  : tw`text-gray-600`,
              ]}>
              core values
            </Text>
          </Pressable>
        </View>

        <Pressable
          style={[
            props.showTab === 'key-performance' ? tw`bg-gray-200` : 'bg-white',
            styles.keyPerformacePressable,
          ]}
          onPress={() => props.setShowTab('key-performance')}>
          <Text
            style={[
              styles.tabsText,
              props.showTab === 'key-performance'
                ? tw`text-gray-500`
                : tw`text-gray-600`,
            ]}>
            KEY PERFORMANCE INDICATORS (KPI'S)
          </Text>
        </Pressable>
        <View style={styles.headingContainer}>
          <Pressable
            style={[
              props.showTab === 'goals-achievement'
                ? tw`bg-gray-200`
                : 'bg-white',
              styles.tabsPressable,
            ]}
            onPress={() => props.setShowTab('goals-achievement')}>
            <Text
              style={[
                styles.tabsText,
                props.showTab === 'goals-achievement'
                  ? tw`text-gray-500`
                  : tw`text-gray-600`,
              ]}>
              GOALS ACHIEVEMENT
            </Text>
          </Pressable>

          <Pressable
            style={[
              props.showTab === 'company-feedback'
                ? tw`bg-gray-200`
                : 'bg-white',
              styles.tabsPressable,
            ]}
            onPress={() => props.setShowTab('company-feedback')}>
            <Text
              style={[
                styles.tabsText,
                props.showTab === 'company-feedback'
                  ? tw`text-gray-500`
                  : tw`text-gray-600`,
              ]}>
              COMPANY FEEDBACK
            </Text>
          </Pressable>
        </View>

        <View style={styles.line} />

        {generalSettingsTabSection({...props})}
      </View>
    );
  }
};

const generalSettingsTabSection = props => {
  if (props.showTab === 'general-settings') {
    return (
      <View>
        <View style={tw`bg-gray-50 m-2 pb-2`}>
          <Text style={styles.wouldYouLike}>
            WOULD YOU LIKE TO ENABLE PERFORMANCE REVIEW?
          </Text>
          <View style={styles.enableAndDisablePressableContainer}>
            <Pressable
              onPress={() => props.setGeneralSettingsButton('enable')}
              style={({pressed}) => [
                styles.enablePressable,
                props.generalSettingsButton === 'enable'
                  ? tw`bg-green-600`
                  : tw`bg-white`,
              ]}>
              <Text
                style={[
                  styles.enableAndDisablePressableText,
                  props.generalSettingsButton === 'enable'
                    ? tw`text-white`
                    : tw`text-gray-200`,
                ]}>
                enable
              </Text>
            </Pressable>

            <Pressable
              onPress={() => props.setGeneralSettingsButton('disable')}
              style={({pressed}) => [
                styles.disablePressable,
                props.generalSettingsButton === 'disable'
                  ? tw`bg-green-600`
                  : tw`bg-white`,
              ]}>
              <Text
                style={[
                  styles.enableAndDisablePressableText,
                  props.generalSettingsButton === 'disable'
                    ? tw`text-white`
                    : tw`text-gray-200`,
                ]}>
                disable
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
};

const CompanyPerformanceReviewMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.scrollView}>
        <View style={[styles.textContainer, styles.headingContainer]}>
          <View>
            <Text style={styles.text}>performance settings</Text>
            <View style={[styles.headingContainer, tw`mt-2`]}>
              <HomeIcon name="home" size={15} color="green" />
              <Text style={styles.slash}>/</Text>
              <Text style={styles.headingText}>settings</Text>
              <Text style={styles.slash}>/</Text>
              <Text style={styles.headingText}>performance</Text>
            </View>
          </View>
          <View style={styles.cancelPressableContainer}>
            <Pressable
              onPress={() =>
                props.setShowNewPerformanceConfig(
                  !props.showNewPerformanceConfig,
                )
              }
              android_ripple={{color: '#fff'}}
              style={({pressed}) => [styles.cancelPressable]}>
              <Text style={[styles.cancelPressableText]}>
                {props.showNewPerformanceConfig
                  ? 'go to main'
                  : 'new performance config'}
              </Text>
            </Pressable>
          </View>
        </View>

        {/* main page */}
        {performanceConfigurationListSection({...props})}

        {/* add new configuration page  */}
        {addNewConfigurationSection({...props})}
      </ScrollView>
    </View>
  );
};

export default CompanyPerformanceReviewMarkup;
