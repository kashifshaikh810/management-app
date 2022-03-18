import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  Switch,
} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import CheckIcon from 'react-native-vector-icons/FontAwesome5';
import tw from 'tailwind-react-native-classnames';
import Toggle from 'react-native-toggle-element';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-picker/picker';
import ArrowDropIcon from 'react-native-vector-icons/MaterialIcons';
import ArrowDownIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ArrowRightIcon from 'react-native-vector-icons/MaterialIcons';
import LikeStarIcon from 'react-native-vector-icons/FontAwesome5';

import Header from '../Header/Header';
import styles from './styles';
import CreateNewRewardModal from './Modal/CreateNewRewardModal/CreateNewRewardModal';

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
      </>
    );
  }
};

const simpleEarningTabSection = props => {
  if (props.showTab === 'simple-earning') {
    return (
      <View>
        <View style={styles.wouldLikeTextContainer}>
          <Text style={styles.wouldLikeText}>
            Would you like to enable Registration Rewards?
          </Text>
        </View>

        <View style={styles.engagingTextContainer}>
          <Text style={styles.engagingText}>
            * The user will be rewarded with points when logged in to the
            platform for the first time.
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

        <View style={styles.currencyInputContainer}>
          <Text style={styles.currencyLabelText}>
            points rewarded <Text style={styles.star}>*</Text>
          </Text>
          <View style={[styles.pointsInput, styles.headingContainer]}>
            <TextInput
              keyboardType="number-pad"
              value={props?.pointsRewardedInput?.toString()}
              onChangeText={num => props.setPointsRewardedInput(num)}
            />
            <View style={styles.dropIconsContainer}>
              <Pressable
                onPress={() =>
                  props.setPointsRewarded(++props.pointsRewardedInput)
                }
                style={({pressed}) => [
                  pressed ? tw`bg-gray-300` : tw`bg-white`,
                ]}>
                <ArrowDropIcon name="arrow-drop-up" size={20} />
              </Pressable>
              <Pressable
                onPress={() =>
                  props.setPointsRewarded(--props.pointsRewardedInput)
                }
                style={({pressed}) => [
                  pressed ? tw`bg-gray-300` : tw`bg-white`,
                ]}>
                <ArrowDropIcon name="arrow-drop-down" size={20} />
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.wouldLikeTextContainer}>
          <Text style={styles.wouldLikeText}>
            Would you like to enable Birthday Rewards?
          </Text>
        </View>

        <View style={styles.engagingTextContainer}>
          <Text style={styles.engagingText}>
            * The user will be rewarded with points on his/her birthday! Hurray!
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

        <View style={styles.line} />

        <View style={styles.wouldLikeTextContainer}>
          <Text style={styles.wouldLikeText}>
            Would you like to enable Anniversary Rewards?
          </Text>
        </View>

        <View style={styles.engagingTextContainer}>
          <Text style={styles.engagingText}>
            * The user will be rewarded with points on his/her work anniversary.
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

        <View style={styles.line} />
      </View>
    );
  }
};

const refineRewardsTextInputSection = props => {
  if (props.showInputSection) {
    return (
      <View>
        <View style={[styles.currencyInputContainer, styles.marginTop]}>
          <Text style={styles.currencyLabelText}>reward title</Text>
          <View style={styles.currencyInput}>
            <TextInput />
          </View>
        </View>

        <View style={[styles.currencyInputContainer]}>
          <Text style={styles.currencyLabelText}>points</Text>
          <View style={styles.currencyInput}>
            <TextInput keyboardType="number-pad" />
          </View>
        </View>

        <View style={[styles.currencyInputContainer]}>
          <Text style={styles.currencyLabelText}>status</Text>
          <View style={styles.currencyInput}>
            <TextInput />
          </View>
        </View>

        <View style={[styles.headingContainer, styles.selfEnd]}>
          <Pressable
            android_ripple={{color: '#f1f1f1'}}
            style={() => [styles.clearPressable]}>
            <Text style={styles.clearPressableText}>clear</Text>
          </Pressable>

          <Pressable
            android_ripple={{color: '#f3f3f3'}}
            style={() => [
              styles.savePressable,
              styles.marginLeft,
              styles.searchPressable,
            ]}>
            <Text style={styles.savePressableText}>search</Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

const customRewardsTabSection = props => {
  if (props.showTab === 'custom-rewards') {
    return (
      <View>
        <View style={styles.savePressableContainer}>
          <Pressable
            onPress={() => props.setShowCreateNewRewardModal(true)}
            android_ripple={{color: '#f3f3f3'}}
            style={() => [styles.addNewRewardPressable]}>
            <Text style={styles.savePressableText}>add new reward</Text>
          </Pressable>
        </View>

        <Pressable
          style={[styles.headingContainer, styles.marginLeft]}
          onPress={() => props.setShowInputSection(!props.showInputSection)}>
          <Text style={styles.refineText}>refine rewards list</Text>
          <ArrowDownIcon
            name={
              props.showInputSection
                ? 'arrow-up-bold-circle'
                : 'arrow-down-bold-circle'
            }
            style={styles.arrowIcon}
            size={20}
            color="#006f44"
          />
        </Pressable>

        {refineRewardsTextInputSection({...props})}

        {false && (
          <View style={styles.noRecordTextContainer}>
            <Text style={styles.noRecordText}>
              We couldn't find any records.
            </Text>
          </View>
        )}

        <View
          style={[
            styles.marginLeft,
            styles.marginRight,
            styles.marginTop,
            styles.marginBottomFour,
            styles.awardCard,
          ]}>
          <View
            style={[styles.headingContainer, styles.awardCardItemContainer]}>
            <Switch
              trackColor={{false: '#b3b3b3', true: '#f5dd4b'}}
              thumbColor={props.isEnabled ? '#fff' : '#fff'}
              // onValueChange={props.toggleSwitch}
              // value={props.isEnabled}
            />
            <Text style={styles.titleText}>aaa</Text>

            <View style={[styles.rounded, styles.marginLeft]} />

            <Text style={styles.descText}>(fouehfuoewfuwefoeo</Text>
          </View>

          <View
            style={[
              styles.headingContainer,
              styles.marginTop,
              styles.awardCardItemContainer,
            ]}>
            <ArrowRightIcon name="subdirectory-arrow-right" size={15} />
            <LikeStarIcon
              name="certificate"
              size={17}
              color="green"
              style={tw`ml-2`}
            />
            <Text style={styles.pointsNumberText}>31</Text>
            <Text style={styles.pointsText}>points)</Text>
          </View>
        </View>
      </View>
    );
  }
};

const sharedPointsTabSection = props => {
  if (props.showTab === 'shared-points') {
    return (
      <View>
        <View style={styles.wouldLikeTextContainer}>
          <Text style={styles.wouldLikeText}>
            Would you like to enable Shared Points?
          </Text>
        </View>

        <View style={styles.engagingTextContainer}>
          <Text style={styles.engagingText}>
            * Rewarding your employees is essential for keeping them engaged and
            motivated to do their best work. Let's give your employees the
            opportunity to reward each other.
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

        <View style={styles.cheerUpPressableContainer}>
          <Pressable
            style={() => [styles.cheerUpPressable]}
            android_ripple={{color: '#fff'}}>
            <Text style={styles.cheerUpPressableText}>cheer up employees</Text>
          </Pressable>
        </View>

        <View style={styles.marginLeft}>
          <Text style={styles.accrualText}>Accrual</Text>
        </View>

        <View style={styles.line} />

        <View style={[styles.marginTop, styles.marginLeft]}>
          <Text style={styles.currencyLabelText}>
            period <Text style={styles.star}>*</Text>
          </Text>
          <View style={[styles.textInput, styles.pickerContainer]}>
            <Picker
              mode="dropdown"
              selectedValue={props.terminationReasonActiveOrNotAction}
              onValueChange={(itemValue, itemIndex) =>
                props.setTerminationReasonActiveOrNotAction(itemValue)
              }>
              <Picker.Item label="" value="" />
              <Picker.Item label="Week" value="Week" />
              <Picker.Item label="Month" value="Month" />
              <Picker.Item label="Year" value="Year" />
            </Picker>
          </View>
        </View>

        <View
          style={[
            styles.currencyInputContainer,
            styles.marginTop,
            styles.marginBottomTwo,
          ]}>
          <Text style={styles.currencyLabelText}>
            amount <Text style={styles.star}>*</Text>
          </Text>
          <View style={styles.amountInput}>
            <TextInput />
          </View>
        </View>

        <View style={[styles.marginLeft, styles.marginBottomFour]}>
          <Text style={styles.currencyLabelText}>
            what to do with unused balance? <Text style={styles.star}>*</Text>
          </Text>
          <View style={[styles.textInput, styles.pickerContainer]}>
            <Picker
              mode="dropdown"
              selectedValue={props.terminationReasonActiveOrNotAction}
              onValueChange={(itemValue, itemIndex) =>
                props.setTerminationReasonActiveOrNotAction(itemValue)
              }>
              <Picker.Item label="" value="" />
              <Picker.Item label="Lose it" value="Lose it" />
              <Picker.Item
                label="Move to the next period"
                value="Move to the next period"
              />
            </Picker>
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.headingContainer}>
          <View
            style={[
              styles.headingContainer,
              styles.marginLeft,
              styles.marginTop,
              styles.table,
            ]}>
            <Text style={styles.marginLeft}>role</Text>
            <Text style={styles.marginLeft}>max points</Text>
            <Text style={styles.marginLeft}>step</Text>
          </View>
        </View>
      </View>
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
          {simpleEarningTabSection({...props})}
          {customRewardsTabSection({...props})}
          {sharedPointsTabSection({...props})}

          {props.showTab === 'general' ||
          props.showTab === 'simple-earning' ||
          props.showTab === 'shared-points' ||
          props.showTab === 'awards' ? (
            <View style={styles.savePressableContainer}>
              <Pressable style={() => [styles.savePressable]}>
                <Text style={styles.savePressableText}>save settings</Text>
              </Pressable>
            </View>
          ) : (
            []
          )}
        </View>
      </ScrollView>
      {/* add new reward modal */}
      <CreateNewRewardModal {...props} />
    </View>
  );
};

export default CompanyRewardsMarkup;
