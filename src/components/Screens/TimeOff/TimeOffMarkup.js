import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import DownloadIcon from 'react-native-vector-icons/FontAwesome';
import AccountIcon from 'react-native-vector-icons/MaterialIcons';
import ArrowDownIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import ArrowDropIcon from 'react-native-vector-icons/MaterialIcons';
import PlusIcon from 'react-native-vector-icons/Feather';

import styles from './styles';
import Header from '../Header/Header';
import TimeOffModal from './Modal/TimeOffModal';

const DateRangeSection = props => {
  if (props.showRangeSection) {
    return (
      <>
        <View style={styles.dateRange}>
          <Text style={styles.dateRangeText}>Date Range</Text>
        </View>
        <View style={styles.datePickContainer}>
          <Pressable
            style={styles.fromTextInput}
            onPress={() => props.showDatepicker()}>
            <Text
              style={[
                styles.dateRangeText,
                {
                  color: props.isFromSelected ? '#263238' : '#b3b3b3',
                },
              ]}>
              {props.isFromSelected ? props.fromSectionDate : 'From'}
            </Text>
          </Pressable>
          <Pressable
            style={styles.fromTextInput}
            onPress={() => props.toShowDatepicker()}>
            <Text
              style={[
                styles.dateRangeText,
                {
                  color: props.isToSelected ? '#263238' : '#b3b3b3',
                },
              ]}>
              {props.isToSelected ? props.toSectionDate : 'To'}
            </Text>
          </Pressable>
        </View>
        {props.show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={props.date}
            mode={props.mode}
            is24Hour={true}
            display="default"
            onChange={props.onChange}
          />
        )}
        {props.toShow && (
          <DateTimePicker
            testID="dateTimePicker"
            value={props.toDate}
            mode={props.toMode}
            is24Hour={true}
            display="default"
            onChange={props.toOnChange}
          />
        )}
        <View style={styles.createAccountButtonContainer}>
          <Pressable
            onPress={() => props.clearAllInput()}
            android_ripple={{color: '#fff'}}
            style={({pressed}) => [
              styles.clearPressable,
              {backgroundColor: pressed ? '#006f44' : '#fff'},
            ]}>
            <Text
              style={[styles.createAccountPressableText, {color: '#006f44'}]}>
              Clear
            </Text>
          </Pressable>

          <Pressable
            onPress={() => props.search()}
            android_ripple={{color: '#fff'}}
            style={({pressed}) => [
              styles.createAccountPressable,
              {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
            ]}>
            {false ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.createAccountPressableText}>Search</Text>
            )}
          </Pressable>
        </View>
      </>
    );
  }
};

const TimeOffMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />

      <TimeOffModal {...props} />

      <ScrollView style={styles.scrollView}>
        <View style={styles.headingContiner}>
          <Text style={styles.heading}>time off requests</Text>

          <View style={styles.addNewReqPressable}>
            <Pressable
              onPress={() => props.setShowAddNewReqModal(true)}
              android_ripple={{color: '#fff'}}
              style={({pressed}) => [
                styles.addNewReq,
                {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
              ]}>
              <PlusIcon name="plus" size={20} color="#fff" />
              <Text style={styles.createAccountPressableText}>
                Add New Request
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.componentHeadingContainer}>
          <HomeIcon name="home" size={15} color="green" />
          <Text style={styles.headingTextSlash}> /</Text>
          <Text style={styles.headingText}>Time Off</Text>
        </View>

        <View style={styles.whoIsOutcard}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>who is out</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.cardContent}>
            <View style={styles.cardItems}>
              <AccountIcon name="account-circle" size={18} color="green" />
            </View>
            <View style={styles.cardItems}>
              <Text style={styles.fullName}>Ahmed Khan</Text>
            </View>
            <View style={styles.cardItems}>
              <Text style={styles.text}>is out today</Text>
            </View>
            <View style={styles.cardItems}>
              <Text style={styles.text}>(Holiday)</Text>
            </View>
          </View>
        </View>

        <View style={styles.upcomingCard}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>
              upcomping company holidays
            </Text>
          </View>
          <View style={styles.line} />

          <View style={styles.noRecordContainer}>
            <View style={styles.noRecordBackground}>
              <Text style={styles.noRecord}>We couldn't find any records.</Text>
            </View>
          </View>
        </View>

        <View style={styles.upcomingTimeOffCard}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>my upcomping time off</Text>
          </View>
          <View style={styles.line} />

          <View style={styles.noRecordContainer}>
            <View style={styles.noRecordBackground}>
              <Text style={styles.noRecord}>We couldn't find any records.</Text>
            </View>
          </View>
        </View>

        <View
          style={[
            styles.requestsCard,
            {
              height: props.showRangeSection
                ? Dimensions.get('window').height / 1.5
                : Dimensions.get('window').height / 2.3,
            },
          ]}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>requests</Text>
          </View>
          <View style={styles.line} />

          <View style={styles.refineTimeOff}>
            <Text style={styles.search}>refine time off requests</Text>

            <View style={styles.pressableContainer}>
              <Pressable
                onPress={() =>
                  props.setShowRangeSection(!props.showRangeSection)
                }
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? '#b3b3b3' : '#fff',
                    borderRadius: 10,
                  },
                ]}>
                <ArrowDownIcon
                  name={
                    props.showRangeSection
                      ? 'arrow-up-bold-circle'
                      : 'arrow-down-bold-circle'
                  }
                  size={20}
                  color="#006f44"
                />
              </Pressable>
            </View>
          </View>

          <View style={styles.requestContainer}>
            <View>
              {DateRangeSection(props)}

              <View style={styles.reqAndFromToContainer}>
                <View style={styles.reqTypeContainer}>
                  <View style={styles.reqTypeAndIconContainer}>
                    <View>
                      <ArrowDropIcon
                        name="arrow-drop-up"
                        size={20}
                        style={styles.dropIcon}
                      />
                      <ArrowDropIcon
                        name="arrow-drop-down"
                        size={20}
                        color="#263238"
                      />
                    </View>
                    <Text style={styles.typesHeading}>Request type</Text>
                  </View>

                  <View style={styles.headingTextContainer}>
                    <Text style={styles.itemHeading}>Holiday</Text>
                  </View>
                </View>

                <View style={styles.reqTypeContainer}>
                  <View>
                    <View style={styles.reqTypeAndIconContainer}>
                      <View>
                        <ArrowDropIcon
                          name="arrow-drop-up"
                          size={20}
                          style={styles.dropIcon}
                        />
                        <ArrowDropIcon
                          name="arrow-drop-down"
                          size={20}
                          color="#263238"
                        />
                      </View>
                      <Text style={styles.typesHeading}>From/To</Text>
                    </View>

                    <View style={styles.headingTextContainer}>
                      <Text style={styles.itemHeading}>
                        from Date - to Date
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.hoursContainer}>
                <View style={styles.reqTypeContainer}>
                  <View>
                    <View style={styles.reqTypeAndIconContainer}>
                      <View>
                        <ArrowDropIcon
                          name="arrow-drop-up"
                          size={20}
                          style={styles.dropIcon}
                        />
                        <ArrowDropIcon
                          name="arrow-drop-down"
                          size={20}
                          color="#263238"
                        />
                      </View>
                      <Text style={styles.typesHeading}>Hours</Text>
                    </View>

                    <View style={styles.headingTextContainer}>
                      <Text style={styles.itemHeading}>num of hours</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.reqTypeContainer}>
                  <View>
                    <View style={styles.reqTypeAndIconContainer}>
                      <View>
                        <ArrowDropIcon
                          name="arrow-drop-up"
                          size={20}
                          style={styles.dropIcon}
                        />
                        <ArrowDropIcon
                          name="arrow-drop-down"
                          size={20}
                          color="#263238"
                        />
                      </View>
                      <Text style={styles.typesHeading}>Status</Text>
                    </View>

                    <View style={styles.headingTextContainer}>
                      <View style={styles.approvedContainer}>
                        <Text style={styles.approved}>approved</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.reqTypeContainer}>
                <View>
                  <View style={styles.reqTypeAndIconContainer}>
                    <View>
                      <ArrowDropIcon
                        name="arrow-drop-up"
                        size={20}
                        style={styles.dropIcon}
                      />
                      <ArrowDropIcon
                        name="arrow-drop-down"
                        size={20}
                        color="#263238"
                      />
                    </View>
                    <Text style={styles.typesHeading}>Actions</Text>
                  </View>

                  <View style={styles.downloadContainer}>
                    <DownloadIcon
                      name="download"
                      size={15}
                      color="#b3b3b3"
                      style={styles.icon}
                    />
                    <Text style={styles.download}>Download</Text>
                  </View>
                  <Pressable
                    onPress={() => {}}
                    android_ripple={{color: '#fff'}}
                    style={({pressed}) => [
                      styles.actionPressable,
                      {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
                    ]}>
                    {false ? (
                      <ActivityIndicator color="#fff" />
                    ) : (
                      <View style={styles.actionContainer}>
                        <ArrowDownIcon
                          name="arrow-left-drop-circle-outline"
                          size={15}
                          color="#fff"
                          style={styles.icon}
                        />
                        <Text style={styles.actionText}>Action</Text>
                      </View>
                    )}
                  </Pressable>
                </View>
              </View>

              {/* end? */}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TimeOffMarkup;
