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
  card: tw`w-11/12 min-h-0 flex-1 m-3 ml-5 bg-white shadow-md`,
  heading: tw`p-3 ml-2 mt-2 uppercase text-lg font-extrabold text-gray-600`,
  line: tw`w-full h-0.5 bg-gray-100`,
  cancelPressableContainer: tw`flex-1 justify-end items-end mr-4`,
  cancelPressable: tw`w-5/12 h-12 rounded justify-center items-center bg-red-500`,
  cancelPressableText: tw`text-white capitalize text-base`,
  advancedSettingsTab: tw`w-5/12 h-12 bg-gray-100 justify-center items-center p-2`,
  importTab: tw`w-3/12 h-12 bg-gray-100 justify-center items-center`,
  complaintsTab: tw`w-4/12 h-12 bg-gray-100 justify-center items-center`,
  tabsText: tw`text-sm font-extrabold uppercase`,
  itemsCenter: tw`items-center ml-2 p-5`,
  addEmployeeText: tw`text-base text-gray-700`,
  generalSetting: tw`items-center ml-2 mt-4`,
  generalSettingTwo: tw`items-center ml-2`,
  selectAll: tw`capitalize text-black font-extrabold`,
});

export default styles;
