import React from 'react';
import {
  View,
  Text,
  Modal,
  StatusBar,
  Pressable,
  ScrollView,
} from 'react-native';
import CloseIcon from 'react-native-vector-icons/FontAwesome';
import tw from 'tailwind-react-native-classnames';

import styles from './styles';
import CheckBox from '@react-native-community/checkbox';

const settingsSection = props => {
  if (props?.showSettingsSectionModal?.type === 'settings') {
    return (
      <View style={styles.sectionContainer}>
        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>company account</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>portal settings</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>employees</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>holidays</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>time off/holidays</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>performance review</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>rewards</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>survey</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>custom fields</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>permissions</Text>
        </View>
      </View>
    );
  }
};

const onboardingOffBoardingSection = props => {
  if (
    props?.showOnboardingOffBoardingSectionModal?.type ===
    'on boarding/off boarding'
  ) {
    return (
      <View style={styles.sectionContainer}>
        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>view my tasks</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>view all tasks</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>manage tasks</Text>
        </View>
      </View>
    );
  }
};

const performanceReviewSection = props => {
  if (props.showPerformanceReviewSectionModal.type === 'Performance Review') {
    return (
      <View style={styles.sectionContainer}>
        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>manage reviewers</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>manage ALL performance reviews</Text>
        </View>
      </View>
    );
  }
};

const rewardsSection = props => {
  if (props.showRewardsSectionModal.type === 'Rewards') {
    return (
      <View style={styles.sectionContainer}>
        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>manage requests</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>view ALL requests</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>view rewards history</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>view employee's balance</Text>
        </View>
      </View>
    );
  }
};

const newsSection = props => {
  if (props?.showNewsSectionModal?.type === 'News') {
    return (
      <View style={styles.sectionContainer}>
        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>manage news</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>delete news</Text>
        </View>
      </View>
    );
  }
};

const dashboardWidgetsSection = props => {
  if (props?.showDashboardWidgetsSectionModal?.type === 'Dashboard Widgets') {
    return (
      <View style={styles.sectionContainer}>
        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>who is out?</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>my upcoming time off</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>upcoming company holidays</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>upcoming reviews</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>goals</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>total employees</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>gender</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>office</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>department</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>employee age</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>headcounts</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>hire vs left</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>time off details</Text>
        </View>
      </View>
    );
  }
};

const employeeSection = props => {
  if (props?.showEmployeeSectionModal?.type === 'Employee') {
    return (
      <View style={styles.sectionContainer}>
        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>manage employee</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>view employee(s)</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>invite</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>terminate</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>view contacts</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>view children</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>view documents</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>manage documents</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>manage notes</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>view equipment</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>view my equipment</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>manage equipment</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>allow request equipment</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>view direct reports</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>view email</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>view DOB</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>view phone number</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>view licenses or certification</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>manage licenses or certification</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>view former employees</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>time off information</Text>
        </View>
      </View>
    );
  }
};

const timeOffSection = props => {
  if (props?.showTimeOffSectionModal?.type === 'Time Off') {
    return (
      <View style={styles.sectionContainer}>
        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>full manage</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>create/update request</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>approve/decline</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>cancel</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>manage allowed time</Text>
        </View>
      </View>
    );
  }
};

const reportsSection = props => {
  if (props?.showReportsSectionModal?.type === 'Reports') {
    return (
      <View style={styles.sectionContainer}>
        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>time off schedule</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>time off balance</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>office location</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>employee gender</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>employee age</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>holiday list</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>birthday list</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>departments</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>children</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>time off by employee</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>headcounts</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>employee: hire vs. left</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>duration of work</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>employee turnover</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>employee equipment and licenses</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>employee level</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>licenses & certifications</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>termination reason report</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>termination type report</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>performance goals</Text>
        </View>
      </View>
    );
  }
};

const toolsSection = props => {
  if (props?.showToolsSectionModal?.type === 'Tools') {
    return (
      <View style={styles.sectionContainer}>
        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>import employees</Text>
        </View>

        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>export employees</Text>
        </View>
      </View>
    );
  }
};

const surveySection = props => {
  if (props?.showSurveySectionModal?.type === 'Survey') {
    return (
      <View style={styles.sectionContainer}>
        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>manage surveys</Text>
        </View>
      </View>
    );
  }
};

const complaintsSection = props => {
  if (props?.showComplaintsSectionModal?.type === 'Complaints') {
    return (
      <View style={styles.sectionContainer}>
        <View style={[styles.headingContainer, styles.itemCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={true}
            // onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>manage complaints</Text>
        </View>
      </View>
    );
  }
};

const onRequestClose = props => {
  if (props.showSettingsSectionModal.type === 'settings') {
    props.setShowSettingsSectionModal({show: false});
  } else if (
    props.showOnboardingOffBoardingSectionModal.type ===
    'on boarding/off boarding'
  ) {
    props.setShowOnboardingOffBoardingSectionModal({show: false});
  } else if (
    props.showPerformanceReviewSectionModal.type === 'Performance Review'
  ) {
    props.setShowPerformanceReviewSectionModal({show: false});
  } else if (props.showRewardsSectionModal.type === 'Rewards') {
    props.setShowRewardsSectionModal({show: false});
  } else if (props.showNewsSectionModal.type === 'News') {
    props.setShowNewsSectionModal({show: false});
  } else if (
    props.showDashboardWidgetsSectionModal.type === 'Dashboard Widgets'
  ) {
    props.setShowDashboardWidgetsSectionModal({show: false});
  } else if (props.showEmployeeSectionModal.type === 'Employee') {
    props.setShowEmployeeSectionModal({show: false});
  } else if (props.showTimeOffSectionModal.type === 'Time Off') {
    props.setShowTimeOffSectionModal({show: false});
  } else if (props.showReportsSectionModal.type === 'Reports') {
    props.setShowReportsSectionModal({show: false});
  } else if (props.showToolsSectionModal.type === 'Tools') {
    props.setShowToolsSectionModal({show: false});
  } else if (props.showSurveySectionModal.type === 'Survey') {
    props.setShowSurveySectionModal({show: false});
  } else if (props.showComplaintsSectionModal.type === 'Complaints') {
    props.setShowComplaintsSectionModal({show: false});
  }
};

const CustomeSectionModal = props => {
  return (
    <Modal
      visible={
        props?.showSettingsSectionModal?.show ||
        props?.showOnboardingOffBoardingSectionModal?.show ||
        props?.showPerformanceReviewSectionModal?.show ||
        props?.showRewardsSectionModal?.show ||
        props?.showNewsSectionModal?.show ||
        props?.showDashboardWidgetsSectionModal?.show ||
        props?.showEmployeeSectionModal?.show ||
        props?.showTimeOffSectionModal?.show ||
        props?.showReportsSectionModal?.show ||
        props?.showToolsSectionModal?.show ||
        props?.showSurveySectionModal?.show ||
        props?.showComplaintsSectionModal?.show ||
        false
      }
      animationType="fade"
      transparent
      onRequestClose={() => onRequestClose({...props})}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>
              {props?.showSettingsSectionModal?.type ||
                props?.showOnboardingOffBoardingSectionModal?.type ||
                props?.showPerformanceReviewSectionModal?.type ||
                props?.showRewardsSectionModal?.type ||
                props?.showNewsSectionModal?.type ||
                props?.showDashboardWidgetsSectionModal?.type ||
                props?.showEmployeeSectionModal?.type ||
                props?.showTimeOffSectionModal?.type ||
                props?.showReportsSectionModal?.type ||
                props?.showToolsSectionModal?.type ||
                props?.showSurveySectionModal?.type ||
                props?.showComplaintsSectionModal?.type ||
                'name'}
            </Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => onRequestClose({...props})}
                style={({pressed}) => [
                  styles.closePressabel,
                  {backgroundColor: pressed ? '#b3b3b3' : '#fff'},
                ]}>
                {({pressed}) => (
                  <CloseIcon
                    name="close"
                    size={20}
                    color={pressed ? '#fff' : '#b3b3b3'}
                  />
                )}
              </Pressable>
            </View>
          </View>
          <View style={styles.line} />
          <ScrollView
            style={styles.scrollView}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            {settingsSection({...props})}
            {onboardingOffBoardingSection({...props})}
            {performanceReviewSection({...props})}
            {rewardsSection({...props})}
            {newsSection({...props})}
            {dashboardWidgetsSection({...props})}
            {employeeSection({...props})}
            {timeOffSection({...props})}
            {reportsSection({...props})}
            {toolsSection({...props})}
            {surveySection({...props})}
            {complaintsSection({...props})}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default CustomeSectionModal;
