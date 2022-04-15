import React from 'react';
import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import LockIcon from 'react-native-vector-icons/FontAwesome5';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import AlertIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import VisaIcon from 'react-native-vector-icons/FontAwesome';
import DiscoverIcon from 'react-native-vector-icons/FontAwesome';
import MasterCardIcon from 'react-native-vector-icons/FontAwesome';
import InfoIcon from 'react-native-vector-icons/Entypo';

import styles from './styles';
import Header from '../Header/Header';
import tw from 'tailwind-react-native-classnames';
import {FlatList} from 'react-native-gesture-handler';
import CompanyDetailsModal from './Modals/CompanyDetailsModal/CompanyDetailsModal';
import UpdatePaymentInformationModal from './Modals/UpdatePaymentInformationModal/UpdatePaymentInformationModal';
import SelectPlanConfirmationModal from './Modals/SelectPlanConfirmationModal/SelectPlanConfirmationModal';

const data = [
  {
    type: 'small',
    numOfEmployees: 'Up to 100 employees',
    description:
      'The HR department is one of the critical pillars for business growth, so take care of employer management optimization upfront.',
    price: 29,
    buttonType: 'select plan',
  },
  {
    type: 'medium',
    numOfEmployees: 'Up to 1000 employees',
    description:
      'Get a full-fledged software for Human Resource management to reach a new level of interaction within the company.',
    price: 99,
    buttonType: 'select plan',
  },
  {
    type: 'large',
    numOfEmployees: 'More than 1000 people in the platform',
    description:
      'Integrate a culture of high performance within the enterprise. Get a centralized repository of employee data in one human resource information system (HRIS) software.',
    buttonType: 'contact with us',
  },
];

const yearlyData = [
  {
    type: 'small',
    numOfEmployees: 'Up to 100 employees',
    description:
      'The HR department is one of the critical pillars for business growth, so take care of employer management optimization upfront.',
    price: 313,
    buttonType: 'select plan',
  },
  {
    type: 'medium',
    numOfEmployees: 'Up to 1000 employees',
    description:
      'Get a full-fledged software for Human Resource management to reach a new level of interaction within the company.',
    price: '1,069',
    buttonType: 'select plan',
  },
  {
    type: 'large',
    numOfEmployees: 'More than 1000 people in the platform',
    description:
      'Integrate a culture of high performance within the enterprise. Get a centralized repository of employee data in one human resource information system (HRIS) software.',
    buttonType: 'contact with us',
  },
];

const billingAndPaymentMethodSection = props => {
  if (props.showSelectedTab === 'billing-and-payment-method') {
    return (
      <>
        <View
          style={[
            styles.warningCard,
            {
              borderColor: '#ffa700',
              backgroundColor: '#9d6700',
            },
          ]}>
          <View style={[styles.headingContainer, styles.warningCardContent]}>
            <AlertIcon name="alert-circle" size={50} color="#ff4c52" />
            <View style={{flex: 1}}>
              <Text style={[styles.warningCardText, {color: '#ffa700'}]}>
                YOUR COMPANY ACCOUNT STATUS IS: DEMO
              </Text>

              <Text>The demo period will end in 9 days, 13/03/2022</Text>
            </View>
          </View>
        </View>

        <View
          style={[styles.headingContainer, styles.warningCardItemsContainer]}>
          <View style={styles.scrollView}>
            <Text style={styles.headingMain}>BILLING ADDRESS</Text>
            <Text style={styles.title}>Company name:</Text>
            <Text style={styles.subTitle}>
              {props?.companyProfileDetailsData?.companyName ||
                `${
                  props?.companyProfileData?.firstName +
                  ' ' +
                  props?.companyProfileData?.middleName +
                  ' ' +
                  props?.companyProfileData?.lastName
                }`}
            </Text>

            <Text style={styles.title}>country:</Text>
            <Text style={styles.subTitle}>
              {props?.companyProfileDetailsData?.companyCountry}
            </Text>

            <Text style={styles.title}>street address:</Text>
            <Text style={styles.subTitle}>
              {props?.companyProfileDetailsData?.companyStreetAddressOne}
            </Text>

            <Text style={styles.title}>city:</Text>
            <Text style={styles.subTitle}>
              {props?.companyProfileDetailsData.companyCity}
            </Text>

            <Text style={styles.title}>state:</Text>
            <Text style={styles.subTitle}>
              {props?.companyProfileDetailsData.companyState}
            </Text>

            <Text style={styles.title}>zip code:</Text>
            <Text style={styles.subTitle}>
              {props?.companyProfileDetailsData.companyZipCode}
            </Text>
          </View>

          <View style={styles.scrollView}>
            <View style={styles.headingContainer}>
              <Text style={[styles.headingMain, styles.marginRight]}>
                PAYMENT INFORMATION
              </Text>
              <View style={styles.editIconPressableContainer}>
                <Pressable
                  onPress={() => props.setShowCompanyCountryModal(true)}
                  style={({pressed}) => [
                    styles.editIconPressable,
                    {backgroundColor: pressed ? '#b3b3b3' : '#ffa700'},
                  ]}>
                  <EditIcon name="edit" size={15} color="#fff" />
                </Pressable>
              </View>
            </View>
            <Text style={styles.alertText}>
              Please update payment details to avoid blocking of your account.
            </Text>

            <Text style={styles.title}>card holder name:</Text>
            <Text style={styles.subTitle}>N/A</Text>

            <Text style={styles.title}>card number:</Text>
            <Text style={styles.subTitle}>************N/A</Text>

            <Text style={styles.title}>expiration date:</Text>
            <Text style={styles.subTitle}>N/A</Text>

            <Text style={[styles.title, tw`uppercase`]}>ccv:</Text>
            <Text style={styles.subTitle}>***</Text>

            <View style={styles.line} />

            <View
              style={[
                styles.headingContainer,
                styles.lockIconAndIconContainer,
              ]}>
              <View
                style={[
                  styles.lockIconContainer,
                  {borderColor: '#ffa700', borderWidth: 5},
                ]}>
                <LockIcon name="lock" size={30} color="#ffa700" />
              </View>

              <Text style={styles.safeText}>
                Safe money transfers with your Credit Card Visa, Discover and
                Master Card
              </Text>
            </View>

            <View
              style={[styles.headingContainer, styles.paymentsCardContainer]}>
              <VisaIcon name="cc-visa" size={30} style={styles.visaIcon} />
              <DiscoverIcon name="cc-discover" size={30} style={styles.Icon} />
              <MasterCardIcon
                name="cc-mastercard"
                size={30}
                style={styles.Icon}
              />
            </View>
          </View>
        </View>
      </>
    );
  }
};

const paymentHistorySection = props => {
  if (props.showSelectedTab === 'payment-history') {
    return (
      <View style={styles.doNotHaveTextContainer}>
        <View style={styles.doNotHaveTextMain}>
          <Text>You do not have subscription.</Text>
        </View>
      </View>
    );
  }
};

const subscriptionPlanSection = props => {
  if (props.showSelectedTab === 'subscription-plan') {
    return (
      <View>
        <View style={styles.doNotHaveTextContainer}>
          <View style={styles.doNotHaveTextMain}>
            <Text>You do not have subscription.</Text>
          </View>
        </View>

        <View style={[styles.headingContainer, styles.paymentTabs]}>
          <View
            style={[
              styles.headingContainer,
              styles.tabsContainer,
              styles.borderRadius,
            ]}>
            <Pressable
              style={[
                styles.monthlyTab,
                props.showPaymentMethodTab === 'monthly'
                  ? tw`bg-green-700`
                  : tw`bg-white`,
              ]}
              onPress={() => props.setShowPaymentMethodTab('monthly')}>
              <Text
                style={[
                  styles.monthlyText,
                  props.showPaymentMethodTab === 'monthly'
                    ? tw`text-white`
                    : tw`text-green-400`,
                ]}>
                Monthly
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.headingContainer,
                styles.yearlyTab,
                props.showPaymentMethodTab === 'yearly'
                  ? tw`bg-green-700`
                  : tw`bg-white`,
              ]}
              onPress={() => props.setShowPaymentMethodTab('yearly')}>
              <Text
                style={[
                  styles.yearlyText,
                  props.showPaymentMethodTab === 'yearly'
                    ? tw`text-white`
                    : tw`text-green-400`,
                ]}>
                Yearly
              </Text>
              <View style={styles.offTextContainer}>
                <Text style={styles.offText}>10% Off</Text>
              </View>
            </Pressable>
          </View>
        </View>
        {monthlySection({...props})}

        {yearlySection({...props})}
      </View>
    );
  }
};

const monthlySection = props => {
  if (props.showPaymentMethodTab === 'monthly') {
    return (
      <>
        <FlatList
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          data={data}
          renderItem={({item, index}) => (
            <View style={styles.cardContainer}>
              <View style={styles.monthlyPaymentCard}>
                <View style={styles.monthlyPaymentCardItems}>
                  <Text style={styles.itemTypeText}>{item.type}</Text>
                  <Text style={styles.numberOfEmployees}>
                    {item.numOfEmployees}{' '}
                    {item.price && (
                      <InfoIcon
                        name="info-with-circle"
                        size={15}
                        style={styles.infoIcon}
                      />
                    )}
                  </Text>
                  <Text style={styles.itemDescription}>{item.description}</Text>
                  <View
                    style={[
                      styles.headingContainer,
                      styles.buttonAndPriceContainer,
                    ]}>
                    {item.price && (
                      <>
                        <Text style={styles.itemPrice}>${item.price}</Text>
                        <Text style={styles.monthText}>/</Text>
                        <Text style={styles.monthText}>month</Text>
                      </>
                    )}

                    <View
                      style={[
                        styles.buttonPressable,
                        item.price ? tw`items-end` : tw`items-center`,
                      ]}>
                      <Pressable
                        onPress={() =>
                          props.setShowCompanySelecPlanModal({
                            show: true,
                            data: item,
                          })
                        }
                        style={({pressed}) => [
                          styles.buttonType,
                          !item.price && tw`w-full`,
                          pressed ? tw`bg-gray-400` : tw`bg-green-600`,
                        ]}>
                        <Text style={styles.buttonTypeText}>
                          {item.buttonType}
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </>
    );
  }
};

const yearlySection = props => {
  if (props.showPaymentMethodTab === 'yearly') {
    return (
      <>
        <FlatList
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          data={yearlyData}
          renderItem={({item, index}) => (
            <View style={styles.cardContainer}>
              <View style={styles.monthlyPaymentCard}>
                <View style={styles.monthlyPaymentCardItems}>
                  <Text style={styles.itemTypeText}>{item.type}</Text>
                  <Text style={styles.numberOfEmployees}>
                    {item.numOfEmployees}{' '}
                    {item.price && (
                      <InfoIcon
                        name="info-with-circle"
                        size={15}
                        style={styles.infoIcon}
                      />
                    )}
                  </Text>
                  <Text style={styles.itemDescription}>{item.description}</Text>
                  <View
                    style={[
                      styles.headingContainer,
                      styles.buttonAndPriceContainer,
                    ]}>
                    {item.price && (
                      <>
                        <Text style={styles.itemPrice}>${item.price}</Text>
                        <Text style={styles.monthText}>/</Text>
                        <Text style={styles.monthText}>year</Text>
                      </>
                    )}

                    <View
                      style={[
                        styles.buttonPressable,
                        item.price ? tw`items-end` : tw`items-center`,
                      ]}>
                      <Pressable
                        onPress={() =>
                          props.setShowCompanySelecPlanYearlyModal({
                            show: true,
                            type: 'yearly',
                            data: item,
                          })
                        }
                        style={({pressed}) => [
                          styles.buttonType,
                          !item.price && tw`w-full`,
                          pressed ? tw`bg-gray-400` : tw`bg-green-600`,
                        ]}>
                        <Text style={styles.buttonTypeText}>
                          {item.buttonType}
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </>
    );
  }
};

const CompanyAccountMarkup = props => {
  const {firstName, middleName, lastName, email} = props?.companyProfileData;
  const {
    companyCity,
    companyCountry,
    companyName,
    companyNameSpace,
    companyPhoneNumber,
    companyState,
    companyStreetAddressOne,
    companyZipCode,
  } = props?.companyProfileDetailsData;

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

          <Pressable
            style={styles.logoImageContainer}
            onPress={() => props.uploadCompanyImage()}>
            {props.companyProfileImage === undefined ? (
              <Image
                source={require('../../Assists/images/image.png')}
                style={styles.default}
              />
            ) : props?.companyProfileImage?.uri ? (
              <Image
                source={{uri: props?.companyProfileImage?.uri}}
                style={styles.logoImage}
              />
            ) : (
              <Image
                source={{uri: props?.companyProfileImage}}
                style={styles.logoImage}
              />
            )}
          </Pressable>
        </View>

        <View style={styles.card}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>company details</Text>

            <View style={styles.editIconPressableContainer}>
              <Pressable
                onPress={() => props.showModal()}
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
              <Text style={styles.companyCardItemsSubTitle}>
                {firstName} {middleName} {lastName}
              </Text>
            </View>

            <View>
              <Text style={styles.companyCardItemsHeading}>register date:</Text>
              <Text style={styles.companyCardItemsSubTitle}>
                {props?.companyRegistrationDate}
              </Text>
            </View>
          </View>

          <View style={styles.companyCardItemsContainer}>
            <View>
              <Text style={styles.companyCardItemsHeading}>namespace:</Text>
              <Text style={styles.companyCardItemsSubTitle}>
                {firstName} {middleName} {lastName}
              </Text>
            </View>

            <View>
              <Text style={styles.companyCardItemsHeading}>owner:</Text>
              <Text style={styles.companyCardItemsSubTitle}>
                {firstName} {middleName} {lastName}
              </Text>
            </View>
          </View>

          <View style={styles.companyCardItemsContainer}>
            <View>
              <Text style={styles.companyCardItemsHeading}>email address:</Text>
              <Text style={styles.companyCardItemEmail}>{email}</Text>
            </View>

            <View>
              <Text style={styles.companyCardItemsHeading}>phone number:</Text>
              <Text style={styles.companyCardItemsSubTitle}>
                {companyPhoneNumber}
              </Text>
            </View>
          </View>

          <View style={styles.companyCardItemsContainer}>
            <View>
              <Text style={styles.companyCardItemsHeading}>
                billing address:
              </Text>
              <View style={[styles.headingContainer, tw`items-center`]}>
                {companyStreetAddressOne && (
                  <LocationIcon
                    name="md-location-sharp"
                    size={15}
                    color="#006f44"
                  />
                )}
                <Text style={styles.companyCardItemsSubTitle}>
                  {companyStreetAddressOne}
                </Text>
              </View>
              <Text style={styles.companyCardItemsSubTitle}>{companyCity}</Text>
              <Text style={styles.companyCardItemsSubTitle}>
                {companyState}
              </Text>
              <Text style={styles.companyCardItemsSubTitle}>
                {companyZipCode}
              </Text>
              <Text style={styles.companyCardItemsSubTitle}>
                {companyCountry}
              </Text>
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
              onPress={() => props.setShowSelectedTab('subscription-plan')}
              style={[
                styles.tabsPressable,
                props.showSelectedTab === 'subscription-plan'
                  ? tw`bg-white`
                  : tw`bg-gray-200`,
              ]}>
              <Text style={styles.tabsText}>subscription plan</Text>
              {props.showSelectedTab === 'subscription-plan' && (
                <View style={styles.bottomGreenLine} />
              )}
            </Pressable>
          </View>

          {billingAndPaymentMethodSection({...props})}

          {paymentHistorySection({...props})}

          {subscriptionPlanSection({...props})}
        </View>
      </ScrollView>
      <CompanyDetailsModal {...props} />

      <UpdatePaymentInformationModal {...props} />

      <SelectPlanConfirmationModal {...props} />
    </View>
  );
};

export default CompanyAccountMarkup;
