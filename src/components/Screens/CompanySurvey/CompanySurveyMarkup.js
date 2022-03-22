import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  ImageBackground,
  Image,
} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import tw from 'tailwind-react-native-classnames';
import Toggle from 'react-native-toggle-element';
import CheckIcon from 'react-native-vector-icons/FontAwesome5';
import ImageIcon from 'react-native-vector-icons/FontAwesome5';
import LinesIcon from 'react-native-vector-icons/FontAwesome5';
import CheckCircleIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';

import Header from '../Header/Header';
import styles from './styles';

const generalTabSection = props => {
  if (props.showTab === 'general') {
    return (
      <View style={styles.marginTop}>
        <View style={styles.wouldLikeTextContainer}>
          <Text style={styles.wouldLikeText}>
            Would you like to enable Survey Module?
          </Text>
        </View>

        <View style={styles.engagingTextContainer}>
          <Text style={styles.engagingText}>
            * With Survey Module you will be able to collect data from your team
            and use it to improve various processes in Company life
          </Text>
        </View>

        <View>
          <Toggle
            value={props.enableSurveyModule}
            onPress={newState => props.setEnableSurveyModule(newState)}
            leftTitle={props.enableSurveyModule && 'Enable'}
            rightTitle={!props.enableSurveyModule && 'Disable'}
            thumbStyle={[
              styles.thumbStyle,
              props.enableSurveyModule ? tw`ml-2` : tw`ml-0.5`,
            ]}
            trackBarStyle={[
              styles.trackBarStyle,
              props.enableSurveyModule ? tw`bg-green-600` : tw`bg-gray-400`,
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

        <View style={styles.wouldLikeTextContainer}>
          <Text style={styles.wouldLikeText}>Allow to change responses</Text>
        </View>

        <View style={styles.engagingTextContainer}>
          <Text style={styles.engagingText}>
            * You can allow or disallow employee to change their responses
          </Text>
        </View>

        <View>
          <Toggle
            value={props.enableSurveyModule}
            onPress={newState => props.setEnableSurveyModule(newState)}
            leftTitle={props.enableSurveyModule && 'Enable'}
            rightTitle={!props.enableSurveyModule && 'Disable'}
            thumbStyle={[
              styles.thumbStyle,
              props.enableSurveyModule ? tw`ml-2` : tw`ml-0.5`,
            ]}
            trackBarStyle={[
              styles.trackBarStyle,
              props.enableSurveyModule ? tw`bg-green-600` : tw`bg-gray-400`,
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
      </View>
    );
  }
};

const emailNotificationTabSection = props => {
  if (props.showTab === 'email-notification') {
    return (
      <View style={styles.marginTop}>
        <View
          style={[
            styles.headingContainer,
            styles.itemCenter,
            styles.marginTop,
            styles.marginLeft,
          ]}>
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

        <View
          style={[
            styles.headingContainer,
            styles.itemCenter,
            styles.marginTop,
            styles.marginLeft,
          ]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'green', false: 'gray'}}
            value={props.additionalOption}
            onValueChange={newValue => props.setAdditionalOption(newValue)}
          />
          <Text style={styles.allowText}>send final reminder</Text>
        </View>
        <View style={styles.marginLeftTen}>
          <Text style={styles.engagingText}>
            * With Survey Module you will be able to collect data from your team
            and use it to improve various processes in Company life
          </Text>
        </View>

        <View
          style={[
            styles.headingContainer,
            styles.itemCenter,
            styles.marginTop,
            styles.marginLeft,
          ]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'green', false: 'gray'}}
            value={props.additionalOption}
            onValueChange={newValue => props.setAdditionalOption(newValue)}
          />
          <Text style={[styles.allowText, styles.marginTop]}>
            Send Remind to participant before due date
          </Text>
        </View>
        <View style={styles.marginLeftTen}>
          <Text style={styles.engagingText}>
            Participants that already respond will not give this email.
          </Text>
        </View>

        <View
          style={[
            styles.headingContainer,
            styles.itemCenter,
            styles.marginTop,
            styles.marginLeft,
          ]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'green', false: 'gray'}}
            value={props.additionalOption}
            onValueChange={newValue => props.setAdditionalOption(newValue)}
          />
          <Text style={styles.allowText}>
            Send email when survey has close.
          </Text>
        </View>
      </View>
    );
  }
};

const designTabSection = props => {
  if (props.showTab === 'design') {
    return (
      <View>
        <View>
          <Text style={styles.logoText}>logo</Text>

          <Pressable
            style={styles.logoCardPressable}
            onPress={() => props.uploadLogoImage()}>
            <ImageIcon name="images" size={70} style={tw`text-gray-300`} />
            <Text style={styles.dragAFileText}>drag a file here</Text>

            <Text style={styles.orText}>- or-</Text>

            <View style={styles.selectAFileTextContainer}>
              <Text style={styles.selectAFileText}>
                Select a file from your computer
              </Text>
            </View>
          </Pressable>

          <View style={styles.removeLogoPressableContainer}>
            <Pressable
              style={() => [styles.removeLogoPressable]}
              android_ripple={{color: '#fff'}}
              onPress={() => props.removeLogoImage()}>
              <Text style={styles.savePressableText}>remove logo</Text>
            </Pressable>
          </View>
        </View>

        <View>
          <Text style={[styles.logoText, styles.imageBack]}>
            background image
          </Text>

          <Pressable
            style={styles.logoCardPressable}
            onPress={() => props.uploadBackgroundImage()}>
            <ImageIcon name="images" size={70} style={tw`text-gray-300`} />
            <Text style={styles.dragAFileText}>drag a file here</Text>

            <Text style={styles.orText}>- or-</Text>

            <View style={styles.selectAFileTextContainer}>
              <Text style={styles.selectAFileText}>
                Select a file from your computer
              </Text>
            </View>
          </Pressable>

          <View style={styles.removeLogoPressableContainer}>
            <Pressable
              style={() => [styles.removeBackPressable]}
              android_ripple={{color: '#fff'}}
              onPress={() => props.removeBackgroundImage()}>
              <Text style={styles.savePressableText}>remove background</Text>
            </Pressable>
          </View>
        </View>

        <View style={[styles.line, styles.marginTop]} />

        <View
          style={[
            styles.headingContainer,
            styles.itemCenter,
            styles.marginLeft,
            styles.marginTop,
          ]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'green', false: 'gray'}}
            value={props.additionalOption}
            onValueChange={newValue => props.setAdditionalOption(newValue)}
          />
          <Text style={styles.allowText}>Allow full screen</Text>
        </View>

        <View
          style={[
            styles.headingContainer,
            styles.itemCenter,
            styles.marginLeft,
            styles.marginTop,
          ]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'green', false: 'gray'}}
            value={props.additionalOption}
            onValueChange={newValue => props.setAdditionalOption(newValue)}
          />
          <Text style={styles.allowText}>one question per page</Text>
        </View>

        <View
          style={[
            styles.headingContainer,
            styles.itemCenter,
            styles.marginLeft,
            styles.marginTop,
          ]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'green', false: 'gray'}}
            value={props.additionalOption}
            onValueChange={newValue => props.setAdditionalOption(newValue)}
          />
          <Text style={styles.allowText}>allow pagination</Text>
        </View>

        <View style={[styles.line, styles.marginTop]} />

        <Text style={styles.logoText}>perview</Text>
        <View style={styles.iconsContainer}>
          <ImageBackground
            source={{uri: props?.saveBackgroundImage?.uri}}
            style={tw`w-full h-full items-center`}>
            <Image
              source={{uri: props?.saveLogoImage?.uri}}
              style={props?.saveLogoImage?.uri && tw`w-11/12 h-80 mt-5`}
            />
            <View style={styles.headingContainer}>
              <CheckCircleIcon
                name="check-circle"
                size={25}
                style={styles.checkIcon}
              />
              <LinesIcon name="grip-lines" size={70} style={styles.lineIcon} />
            </View>

            <View style={styles.headingContainer}>
              <CheckCircleIcon
                name="check-circle"
                size={25}
                style={styles.checkIcon}
              />
              <LinesIcon name="grip-lines" size={70} style={styles.lineIcon} />
            </View>

            <View style={styles.headingContainer}>
              <CheckCircleIcon
                name="check-circle"
                size={25}
                style={styles.checkIcon}
              />
              <LinesIcon name="grip-lines" size={70} style={styles.lineIcon} />
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
};

const CompanySurveyMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>surveys</Text>
          <View style={[styles.headingContainer, styles.marginTop]}>
            <HomeIcon name="home" size={15} color="green" />
            <Text style={styles.slash}>/</Text>
            <Text style={styles.headingText}>settings</Text>
            <Text style={styles.slash}>/</Text>
            <Text style={styles.headingText}>surveys</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.headingContainer}>
            <Pressable
              style={[
                styles.tabsPressable,
                props.showTab === 'general' ? tw`bg-white` : tw`bg-gray-50`,
              ]}
              onPress={() => props.setShowTab('general')}>
              <Text style={styles.tabsText}>general</Text>
              <View
                style={[
                  styles.tabLine,
                  props.showTab === 'general'
                    ? tw`bg-green-700`
                    : tw`bg-gray-50`,
                ]}
              />
            </Pressable>

            {props.enableSurveyModule && (
              <>
                <Pressable
                  style={[
                    styles.tabsPressable,
                    props.showTab === 'email-notification'
                      ? tw`bg-white`
                      : tw`bg-gray-50`,
                  ]}
                  onPress={() => props.setShowTab('email-notification')}>
                  <Text style={styles.tabsText}>email notification</Text>
                  <View
                    style={[
                      styles.tabLine,
                      props.showTab === 'email-notification'
                        ? tw`bg-green-700`
                        : tw`bg-gray-50`,
                    ]}
                  />
                </Pressable>
                <Pressable
                  style={[
                    styles.tabsPressable,
                    props.showTab === 'design' ? tw`bg-white` : tw`bg-gray-50`,
                  ]}
                  onPress={() => props.setShowTab('design')}>
                  <Text style={styles.tabsText}>design</Text>
                  <View
                    style={[
                      styles.tabLine,
                      props.showTab === 'design'
                        ? tw`bg-green-700`
                        : tw`bg-gray-50`,
                    ]}
                  />
                </Pressable>
              </>
            )}
          </View>
          {generalTabSection({...props})}
          {emailNotificationTabSection({...props})}
          {designTabSection({...props})}

          <View style={styles.savePressableContainer}>
            <Pressable style={() => [styles.savePressable]}>
              <Text style={styles.savePressableText}>save settings</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CompanySurveyMarkup;
