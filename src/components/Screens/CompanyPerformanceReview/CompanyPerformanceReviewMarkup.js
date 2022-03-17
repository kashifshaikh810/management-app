import React from 'react';
import {View, Text, ScrollView, Pressable, Switch} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import PlusIcon from 'react-native-vector-icons/Octicons';
import TrashIcon from 'react-native-vector-icons/FontAwesome5';
import RemoveIcon from 'react-native-vector-icons/AntDesign';
import DropUpIcon from 'react-native-vector-icons/MaterialIcons';
import tw from 'tailwind-react-native-classnames';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {Picker} from '@react-native-picker/picker';

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
                        <TrashIcon
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
        </View>

        <View style={styles.line} />

        {generalSettingsTabSection({...props})}
        {coreValuesTabSection({...props})}
        {keyPerformaceIndicatorsTabSection({...props})}
        {companyFeedBackTabSection({...props})}
        {goalsAchievementTabSection({...props})}
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
  if (props.generalSettingsButton === 'enable') {
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

        <View style={[styles.line, styles.marginTop]} />

        <View style={[styles.headingContainer, styles.switchContainer]}>
          <Switch
            trackColor={{false: '#b3b3b3', true: '#f5dd4b'}}
            thumbColor={props.isEnabled ? '#fff' : '#fff'}
            onValueChange={props.toggleSwitch}
            value={props.isEnabled}
          />
          <Text style={[styles.beginText, styles.marginTop]}>
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
          <Text style={[styles.beginText, styles.marginTop]}>
            Final Assessment
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.switchContainer]}>
          <Switch
            trackColor={{false: '#b3b3b3', true: '#f5dd4b'}}
            thumbColor={props.isEnabled ? '#fff' : '#fff'}
            onValueChange={props.toggleSwitch}
            value={props.isEnabled}
          />
          <Text style={[styles.beginText, styles.marginTop]}>
            Hide manager's PR for employees?
          </Text>
        </View>
        <View style={[styles.line, styles.marginTop]} />

        <View style={styles.textInputContainer}>
          <Text style={[styles.beginText, styles.marginTop]}>Employees</Text>
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
                    styles.marginRight,
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
          <Text style={[styles.beginText, styles.marginTop]}>offices</Text>
          <View style={styles.descriptionTextInput}>
            <ScrollView style={styles.scrollView} nestedScrollEnabled={true}>
              <View>
                <Text>abddd</Text>
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={styles.textInputContainer}>
          <Text style={[styles.beginText, styles.marginTop]}>departments</Text>
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

const coreValuesTabSection = props => {
  if (props.showTab === 'core-values') {
    return (
      <View>
        <View style={styles.wouldYouLikeContainer}>
          <Text style={styles.wouldYouLike}>
            WOULD YOU LIKE TO ENABLE CORE VALUES?
          </Text>
          <View style={styles.enableAndDisablePressableContainer}>
            <Pressable
              onPress={() => props.setCoreValuesButton('enable')}
              style={({pressed}) => [
                styles.enablePressable,
                props.coreValuesButton === 'enable'
                  ? tw`bg-green-600`
                  : tw`bg-white`,
              ]}>
              <Text
                style={[
                  styles.enableAndDisablePressableText,
                  props.coreValuesButton === 'enable'
                    ? tw`text-white`
                    : tw`text-gray-200`,
                ]}>
                enable
              </Text>
            </Pressable>

            <Pressable
              onPress={() => props.setCoreValuesButton('disable')}
              style={({pressed}) => [
                styles.disablePressable,
                props.coreValuesButton === 'disable'
                  ? tw`bg-green-600`
                  : tw`bg-white`,
              ]}>
              <Text
                style={[
                  styles.enableAndDisablePressableText,
                  props.coreValuesButton === 'disable'
                    ? tw`text-white`
                    : tw`text-gray-200`,
                ]}>
                disable
              </Text>
            </Pressable>
          </View>
        </View>
        {coreValueEnableSection({...props})}
      </View>
    );
  }
};

const coreValueEnableSection = props => {
  if (props.coreValuesButton === 'enable') {
    return (
      <View>
        <View
          style={[
            styles.headingContainer,
            styles.marginTop,
            styles.switchContainer,
            styles.paddingLeftZero,
          ]}>
          <Text style={styles.commentsText}>comments</Text>
          <View style={[styles.headingContainer, styles.switchContainer]}>
            <Switch
              trackColor={{false: '#b3b3b3', true: '#f5dd4b'}}
              thumbColor={props.isEnabled ? '#fff' : '#fff'}
              onValueChange={props.toggleSwitch}
              value={props.isEnabled}
            />
            <Text style={[styles.beginText, styles.marginTop]}>
              iclude employee's comment?
            </Text>
          </View>
        </View>

        <View style={[styles.line, styles.marginTop]} />
        <View
          style={[
            styles.headingContainer,
            styles.switchContainer,
            styles.managersCommentContainer,
          ]}>
          <Switch
            trackColor={{false: '#b3b3b3', true: '#f5dd4b'}}
            thumbColor={props.isEnabled ? '#fff' : '#fff'}
            onValueChange={props.toggleSwitch}
            value={props.isEnabled}
          />
          <Text style={[styles.beginText, styles.marginTop]}>
            iclude manager's comment?
          </Text>
        </View>

        <View style={[styles.line, styles.marginTop]} />

        <Text style={[styles.commentsText, styles.shortDesc]}>
          short description
        </Text>

        <View style={styles.textInputContainer}>
          <FloatingLabelInput
            label="Short description"
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

        <View style={[styles.line, styles.marginTop]} />

        <Text style={[styles.commentsText, styles.shortDesc]}>
          core values items
        </Text>

        <Pressable
          style={[
            styles.addNewItem,
            props.coreValuesSaveInputs.length === 0 && tw`pb-3`,
          ]}
          onPress={() => props.coreValueAddNewInput()}>
          {({pressed}) => (
            <Text
              style={[
                styles.addNewItemText,
                pressed ? tw`text-black` : tw`text-green-500`,
              ]}>
              <PlusIcon
                name="plus"
                size={18}
                color={pressed ? 'black' : 'green'}
              />{' '}
              add new item
            </Text>
          )}
        </Pressable>

        {coreValuesItemsNewInputSection({...props})}
        <View
          style={[
            styles.line,
            styles.marginTop,
            props.rateValuesSaveInputs.length === 0 && tw`mb-4`,
          ]}
        />

        <Text style={[styles.commentsText, styles.shortDesc, tw`mt-0`]}>
          rate value items
        </Text>

        <Pressable
          style={[
            styles.addNewItem,
            props.rateValuesSaveInputs.length === 0 && tw`pb-3`,
          ]}
          onPress={() => props.rateValueAddNewInput()}>
          {({pressed}) => (
            <Text
              style={[
                styles.addNewItemText,
                pressed ? tw`text-black` : tw`text-green-500`,
              ]}>
              <PlusIcon
                name="plus"
                size={18}
                color={pressed ? 'black' : 'green'}
              />{' '}
              add new item
            </Text>
          )}
        </Pressable>

        {rateValuesItemsNewInputSection({...props})}
      </View>
    );
  }
};

const coreValuesItemsNewInputSection = props => {
  if (props.coreValuesSaveInputs.length >= 1) {
    return (
      <>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={props.coreValuesSaveInputs}
          renderItem={({item, index}) => (
            <>
              <View style={styles.textInputContainer}>
                <View style={styles.titleAndShortDescCard}>
                  <Pressable
                    onPress={() => props.removeCoreValueInput(item, index)}
                    style={({pressed}) => [
                      styles.removeIconPressable,
                      pressed ? tw`bg-red-100` : tw`bg-white`,
                      pressed && tw`border-0`,
                    ]}>
                    {({pressed}) => (
                      <RemoveIcon
                        name="delete"
                        size={15}
                        color={pressed ? '#fff' : 'green'}
                      />
                    )}
                  </Pressable>
                  <View
                    style={[styles.textInputContainer, styles.marginTopZero]}>
                    <FloatingLabelInput
                      label={item.titleInput}
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
                  <View style={[styles.textInputContainer, styles.marginTop]}>
                    <FloatingLabelInput
                      label={item.shortDescInput}
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
                </View>
              </View>
            </>
          )}
        />
      </>
    );
  }
};

const rateValuesItemsNewInputSection = props => {
  if (props?.rateValuesSaveInputs?.length >= 1) {
    return (
      <>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={props?.rateValuesSaveInputs}
          renderItem={({item, index}) => (
            <>
              <View style={styles.textInputContainer}>
                <View style={styles.titleAndPointsRateCard}>
                  <Pressable
                    onPress={() => props.removeRateValueInput(item, index)}
                    style={({pressed}) => [
                      styles.removeIconPressable,
                      pressed ? tw`bg-red-100` : tw`bg-white`,
                      pressed && tw`border-0`,
                    ]}>
                    {({pressed}) => (
                      <RemoveIcon
                        name="delete"
                        size={15}
                        color={pressed ? '#fff' : 'green'}
                      />
                    )}
                  </Pressable>
                  <View
                    style={[styles.textInputContainer, styles.marginTopZero]}>
                    <FloatingLabelInput
                      label={item.titleInput}
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

                  <View
                    style={[styles.textInputContainer, styles.marginTopZero]}>
                    <FloatingLabelInput
                      label={item.pointsInput}
                      keyboardType="number-pad"
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
                </View>
              </View>
            </>
          )}
        />
      </>
    );
  }
};

const keyPerformaceIndicatorsTabSection = props => {
  if (props.showTab === 'key-performance') {
    return (
      <View>
        <View style={styles.wouldYouLikeContainer}>
          <Text style={styles.wouldYouLike}>
            WOULD YOU LIKE TO ENABLE KEY PERFORMANCE INDICATORS?
          </Text>
          <View style={styles.enableAndDisablePressableContainer}>
            <Pressable
              onPress={() => props.setKeyPerformanceButton('enable')}
              style={({pressed}) => [
                styles.enablePressable,
                props.keyPerformanceButton === 'enable'
                  ? tw`bg-green-600`
                  : tw`bg-white`,
              ]}>
              <Text
                style={[
                  styles.enableAndDisablePressableText,
                  props.keyPerformanceButton === 'enable'
                    ? tw`text-white`
                    : tw`text-gray-200`,
                ]}>
                enable
              </Text>
            </Pressable>

            <Pressable
              onPress={() => props.setKeyPerformanceButton('disable')}
              style={({pressed}) => [
                styles.disablePressable,
                props.keyPerformanceButton === 'disable'
                  ? tw`bg-green-600`
                  : tw`bg-white`,
              ]}>
              <Text
                style={[
                  styles.enableAndDisablePressableText,
                  props.keyPerformanceButton === 'disable'
                    ? tw`text-white`
                    : tw`text-gray-200`,
                ]}>
                disable
              </Text>
            </Pressable>
          </View>
        </View>
        {keyPerformaceIndicatorsEnableSection({...props})}
      </View>
    );
  }
};

const keyPerformaceIndicatorsEnableSection = props => {
  if (props.keyPerformanceButton === 'enable') {
    return (
      <View>
        <View
          style={[
            styles.headingContainer,
            styles.marginTop,
            styles.switchContainer,
            styles.paddingLeftZero,
          ]}>
          <Text style={styles.commentsText}>comments</Text>
          <View style={[styles.headingContainer, styles.switchContainer]}>
            <Switch
              trackColor={{false: '#b3b3b3', true: '#f5dd4b'}}
              thumbColor={props.isEnabled ? '#fff' : '#fff'}
              onValueChange={props.toggleSwitch}
              value={props.isEnabled}
            />
            <Text style={[styles.beginText, styles.marginTop]}>
              iclude employee's comment?
            </Text>
          </View>
        </View>

        <View style={[styles.line, styles.marginTop]} />
        <View
          style={[
            styles.headingContainer,
            styles.switchContainer,
            styles.managersCommentContainer,
          ]}>
          <Switch
            trackColor={{false: '#b3b3b3', true: '#f5dd4b'}}
            thumbColor={props.isEnabled ? '#fff' : '#fff'}
            onValueChange={props.toggleSwitch}
            value={props.isEnabled}
          />
          <Text style={[styles.beginText, styles.marginTop]}>
            iclude manager's comment?
          </Text>
        </View>

        <View style={[styles.line, styles.marginTop]} />

        <Text style={[styles.commentsText, styles.shortDesc]}>
          short description
        </Text>

        <View style={styles.textInputContainer}>
          <FloatingLabelInput
            label="Short description"
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

        <View style={[styles.line, styles.marginTop]} />

        <Text style={[styles.commentsText, styles.shortDesc]}>
          key performance indicators
        </Text>

        <Pressable
          style={[
            styles.addNewItem,
            props.coreValuesSaveInputs.length === 0 && tw`pb-3`,
          ]}
          onPress={() => props.keyPerformanceAddNewInput()}>
          {({pressed}) => (
            <Text
              style={[
                styles.addNewItemText,
                pressed ? tw`text-black` : tw`text-green-500`,
              ]}>
              <PlusIcon
                name="plus"
                size={18}
                color={pressed ? 'black' : 'green'}
              />{' '}
              add new item
            </Text>
          )}
        </Pressable>

        {keyPerformanceItemsNewInputSection({...props})}

        <View
          style={[
            styles.line,
            styles.marginTop,
            props.rateValuesSaveInputs.length === 0 && tw`mb-4`,
          ]}
        />

        <Text style={[styles.commentsText, styles.shortDesc, tw`mt-0`]}>
          rate value items
        </Text>

        <Pressable
          style={[
            styles.addNewItem,
            props.rateValuesSaveInputs.length === 0 && tw`pb-3`,
          ]}
          onPress={() => props.keyPerformanceRateValueAddNewInput()}>
          {({pressed}) => (
            <Text
              style={[
                styles.addNewItemText,
                pressed ? tw`text-black` : tw`text-green-500`,
              ]}>
              <PlusIcon
                name="plus"
                size={18}
                color={pressed ? 'black' : 'green'}
              />{' '}
              add new item
            </Text>
          )}
        </Pressable>

        {keyPerformanceRateValuesItemsNewInputSection({...props})}
      </View>
    );
  }
};

const keyPerformanceItemsNewInputSection = props => {
  if (props?.keyPerformanceSaveInputs?.length >= 1) {
    return (
      <>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={props.keyPerformanceSaveInputs}
          renderItem={({item, index}) => (
            <>
              <View style={styles.textInputContainer}>
                <View style={styles.keyPerformanceIndicatorsCard}>
                  <Pressable
                    onPress={() => props.removeKeyPerformanceInput(item, index)}
                    style={({pressed}) => [
                      styles.removeIconPressable,
                      pressed ? tw`bg-red-100` : tw`bg-white`,
                      pressed && tw`border-0`,
                    ]}>
                    {({pressed}) => (
                      <RemoveIcon
                        name="delete"
                        size={15}
                        color={pressed ? '#fff' : 'green'}
                      />
                    )}
                  </Pressable>
                  <View
                    style={[styles.textInputContainer, styles.marginTopZero]}>
                    <FloatingLabelInput
                      label={item.titleInput}
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
                    <Text style={styles.beginText}>departments</Text>
                    <View style={[styles.nameTextInput, styles.justify]}>
                      <Picker
                        mode="dropdown"
                        selectedValue={props.terminationReasonActiveOrNotAction}
                        onValueChange={(itemValue, itemIndex) =>
                          props.setTerminationReasonActiveOrNotAction(itemValue)
                        }>
                        <Picker.Item
                          label="All Departments"
                          value="All Departments"
                        />
                      </Picker>
                    </View>
                  </View>

                  <View style={[styles.textInputContainer, styles.marginTop]}>
                    <FloatingLabelInput
                      label={item.pointsInput}
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
                </View>
              </View>
            </>
          )}
        />
      </>
    );
  }
};

const keyPerformanceRateValuesItemsNewInputSection = props => {
  if (props?.keyPerformanceRateValueSaveInputs?.length >= 1) {
    return (
      <>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={props?.keyPerformanceRateValueSaveInputs}
          renderItem={({item, index}) => (
            <>
              <View style={styles.textInputContainer}>
                <View style={styles.titleAndPointsRateCard}>
                  <Pressable
                    onPress={() =>
                      props.removeKeyPerformanceRateValueInput(item, index)
                    }
                    style={({pressed}) => [
                      styles.removeIconPressable,
                      pressed ? tw`bg-red-100` : tw`bg-white`,
                      pressed && tw`border-0`,
                    ]}>
                    {({pressed}) => (
                      <RemoveIcon
                        name="delete"
                        size={15}
                        color={pressed ? '#fff' : 'green'}
                      />
                    )}
                  </Pressable>
                  <View
                    style={[styles.textInputContainer, styles.marginTopZero]}>
                    <FloatingLabelInput
                      label={item.titleInput}
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

                  <View
                    style={[styles.textInputContainer, styles.marginTopZero]}>
                    <FloatingLabelInput
                      label={item.pointsInput}
                      keyboardType="number-pad"
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
                </View>
              </View>
            </>
          )}
        />
      </>
    );
  }
};

const companyFeedBackTabSection = props => {
  if (props.showTab === 'company-feedback') {
    return (
      <View>
        <View style={styles.wouldYouLikeContainer}>
          <Text style={styles.wouldYouLike}>
            WOULD YOU LIKE TO ENABLE COMPANY FEEDBACK?
          </Text>
          <View style={styles.enableAndDisablePressableContainer}>
            <Pressable
              onPress={() => props.setCompanyFeedBackButton('enable')}
              style={({pressed}) => [
                styles.enablePressable,
                props.companyFeedBackButton === 'enable'
                  ? tw`bg-green-600`
                  : tw`bg-white`,
              ]}>
              <Text
                style={[
                  styles.enableAndDisablePressableText,
                  props.companyFeedBackButton === 'enable'
                    ? tw`text-white`
                    : tw`text-gray-200`,
                ]}>
                enable
              </Text>
            </Pressable>

            <Pressable
              onPress={() => props.setCompanyFeedBackButton('disable')}
              style={({pressed}) => [
                styles.disablePressable,
                props.companyFeedBackButton === 'disable'
                  ? tw`bg-green-600`
                  : tw`bg-white`,
              ]}>
              <Text
                style={[
                  styles.enableAndDisablePressableText,
                  props.companyFeedBackButton === 'disable'
                    ? tw`text-white`
                    : tw`text-gray-200`,
                ]}>
                disable
              </Text>
            </Pressable>
          </View>
        </View>
        {companyFeedBackEnableSection({...props})}
      </View>
    );
  }
};

const companyFeedBackEnableSection = props => {
  if (props.companyFeedBackButton === 'enable') {
    return (
      <View>
        <View style={styles.textInputContainer}>
          <FloatingLabelInput
            label="Short description"
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

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <Text style={[styles.commentsText, styles.marginRightTwo]}>
            company feedback items
          </Text>

          <Pressable
            style={({pressed}) => [
              styles.testPressable,
              pressed ? tw`bg-gray-200` : tw`bg-green-600`,
            ]}
            onPress={() => props.companyFeedBackAddNewInput()}>
            <Text style={[styles.addNewItemText, tw`text-white`]}>
              <PlusIcon name="plus" size={18} color="#fff" /> add new item
            </Text>
          </Pressable>
        </View>

        {props.companyFeedBackSaveInputs.length === 0 && (
          <View style={styles.weCouldNotContainer}>
            <Text style={styles.weCouldNot}>We couldn't find any records.</Text>
          </View>
        )}

        {companyFeedBackNewInputSection({...props})}
      </View>
    );
  }
};

const companyFeedBackNewInputSection = props => {
  if (props?.companyFeedBackSaveInputs?.length >= 1) {
    return (
      <>
        <FlatList
          contentContainerStyle={styles.marginTop}
          keyExtractor={(item, index) => index.toString()}
          data={props.companyFeedBackSaveInputs}
          renderItem={({item, index}) => (
            <>
              <View style={styles.textInputContainer}>
                <View style={styles.keyPerformanceIndicatorsCard}>
                  <Pressable
                    onPress={() =>
                      props.removeCompanyFeedBackInput(item, index)
                    }
                    style={({pressed}) => [
                      styles.removeIconPressable,
                      pressed ? tw`bg-red-100` : tw`bg-white`,
                      pressed && tw`border-0`,
                    ]}>
                    {({pressed}) => (
                      <RemoveIcon
                        name="delete"
                        size={15}
                        color={pressed ? '#fff' : 'green'}
                      />
                    )}
                  </Pressable>
                  <View
                    style={[styles.textInputContainer, styles.marginTopZero]}>
                    <FloatingLabelInput
                      label={item.titleInput}
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

                  <View style={[styles.textInputContainer, styles.marginTop]}>
                    <FloatingLabelInput
                      label={item.descInput}
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

                  <View style={styles.textInputContainer}>
                    <Text style={styles.beginText}>departments</Text>
                    <View style={[styles.nameTextInput, styles.justify]}>
                      <Picker
                        mode="dropdown"
                        selectedValue={props.terminationReasonActiveOrNotAction}
                        onValueChange={(itemValue, itemIndex) =>
                          props.setTerminationReasonActiveOrNotAction(itemValue)
                        }>
                        <Picker.Item
                          label="All Departments"
                          value="All Departments"
                        />
                      </Picker>
                    </View>
                  </View>
                </View>
              </View>
            </>
          )}
        />
      </>
    );
  }
};

const goalsAchievementTabSection = props => {
  if (props.showTab === 'goals-achievement') {
    return (
      <View>
        <View style={styles.wouldYouLikeContainer}>
          <Text style={styles.wouldYouLike}>
            WOULD YOU LIKE TO ENABLE GOAL ACHIEVEMENT?
          </Text>
          <View style={styles.enableAndDisablePressableContainer}>
            <Pressable
              onPress={() => props.setGoalsAchievementButton('enable')}
              style={({pressed}) => [
                styles.enablePressable,
                props.goalsAchievementButton === 'enable'
                  ? tw`bg-green-600`
                  : tw`bg-white`,
              ]}>
              <Text
                style={[
                  styles.enableAndDisablePressableText,
                  props.goalsAchievementButton === 'enable'
                    ? tw`text-white`
                    : tw`text-gray-200`,
                ]}>
                enable
              </Text>
            </Pressable>

            <Pressable
              onPress={() => props.setGoalsAchievementButton('disable')}
              style={({pressed}) => [
                styles.disablePressable,
                props.goalsAchievementButton === 'disable'
                  ? tw`bg-green-600`
                  : tw`bg-white`,
              ]}>
              <Text
                style={[
                  styles.enableAndDisablePressableText,
                  props.goalsAchievementButton === 'disable'
                    ? tw`text-white`
                    : tw`text-gray-200`,
                ]}>
                disable
              </Text>
            </Pressable>
          </View>
        </View>
        {goalsAchievementEnableSection({...props})}
      </View>
    );
  }
};

const goalsAchievementEnableSection = props => {
  if (props.goalsAchievementButton === 'enable') {
    return (
      <View>
        <View style={styles.textInputContainer}>
          <FloatingLabelInput
            label="How many goals to set?"
            // value={phone}
            staticLabel
            keyboardType="number-pad"
            placeholder="1"
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

        <View style={[styles.textInputContainer, styles.marginTop]}>
          <FloatingLabelInput
            label="Short Description"
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

        <Text style={[styles.commentsText, styles.shortDesc, tw`mt-0`]}>
          S.M.A.R.T GOAL EXECUTION
        </Text>

        <View style={styles.textInputContainer}>
          <Text style={styles.beginText}>Include Employee's comment?</Text>
          <View style={[styles.nameTextInput, styles.justify]}>
            <Picker
              mode="dropdown"
              selectedValue={props.terminationReasonActiveOrNotAction}
              onValueChange={(itemValue, itemIndex) =>
                props.setTerminationReasonActiveOrNotAction(itemValue)
              }>
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
            </Picker>
          </View>
        </View>

        <View style={[styles.textInputContainer, styles.marginTopZero]}>
          <Text style={styles.beginText}>Include Manager's comment?</Text>
          <View style={[styles.nameTextInput, styles.justify]}>
            <Picker
              mode="dropdown"
              selectedValue={props.terminationReasonActiveOrNotAction}
              onValueChange={(itemValue, itemIndex) =>
                props.setTerminationReasonActiveOrNotAction(itemValue)
              }>
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
            </Picker>
          </View>
        </View>

        <View style={[styles.textInputContainer, styles.marginTop]}>
          <FloatingLabelInput
            label="Short Description"
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

        <Text style={[styles.commentsText, styles.shortDesc, tw`mt-0`]}>
          S.M.A.R.T GOAL PLANNING
        </Text>

        <View style={styles.textInputContainer}>
          <Text style={styles.beginText}>Include Employee's comment?</Text>
          <View style={[styles.nameTextInput, styles.justify]}>
            <Picker
              mode="dropdown"
              selectedValue={props.terminationReasonActiveOrNotAction}
              onValueChange={(itemValue, itemIndex) =>
                props.setTerminationReasonActiveOrNotAction(itemValue)
              }>
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
            </Picker>
          </View>
        </View>

        <View style={[styles.textInputContainer, styles.marginTopZero]}>
          <Text style={styles.beginText}>Include Manager's comment?</Text>
          <View style={[styles.nameTextInput, styles.justify]}>
            <Picker
              mode="dropdown"
              selectedValue={props.terminationReasonActiveOrNotAction}
              onValueChange={(itemValue, itemIndex) =>
                props.setTerminationReasonActiveOrNotAction(itemValue)
              }>
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
            </Picker>
          </View>
        </View>

        <View style={[styles.textInputContainer, styles.marginTop]}>
          <FloatingLabelInput
            label="Short Description"
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
            <View style={[styles.headingContainer, styles.marginTop]}>
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
