import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-gray-100`,
  scrollView: tw`flex-1`,
  textContainer: tw`mt-5 ml-5 mb-2`,
  text: tw`text-lg text-black uppercase font-extrabold`,
  headingContainer: tw`flex-row`,
  slash: tw`ml-1.5`,
  homeIcon: tw`ml-5`,
  headingText: tw`ml-2 text-gray-500 capitalize`,
  card: tw`w-11/12 min-h-0 flex-1 m-3 ml-5 bg-white shadow-md`,
  line: tw`w-full h-0.5 bg-gray-100 mt-2`,
  heading: tw`p-3 ml-2 mt-2 uppercase text-sm font-extrabold text-gray-600`,
  logoImageContainer: tw`flex-1 justify-center items-center m-5`,
  logoImage: tw`w-6/12 h-52`,
  editIconPressableContainer: tw`flex-1 justify-center items-end mr-5`,
  editIconPressable: tw`w-6 h-6 justify-center items-center rounded-full`,
  companyCardItemsContainer: tw`flex-1 justify-between items-center flex-row p-5 flex-wrap`,
  companyCardItemsHeading: tw`text-black text-base capitalize`,
  companyCardItemsSubTitle: tw`text-gray-500 text-base capitalize`,
  companyCardItemEmail: tw`text-green-500 text-base underline`,
  bottomGreenLine: tw`w-full h-0.5 bg-green-600 mt-2`,
  tabsPressable: tw`bg-white flex-1 justify-center items-center p-3 m-0.5`,
  tabsText: tw`text-black font-extrabold text-sm uppercase text-center`,
  warningCard: tw`m-1 flex-1 h-24 border-2 rounded-xl`,
  warningCardText: tw`uppercase text-sm font-extrabold ml-1`,
  headingMain: tw`uppercase text-base mb-2 font-extrabold text-black`,
  alertText: tw`text-sm text-red-500 mb-2`,
  title: tw`capitalize text-sm text-black font-extrabold`,
  subTitle: tw`text-sm text-gray-800 mb-2`,
  safeText: tw`text-xs flex-1 ml-2 text-gray-300`,
  lockIconContainer: tw`w-16 h-16 justify-center items-center rounded-full self-center mr-2`,
  visaIcon: tw`text-gray-100`,
  Icon: tw`text-gray-100 ml-2`,
  warningCardContent: tw`items-center p-2`,
  warningCardItemsContainer: tw`flex-1 justify-between p-3`,
  marginRight: tw`mr-8`,
  lockIconAndIconContainer: tw`flex-1 items-center pt-2`,
  paymentsCardContainer: tw`flex-1 pt-4 pb-2`,
  doNotHaveTextContainer: tw`flex-1 p-5 justify-center items-center`,
  doNotHaveTextMain: tw`w-11/12 h-10 rounded-xl bg-blue-100 justify-center items-center self-center`,
  paymentTabs: tw`flex-1 justify-center`,
  tabsContainer: tw`border-2 p-1 border-gray-100 justify-around`,
  borderRadius: {borderRadius: 50},
  monthlyTab: tw`h-12 w-5/12 justify-center items-center rounded-full`,
  yearlyTab: tw`h-12 w-6/12 justify-center items-center rounded-full`,
  offTextContainer: tw`bg-green-400 p-1 ml-2 justify-center items-center rounded-full`,
  monthlyText: tw`text-lg capitalize`,
  yearlyText: tw`text-lg capitalize`,
  offText: tw`text-xs text-white`,
  cardContainer: tw`flex-1 justify-around items-center m-4`,
  monthlyPaymentCard: tw`border-2 border-gray-100 w-full h-60 rounded-xl`,
  monthlyPaymentCardItems: tw`flex-1 justify-center m-3`,
  itemTypeText: tw`text-black capitalize font-extrabold text-lg`,
  numberOfEmployees: tw`text-gray-400 capitalize text-sm mt-1`,
  infoIcon: tw`pl-2 text-green-700`,
  itemDescription: tw`text-gray-600 capitalize text-sm mt-2`,
  buttonAndPriceContainer: tw`items-center mt-3`,
  itemPrice: tw`text-black capitalize font-extrabold text-2xl`,
  monthText: tw`text-gray-400 text-xs ml-1 mt-1`,
  buttonPressable: tw`flex-1 justify-center`,
  buttonType: tw`p-3 items-center rounded-xl`,
  buttonTypeText: tw`text-white capitalize text-sm`,
});

export default styles;