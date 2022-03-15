import React from 'react';
import {View, Text, ScrollView, Pressable, Switch} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import DeletIcon from 'react-native-vector-icons/FontAwesome5';
import DropUpIcon from 'react-native-vector-icons/MaterialIcons';
import tw from 'tailwind-react-native-classnames';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {Picker} from '@react-native-picker/picker';

import Header from '../Header/Header';
import styles from './styles';
import EnableAndDisableButton from './EnableAndDisableButton/EnableAndDisableButton';

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
        <View style={styles.wouldYouLikeContainer}>
          <Text style={styles.wouldYouLike}>
            WOULD YOU LIKE TO ENABLE PERFORMANCE REVIEW?
          </Text>
          <EnableAndDisableButton
            {...props}
            enable="enable"
            disable="disable"
          />
        </View>
        <View style={styles.textInputContainer}>
          <FloatingLabelInput
            label="Name"
            // value={phone}
            staticLabel
            selectionColor="black"
            containerStyles={styles.nameTextInput}
            customLabelStyles={{
              colorFocused: '#263238',
              fontSizeFocused: 13,
            }}
            labelStyles={{
              backgroundColor: '#fff',
              paddingHorizontal: 5,
              color: '#263238',
            }}
            inputStyles={{
              color: '#263238',
              paddingHorizontal: 10,
            }}
            // onChangeText={value => {
            //   setPhone(value);
            // }}
          />
        </View>

        <View style={styles.textInputContainer}>
          <FloatingLabelInput
            label="Description"
            // value={phone}
            staticLabel
            selectionColor="black"
            containerStyles={styles.descriptionTextInput}
            customLabelStyles={{
              colorFocused: '#263238',
              fontSizeFocused: 13,
            }}
            labelStyles={{
              backgroundColor: '#fff',
              paddingHorizontal: 5,
              color: '#263238',
            }}
            inputStyles={{
              color: '#263238',
              paddingHorizontal: 10,
            }}
            // onChangeText={value => {
            //   setPhone(value);
            // }}
          />
        </View>

        {generalSettingsEnableSection({...props})}
      </View>
    );
  }
};

const generalSettingsEnableSection = props => {
  if (props.generalSettingsButton.show === 'enable') {
    return (
      <>
        <View style={styles.textInputContainer}>
          <Text style={styles.beginText}>Begin Performance Reviews on</Text>
          <View style={[styles.nameTextInput, styles.justify]}>
            <Text>here date picker</Text>
          </View>
        </View>

        <View style={styles.textInputContainer}>
          <Text style={styles.beginText}>Frequency</Text>
          <View style={[styles.nameTextInput, styles.justify]}>
            <Picker
              mode="dropdown"
              selectedValue={props.terminationReasonActiveOrNotAction}
              onValueChange={(itemValue, itemIndex) =>
                props.setTerminationReasonActiveOrNotAction(itemValue)
              }>
              <Picker.Item label="Every Week" value="Every Week" />
              <Picker.Item label="Every Month" value="Every Month" />
              <Picker.Item label="Every 3 Months" value="Every 3 Months" />
              <Picker.Item label="Every 6 Months" value="Every 6 Months" />
              <Picker.Item label="Every Year" value="Every Year" />
            </Picker>
          </View>
        </View>

        <View style={styles.textInputContainer}>
          <Text style={styles.beginText}>Send a Reminder</Text>
          <View style={[styles.nameTextInput, styles.justify]}>
            <Picker
              mode="dropdown"
              selectedValue={props.terminationReasonActiveOrNotAction}
              onValueChange={(itemValue, itemIndex) =>
                props.setTerminationReasonActiveOrNotAction(itemValue)
              }>
              <Picker.Item label="1 Day Before" value="1 Day Before" />
              <Picker.Item label="1 Week Before" value="1 Week Before" />
            </Picker>
          </View>
        </View>

        <View style={[styles.line, tw`mt-2`]} />

        <View style={[styles.headingContainer, styles.switchContainer]}>
          <Switch
            trackColor={{false: '#b3b3b3', true: '#f5dd4b'}}
            thumbColor={props.isEnabled ? '#fff' : '#fff'}
            onValueChange={props.toggleSwitch}
            value={props.isEnabled}
          />
          <Text style={[styles.beginText, tw`mt-2`]}>
            Allow Self-Assessment
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.switchContainer]}>
          <Switch
            trackColor={{false: '#b3b3b3', true: '#f5dd4b'}}
            thumbColor={props.isEnabled ? '#fff' : '#fff'}
            onValueChange={props.toggleSwitch}
            value={props.isEnabled}
          />
          <Text style={[styles.beginText, tw`mt-2`]}>Final Assessment</Text>
        </View>

        <View style={[styles.headingContainer, styles.switchContainer]}>
          <Switch
            trackColor={{false: '#b3b3b3', true: '#f5dd4b'}}
            thumbColor={props.isEnabled ? '#fff' : '#fff'}
            onValueChange={props.toggleSwitch}
            value={props.isEnabled}
          />
          <Text style={[styles.beginText, tw`mt-2`]}>
            Hide manager's PR for employees?
          </Text>
        </View>
        <View style={[styles.line, tw`mt-2`]} />

        <View style={styles.textInputContainer}>
          <Text style={[styles.beginText, tw`mt-2`]}>Employees</Text>
          <View style={styles.descriptionTextInput}>
            <View style={styles.itemEnd}>
              <DropUpIcon
                name="arrow-drop-up"
                size={15}
                color="black"
                style={styles.backColor}
                color={props.employeesScrollVal === 0 ? '#b3b3b3' : 'black'}
              />
            </View>
            <ScrollView
              style={styles.scrollView}
              onScroll={e => {
                props.setEmployeesScrollVal(e.nativeEvent.contentOffset.y);
              }}
              nestedScrollEnabled={true}
              persistentScrollbar={true}>
              <View>
                <Pressable
                  onPress={() => props.setIsSelected(true)}
                  style={[
                    props.isSelected ? tw`bg-blue-200` : tw`bg-white`,
                    tw`mr-7`,
                  ]}>
                  <Text>abddd</Text>
                </Pressable>
                <Pressable>
                  <Text>abddd</Text>
                </Pressable>
                <View>
                  <Text>abddd</Text>
                </View>
                <View>
                  <Text>abddd</Text>
                </View>

                <View>
                  <Text>abddd</Text>
                </View>

                <View>
                  <Text>abddd</Text>
                </View>

                <View>
                  <Text>abddd</Text>
                </View>
              </View>
            </ScrollView>
            <View style={styles.itemEnd}>
              <DropUpIcon
                name="arrow-drop-down"
                size={15}
                color="black"
                style={styles.backColor}
                color={props.employeesScrollVal > 32 ? '#b3b3b3' : 'black'}
              />
            </View>
          </View>
        </View>

        <View style={styles.textInputContainer}>
          <Text style={[styles.beginText, tw`mt-2`]}>offices</Text>
          <View style={styles.descriptionTextInput}>
            <ScrollView style={styles.scrollView} nestedScrollEnabled={true}>
              <View>
                <Text>abddd</Text>
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={styles.textInputContainer}>
          <Text style={[styles.beginText, tw`mt-2`]}>departments</Text>
          <View style={styles.descriptionTextInput}>
            <ScrollView style={styles.scrollView} nestedScrollEnabled={true}>
              <View>
                <Text>abddd</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </>
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

        {props.showNewPerformanceConfig && (
          <Pressable
            onPress={() => {}}
            style={({pressed}) => [
              styles.saveSettingsPressable,
              pressed ? tw`bg-gray-400` : tw`bg-green-600`,
            ]}>
            <Text style={styles.saveSettingsPressableText}>save settings</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default CompanyPerformanceReviewMarkup;
