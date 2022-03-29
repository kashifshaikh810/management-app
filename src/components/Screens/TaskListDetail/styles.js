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
  addPressableContainer: tw`w-11/12 h-12 justify-center items-end m-2`,
  addPressable: tw`w-4/12 mt-3 h-10 justify-center items-center rounded-xl ml-2`,
  addPressableText: tw`capitalize`,
  card: tw`bg-white flex-1 min-h-0 w-11/12 self-center mt-7 p-8 pl-4`,
  heading: tw`flex-1 mt-4`,
  line: tw`w-full h-0.5 bg-gray-100 mt-2`,
  desc: tw`mt-1 flex-1 mb-5`,
  todoCard: tw`bg-white h-full w-11/12 self-center flex-1 mt-10 p-8 mb-4 pl-4`,
  iconsContainer: tw`flex-1 justify-end items-end`,
  icon: tw`w-6 h-6 justify-center items-center rounded-xl ml-2`,
  title: tw`text-black font-extrabold text-sm mb-1`,
  description: tw`text-gray-600 text-sm`,
  itemCenter: tw`items-center`,
  loader: tw`h-64 justify-end items-center`,
  paddingRight: tw`pr-4`,
  noRecordsContainer: tw`flex-1 justify-center items-center m-4`,
  noRecords: tw`bg-green-100 w-full h-10 justify-center items-center `,
});

export default styles;
