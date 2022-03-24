import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-gray-100`,
  scrollView: tw`flex-1`,
  textContainer: tw`mt-5 ml-3 mb-2`,
  text: tw`text-lg text-black uppercase font-extrabold`,
  headingContainer: tw`flex-row`,
  slash: tw`ml-1.5`,
  headingText: tw`ml-2 text-gray-500 capitalize`,
  marginTop: tw`mt-2`,
  card: tw`w-11/12 min-h-0 flex-1 m-3 self-center bg-white shadow-md`,
  heading: tw`p-3 ml-2 mt-2 uppercase text-lg font-extrabold text-gray-600`,
  line: tw`w-full h-0.5 bg-gray-100`,
  createPressableContainer: tw`flex-1 justify-end items-end mr-4 mb-3 mt-3`,
  createPressable: tw`w-10/12 h-10 p-1 rounded justify-center items-center bg-red-500`,
  createPressableText: tw`text-white capitalize text-sm text-center`,
  tab: tw`p-6`,
  tabText: tw`uppercase text-base`,
  refineText: tw`uppercase text-black font-extrabold text-base`,
  arrowIcon: tw`ml-3`,
  refineFieldContainer: tw`ml-5 mt-4`,
  marginLeft: tw`ml-2`,
  tableHeadingContainer: tw`flex-1 items-center ml-5 pl-4 h-11 w-11/12 mt-3 bg-blue-100`,
  icon: tw`p-1 rounded-full bg-gray-100`,
  roleTitleHeadingText: tw`w-24 capitalize text-base font-extrabold text-gray-500`,
  descHeadingText: tw`capitalize text-base font-extrabold text-gray-500 ml-3 w-24`,
  statusHeadingText: tw`capitalize text-base font-extrabold text-gray-500 ml-2 w-16`,
  headingItemsContainer: tw`flex-1 items-center w-11/12 ml-5 pl-4 mt-3`,
  roleTitleTableItemText: tw`w-24 text-sm text-gray-500`,
  descTableItemText: tw`ml-3 w-24 text-sm text-gray-500`,
  statusTableItemText: tw`w-12 bg-green-400 pb-0.5 pt-0.5 mr-2 rounded-full text-white text-center text-xs`,
  editAndDeleteIcon: tw`ml-3 w-24`,
  tableLine: tw`w-11/12 mt-5 self-center`,
  fieldInputContainer: tw`m-4 ml-5 mr-7 mt-0`,
  fieldLabelText: tw`pb-2 capitalize text-gray-700 text-base`,
  fieldInput: tw`w-full h-11 border-2 border-gray-200 rounded pl-1`,
  clearPressable: tw`w-3/12 h-12 rounded justify-center items-center border-2 border-green-500`,
  searchPressable: tw`bg-green-600 w-3/12`,
  clearPressableText: tw`text-green-500 capitalize text-base text-center`,
  selfEnd: tw`self-end mr-7`,
  savePressable: tw`w-5/12 h-12 rounded justify-center items-center bg-red-500`,
  savePressableText: tw`text-white capitalize text-base text-center`,
  pickerContainer: tw`justify-center`,
  applyPressableContainer: tw`justify-center items-end h-16`,
  userTable: tw`flex-1 items-center ml-5 pl-2 pr-8 h-11 w-11/12 h-10 mt-3 bg-blue-100`,
  nameHeadingText: tw`w-24 capitalize text-base font-extrabold text-gray-500`,
  marginRightFive: tw`mr-5`,
  emailHeadingText: tw`capitalize text-base font-extrabold text-gray-500 ml-3 w-32`,
  roleHeadingText: tw`capitalize text-base font-extrabold text-gray-500 ml-3 w-24`,
  userStatusHeadingText: tw`capitalize text-base font-extrabold text-gray-500 ml-2 w-12`,
  userHeadingItemsContainer: tw`flex-1 items-center w-11/12 h-10 ml-5 pl-2 mt-3 pr-8`,
  nameTableItemText: tw`w-24 text-sm text-gray-500`,
  emailTableItemText: tw`ml-3 w-32 text-sm text-gray-500`,
  roleTableItemText: tw`ml-3 w-24 text-sm text-gray-500`,
  userStatusTableItemText: tw`w-12 pb-0.5 pt-0.5 mr-2 rounded-full text-white text-center text-xs`,
});

export default styles;
