import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-gray-100`,
  scrollView: tw`flex-1`,
  textContainer: tw`mt-5 ml-5 mb-2 items-center`,
  text: tw`text-lg text-black uppercase font-extrabold`,
  headingContainer: tw`flex-row`,
  slash: tw`ml-1.5`,
  headingText: tw`ml-2 text-gray-500 capitalize`,
  card: tw`w-11/12 flex-1 m-3 ml-5 bg-white shadow-md pb-5`,
  heading: tw`p-4 mt-2 uppercase text-lg font-extrabold text-gray-600`,
  line: tw`w-full h-0.5 bg-gray-100`,
  cancelPressableContainer: tw`flex-1 justify-end items-end mr-3`,
  cancelPressable: tw`w-10/12 h-12 rounded justify-center items-center bg-red-500`,
  cancelPressableText: tw`text-white capitalize text-base`,
  updatePressableContainer: tw`flex-1 justify-center items-end mr-1 p-2`,
  updatePressable: tw`w-10/12 h-12 rounded justify-center items-center bg-red-500`,
  updatePressableText: tw`text-white capitalize text-base`,
  emailTextContainer: tw`ml-4 mt-4`,
  email: tw`capitalize text-gray-800 text-sm`,
  emailTextInput: tw`w-11/12 h-12 border-2 border-gray-200 self-center mt-2 rounded pl-2`,
  star: tw`text-red-400 text-base`,
  commaSepContainer: tw`mt-1`,
  commaSepText: tw`text-gray-400 text-xs`,
  refineTextContainer: tw`pt-4 pl-4`,
  refineText: tw`uppercase text-black font-extrabold`,
  arrowDownIcon: tw`rounded-full ml-3`,
  holidayTextContainer: tw`ml-5 mt-4`,
  holiday: tw`capitalize text-gray-800 text-sm`,
  holidayTextInput: tw`w-11/12 h-12 border-2 border-gray-200 mt-2 rounded pl-2 ml-5`,
  searchPressable: tw`w-5/12 h-12 rounded justify-center items-center bg-red-500 ml-2`,
  searchPressableText: tw`text-white capitalize text-base`,
  clearPressable: tw`w-5/12 h-12 border-2 rounded justify-center items-center border-red-500 `,
  clearPressableText: tw`text-red-500 capitalize text-base`,
  pressableContainer: tw`flex-1 justify-center p-4 pr-0`,
  holidayTable: tw`flex-1 justify-between`,
  holidayTableContainer: tw`flex-col p-5 w-6/12`,
  holidTableTextContainer: tw`bg-blue-100 p-2`,
  tableHeadingText: tw`capitalize text-base text-gray-500 font-extrabold`,
  tableTitleText: tw`capitalize mt-2 text-sm text-black w-40`,
  commentChildText: tw`capitalize mt-2 text-sm text-black w-32`,
  tableDateText: tw`text-xs text-gray-400`,
  editIconPressable: tw`w-6 h-6 justify-center items-center rounded-full m-3 ml-0`,
});

export default styles;
