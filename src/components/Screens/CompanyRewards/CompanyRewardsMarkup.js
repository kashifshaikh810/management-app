import React from 'react';
import {View, Text, ScrollView, Pressable, TextInput} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import CheckIcon from 'react-native-vector-icons/FontAwesome5';
import tw from 'tailwind-react-native-classnames';
import Toggle from 'react-native-toggle-element';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-picker/picker';

import Header from '../Header/Header';
import styles from './styles';

const generalTabSection = props => {
  if (props.showTab === 'general') {
    return (
      <View>
        <View style={styles.wouldLikeTextContainer}>
          <Text style={styles.wouldLikeText}>
            Would you like to enable Rewards Module?
          </Text>
        </View>

        <View style={styles.engagingTextContainer}>
          <Text style={styles.engagingText}>
            * Engaging everyone across your teams, departments, and locations
            with social recognition, Rewards Module helps people understand what
            it means to embody your company core values and how contributions of
            all kinds support your mission.
          </Text>
        </View>

        <View>
          <Toggle
            value={props.wouldYouLikeButton}
            onPress={newState => props.setWouldYouLikeButton(newState)}
            leftTitle={props.wouldYouLikeButton && 'Enable'}
            rightTitle={!props.wouldYouLikeButton && 'Disable'}
            thumbStyle={[
              styles.thumbStyle,
              props.wouldYouLikeButton ? tw`ml-2` : tw`ml-0.5`,
            ]}
            trackBarStyle={[
              styles.trackBarStyle,
              props.wouldYouLikeButton ? tw`bg-green-600` : tw`bg-gray-400`,
            ]}
            thumbInActiveComponent={
              <View style={styles.checkIconContainer}>
                <CheckIcon name="check" size={25} style={tw`text-gray-400`} />
              </View>
            }
            thumbActiveComponent={
              <View style={styles.checkIconContainer}>
                <CheckIcon name="check" size={25} style={tw`text-green-600`} />
              </View>
            }
          />
        </View>

        {generalTabEnableSection({...props})}
      </View>
    );
  }
};

const generalTabEnableSection = props => {
  if (props.wouldYouLikeButton) {
    return (
      <>
        <View style={styles.currencyInputContainer}>
          <Text style={styles.currencyLabelText}>
            currency label <Text style={styles.star}>*</Text>
          </Text>
          <View style={styles.currencyInput}>
            <TextInput />
          </View>
        </View>

        <View style={styles.currencyInputContainer}>
          <Text style={styles.currencyLabelText}>
            default reviewer <Text style={styles.star}>*</Text>
          </Text>
          <View style={styles.companyInput}>
            <TextInput />
          </View>
          <Text style={styles.hashTagText}>One hashtag per line.</Text>
        </View>

        <View style={styles.additionalContainer}>
          <Text style={styles.additionalText}>Additional Options</Text>

          <View style={[styles.headingContainer, styles.itemCenter]}>
            <CheckBox
              disabled={false}
              style={{
                transform: [{scaleX: 0.8}, {scaleY: 0.8}],
              }}
              tintColors={{true: 'green', false: 'gray'}}
              value={props.additionalOption}
              onValueChange={newValue => props.setAdditionalOption(newValue)}
            />
            <Text style={styles.allowText}>Allow Using Core Values</Text>
          </View>

          {props.additionalOption ? (
            <View style={[styles.headingContainer, styles.helloContainer]}>
              <View style={styles.rounded} />
              <Text style={styles.helloText}>#hello</Text>
            </View>
          ) : (
            <View style={styles.marginBottomFour} />
          )}
        </View>

        <View style={styles.line} />

        <View style={[styles.wouldLikeTextContainer]}>
          <Text style={styles.wouldLikeText}>
            Send rewards notification to Slack Channel?
          </Text>
          <View>
            <Toggle
              value={props.sendRewardsNotificationButton}
              onPress={newState =>
                props.setSendRewardsNotificationButton(newState)
              }
              leftTitle={props.sendRewardsNotificationButton && 'Enable'}
              rightTitle={!props.sendRewardsNotificationButton && 'Disable'}
              thumbStyle={[
                styles.thumbStyle,
                props.sendRewardsNotificationButton ? tw`ml-2` : tw`ml-0.5`,
              ]}
              trackBarStyle={[
                styles.trackBarStyle,
                styles.marginLeftZero,
                props.sendRewardsNotificationButton
                  ? tw`bg-green-600`
                  : tw`bg-gray-400`,
              ]}
              thumbInActiveComponent={
                <View style={styles.checkIconContainer}>
                  <CheckIcon name="check" size={25} style={tw`text-gray-400`} />
                </View>
              }
              thumbActiveComponent={
                <View style={styles.checkIconContainer}>
                  <CheckIcon
                    name="check"
                    size={25}
                    style={tw`text-green-600`}
                  />
                </View>
              }
            />
          </View>
        </View>

        <View style={styles.line} />

        <View style={[styles.currencyInputContainer, styles.marginTop]}>
          <Text style={styles.customRewardsText}>Custom rewards</Text>

          <View style={styles.marginTop}>
            <Text style={styles.currencyLabelText}>
              default reviewer <Text style={styles.star}>*</Text>
            </Text>
            <View style={[styles.textInput, styles.pickerContainer]}>
              <Picker
                mode="dropdown"
                selectedValue={props.terminationReasonActiveOrNotAction}
                onValueChange={(itemValue, itemIndex) =>
                  props.setTerminationReasonActiveOrNotAction(itemValue)
                }>
                <Picker.Item
                  label="your all employees from database"
                  value="your all employees from database"
                />
              </Picker>
            </View>
          </View>
        </View>

        <View style={styles.line} />

        <View style={[styles.currencyInputContainer, styles.marginTop]}>
          <Text style={styles.customRewardsText}>Awards</Text>

          <View style={styles.marginTop}>
            <Text style={styles.currencyLabelText}>
              default reviewer <Text style={styles.star}>*</Text>
            </Text>
            <View style={[styles.textInput, styles.pickerContainer]}>
              <Picker
                mode="dropdown"
                selectedValue={props.terminationReasonActiveOrNotAction}
                onValueChange={(itemValue, itemIndex) =>
                  props.setTerminationReasonActiveOrNotAction(itemValue)
                }>
                <Picker.Item
                  label="your all employees from database"
                  value="your all employees from database"
                />
              </Picker>
            </View>
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.savePressableContainer}>
          <Pressable style={() => [styles.savePressable]}>
            <Text style={styles.savePressableText}>save settings</Text>
          </Pressable>
        </View>
      </>
    );
  }
};

const CompanyRewardsMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.text}>rewards</Text>
            <View style={[styles.headingContainer, styles.marginTop]}>
              <HomeIcon name="home" size={15} color="green" />
              <Text style={styles.slash}>/</Text>
              <Text style={styles.headingText}>settings</Text>
              <Text style={styles.slash}>/</Text>
              <Text style={styles.headingText}>rewards</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.headingContainer}>
            <Pressable
              style={[
                props.showTab == 'general' ? tw`bg-gray-200` : tw`bg-white`,
                styles.tabsPressable,
              ]}
              onPress={() => props.setShowTab('general')}>
              <Text
                style={[
                  styles.tabsText,
                  props.showTab === 'general'
                    ? tw`text-gray-500`
                    : tw`text-gray-600`,
                ]}>
                general
              </Text>
            </Pressable>

            {props.wouldYouLikeButton && (
              <Pressable
                style={[
                  props.showTab == 'simple-earning'
                    ? tw`bg-gray-200`
                    : tw`bg-white`,
                  styles.tabsPressable,
                  tw`ml-4`,
                ]}
                onPress={() => props.setShowTab('simple-earning')}>
                <Text
                  style={[
                    styles.tabsText,
                    props.showTab === 'simple-earning'
                      ? tw`text-gray-500`
                      : tw`text-gray-600`,
                  ]}>
                  simple earning rule
                </Text>
              </Pressable>
            )}
          </View>

          {props.wouldYouLikeButton && (
            <>
              <View style={styles.headingContainer}>
                <Pressable
                  style={[
                    props.showTab === 'custom-rewards'
                      ? tw`bg-gray-200`
                      : tw`bg-white`,
                    styles.tabsPressable,
                  ]}
                  onPress={() => props.setShowTab('custom-rewards')}>
                  <Text
                    style={[
                      styles.tabsText,
                      props.showTab === 'custom-rewards'
                        ? tw`text-gray-500`
                        : tw`text-gray-600`,
                    ]}>
                    custom rewards
                  </Text>
                </Pressable>

                <Pressable
                  style={[
                    props.showTab === 'shared-points'
                      ? tw`bg-gray-200`
                      : tw`bg-white`,
                    styles.tabsPressable,
                    tw`ml-4`,
                  ]}
                  onPress={() => props.setShowTab('shared-points')}>
                  <Text
                    style={[
                      styles.tabsText,
                      props.showTab === 'shared-points'
                        ? tw`text-gray-500`
                        : tw`text-gray-600`,
                    ]}>
                    shared points
                  </Text>
                </Pressable>
              </View>
              <View style={styles.headingContainer}>
                <Pressable
                  style={[
                    props.showTab === 'awards' ? tw`bg-gray-200` : tw`bg-white`,
                    styles.tabsPressable,
                  ]}
                  onPress={() => props.setShowTab('awards')}>
                  <Text
                    style={[
                      styles.tabsText,
                      props.showTab == 'awards'
                        ? tw`text-gray-500`
                        : tw`text-gray-600`,
                    ]}>
                    awards
                  </Text>
                </Pressable>
              </View>
            </>
          )}

          <View style={styles.line} />

          {generalTabSection({...props})}
        </View>
      </ScrollView>
    </View>
  );
};

export default CompanyRewardsMarkup;
