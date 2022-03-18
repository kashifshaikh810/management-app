import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-gray-100`,
  scrollView: tw`flex-1`,
  textContainer: tw`mt-4 ml-5 mb-2`,
  text: tw`text-lg text-black uppercase font-extrabold`,
  headingContainer: tw`flex-row`,
  slash: tw`ml-1.5`,
  headingText: tw`ml-2 text-gray-500 capitalize`,
  card: tw`w-11/12 min-h-0 flex-1 m-3 ml-5 bg-white shadow-md`,
  heading: tw`p-3 ml-2 mt-2 uppercase text-lg font-extrabold text-gray-600`,
  line: tw`w-full h-0.5 bg-gray-100`,
  savePressableContainer: tw`flex-1 justify-end items-end mr-2 mb-4 mt-4`,
  savePressable: tw`w-5/12 h-12 rounded justify-center items-center bg-red-500`,
  savePressableText: tw`text-white capitalize text-base text-center`,
  tabsPressable: tw`p-4`,
  tabsText: tw`text-sm font-extrabold uppercase`,
  wouldLikeTextContainer: tw`ml-4 mt-4`,
  wouldLikeText: tw`text-base text-gray-800`,
  engagingTextContainer: tw`ml-4 mt-3`,
  engagingText: tw`text-sm text-gray-400 pr-4`,
  thumbStyle: tw`bg-white h-10 w-10`,
  trackBarStyle: tw`h-11 m-4`,
  checkIconContainer: tw`flex-1 justify-center items-center`,
  currencyInputContainer: tw`m-4 mr-7 mt-0`,
  currencyLabelText: tw`pb-2 capitalize text-gray-700 text-base`,
  star: tw`text-red-400 text-base`,
  currencyInput: tw`w-full h-11 border-2 border-green-600 rounded mb-2 pl-1`,
  companyInput: tw`w-full h-40 border-2 border-green-600 rounded pl-1`,
  hashTagText: tw`text-gray-400 text-xs mt-1`,
  additionalContainer: tw`ml-2`,
  additionalText: tw`ml-2 text-base text-black capitalize mb-1`,
  itemCenter: tw`items-center`,
  allowText: tw`text-base text-gray-600 capitalize`,
  helloContainer: tw`ml-6 mt-3 items-center mb-5`,
  rounded: tw`w-1 h-1 rounded-full bg-gray-400 mr-3`,
  helloText: tw`text-gray-400 text-base`,
  marginLeftZero: tw`ml-0`,
  marginBottomFour: tw`mb-4`,
  marginTop: tw`mt-3`,
  textInput: tw`w-11/12 h-12 border-2 border-gray-200 rounded`,
  pickerContainer: tw`justify-center`,
  customRewardsText: tw`text-lg text-gray-500`,
  pointsInput: tw`w-7/12 h-11 border-2 border-green-600 rounded mb-2 pl-1`,
  dropIconsContainer: tw`flex-1 justify-center items-end mr-2`,
  addNewRewardPressable: tw`w-5/12 h-12 rounded justify-center items-center bg-green-600`,
  arrowIcon: tw`ml-3`,
  marginLeft: tw`ml-4`,
  refineText: tw`uppercase text-black font-extrabold`,
  noRecordTextContainer: tw`bg-green-100 w-11/12 h-11 self-center justify-center items-center mb-5 mt-5 rounded`,
  noRecordText: tw`text-sm text-gray-500`,
  clearPressable: tw`w-3/12 h-12 rounded justify-center items-center border-2 border-green-500`,
  searchPressable: tw`bg-green-600 w-3/12`,
  clearPressableText: tw`text-green-500 capitalize text-base text-center`,
  selfEnd: tw`self-end mr-7`,
  marginRight: tw`mr-2`,
  awardCard: tw`bg-blue-50 p-4`,
  awardCardItemContainer: tw`items-center`,
  descText: tw`text-gray-400 text-sm flex-1`,
  pointsNumberText: tw`text-gray-400 font-extrabold ml-1 text-sm`,
  pointsText: tw`text-gray-500 ml-1 text-gray-400 text-sm`,
  titleText: tw`uppercase text-black font-extrabold text-base`,
  cheerUpPressableContainer: tw`flex-1 mr-2 mb-2 mt-2`,
  cheerUpPressable: tw`w-11/12 h-12 rounded justify-center items-center bg-gray-500 self-center`,
  cheerUpPressableText: tw`text-white capitalize text-base text-center`,
  amountInput: tw`w-full h-12 border-2 border-gray-200 rounded mb-2 pl-1`,
  accrualText: tw`text-lg text-black pb-3 mt-1`,
  marginBottomTwo: tw`mb-2`,
  table: tw`bg-blue-50 w-11/12 h-16 items-center`,
});

export default styles;
