import React from 'react';
import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import AlertIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import Header from '../Header/Header';
import tw from 'tailwind-react-native-classnames';

const billingAndPaymentMethodSection = props => {
  if (props.showSelectedTab === 'billing-and-payment-method') {
    return (
      <View
        style={[
          styles.warningCard,
          {
            borderColor: '#ffa700',
            backgroundColor: '#9d6700',
          },
        ]}>
        <View style={[styles.headingContainer, tw`items-center m-2`]}>
          <AlertIcon name="alert-circle" size={50} color="#ff4c52" />
          <View style={{flex: 1}}>
            <Text style={[styles.warningCardText, {color: '#ffa700'}]}>
              YOUR COMPANY ACCOUNT STATUS IS: DEMO
            </Text>

            <Text>The demo period will end in 9 days, 13/03/2022</Text>
          </View>
        </View>
      </View>
    );
  }
};

const CompanyAccountMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>company account</Text>
        </View>

        <View style={styles.headingContainer}>
          <HomeIcon
            name="home"
            size={15}
            color="green"
            style={styles.homeIcon}
          />
          <Text style={styles.slash}>/</Text>
          <Text style={styles.headingText}>settings</Text>
          <Text style={styles.slash}>/</Text>
          <Text style={styles.headingText}>company account</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>company logo</Text>

          <View style={styles.line} />

          <View style={styles.logoImageContainer}>
            <Image
              source={{uri: 'https://source.unsplash.com/user/c_v_r/1900x800'}}
              style={styles.logoImage}
            />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>company details</Text>

            <View style={styles.editIconPressableContainer}>
              <Pressable
                onPress={() => {}}
                style={({pressed}) => [
                  styles.editIconPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#ffa700'},
                ]}>
                <EditIcon name="edit" size={15} color="#fff" />
              </Pressable>
            </View>
          </View>

          <View style={styles.line} />

          <View style={styles.companyCardItemsContainer}>
            <View>
              <Text style={styles.companyCardItemsHeading}>company name:</Text>
              <Text style={styles.companyCardItemsSubTitle}>abcdd</Text>
            </View>

            <View>
              <Text style={styles.companyCardItemsHeading}>register date:</Text>
              <Text style={styles.companyCardItemsSubTitle}>1/21/2002</Text>
            </View>
          </View>

          <View style={styles.companyCardItemsContainer}>
            <View>
              <Text style={styles.companyCardItemsHeading}>namespace:</Text>
              <Text style={styles.companyCardItemsSubTitle}>name here...</Text>
            </View>

            <View>
              <Text style={styles.companyCardItemsHeading}>owner:</Text>
              <Text style={styles.companyCardItemsSubTitle}>Shahzaib Shah</Text>
            </View>
          </View>

          <View style={styles.companyCardItemsContainer}>
            <View>
              <Text style={styles.companyCardItemsHeading}>email address:</Text>
              <Text style={styles.companyCardItemEmail}>mark123@mail.com</Text>
            </View>

            <View>
              <Text style={styles.companyCardItemsHeading}>phone number:</Text>
              <Text style={styles.companyCardItemsSubTitle}>021441152</Text>
            </View>
          </View>

          <View style={styles.companyCardItemsContainer}>
            <View>
              <Text style={styles.companyCardItemsHeading}>
                billing address:
              </Text>
              <View style={[styles.headingContainer, tw`items-center`]}>
                <LocationIcon
                  name="md-location-sharp"
                  size={15}
                  color="#006f44"
                />
                <Text style={styles.companyCardItemsSubTitle}>affd</Text>
              </View>
              <Text style={styles.companyCardItemsSubTitle}>aadff</Text>
              <Text style={styles.companyCardItemsSubTitle}>aawww</Text>
              <Text style={styles.companyCardItemsSubTitle}>pfffff</Text>
              <Text style={styles.companyCardItemsSubTitle}>adaddaddad</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={[styles.headingContainer, tw`bg-gray-100`]}>
            <Pressable
              onPress={() =>
                props.setShowSelectedTab('billing-and-payment-method')
              }
              style={[
                styles.tabsPressable,
                props.showSelectedTab === 'billing-and-payment-method'
                  ? tw`bg-white`
                  : tw`bg-gray-200`,
              ]}>
              <Text style={styles.tabsText}>billing and payment method</Text>
              {props.showSelectedTab === 'billing-and-payment-method' && (
                <View style={styles.bottomGreenLine} />
              )}
            </Pressable>
            <Pressable
              onPress={() => props.setShowSelectedTab('payment-history')}
              style={[
                styles.tabsPressable,
                props.showSelectedTab === 'payment-history'
                  ? tw`bg-white`
                  : tw`bg-gray-200`,
              ]}>
              <Text style={styles.tabsText}>payment history</Text>
              {props.showSelectedTab === 'payment-history' && (
                <View style={styles.bottomGreenLine} />
              )}
            </Pressable>
            <Pressable
              onPress={() => props.setShowSelectedTab('subscription')}
              style={[
                styles.tabsPressable,
                props.showSelectedTab === 'subscription'
                  ? tw`bg-white`
                  : tw`bg-gray-200`,
              ]}>
              <Text style={styles.tabsText}>subscription</Text>
              {props.showSelectedTab === 'subscription' && (
                <View style={styles.bottomGreenLine} />
              )}
            </Pressable>
          </View>

          {billingAndPaymentMethodSection({...props})}
        </View>
      </ScrollView>
    </View>
  );
};

export default CompanyAccountMarkup;
