import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-gray-100`,
  scrollView: tw`flex-1`,
  textContainer: tw`mt-5 ml-3 mb-2`,
  text: tw`text-lg text-black uppercase font-extrabold`,
  headingContainer: tw`flex-row`,
  slash: tw`ml-1.5`,
  homeIcon: tw`ml-3`,
  headingText: tw`ml-2 text-gray-500 capitalize`,
  addPressableContainer: tw`w-11/12 h-12 justify-center items-end m-2`,
  addPressable: tw`w-4/12 mt-3 h-10 justify-center items-center rounded-xl`,
  addPressableText: tw`capitalize`,
  card: tw`w-11/12 min-h-0 flex-1 m-3 self-center bg-white shadow-md`,
  tabs: tw`flex-row`,
  tabContent: tw`w-4/12 h-16 justify-center items-center`,
  tabText: tw`uppercase`,
  line: tw`w-full h-0.5 bg-gray-100 mt-2`,
  noRecordsContainer: tw`flex-1 justify-center items-center m-4`,
  noRecords: tw`bg-green-100 w-full h-10 justify-center items-center `,
  inputContainer: tw`ml-5 mt-5`,
  input: tw`w-5/12 h-10 border-2 border-gray-100 mt-1`,
  taskListInput: tw`w-8/12 h-10 border-2 border-gray-100 mt-1`,
  taskListInputText: tw`mt-2`,
  clearButton: tw`w-3/12 h-10 ml-2 mt-1 border-2 border-green-500 justify-center items-center rounded-xl`,
  searchButton: tw`w-3/12 h-10 ml-2 mt-1 justify-center items-center rounded-xl`,
  refineTextContainer: tw`flex-row mt-2 ml-5`,
  refineText: tw`text-lg uppercase text-black`,
  arrowIcon: tw`ml-2 mt-1`,
  clearText: tw`capitalize`,
  templatesCard: tw`bg-gray-100 flex-1 mr-2 h-60 w-5/12 ml-5 justify-center`,
  onboardHeading: tw`ml-2`,
  manageButton: tw`w-10/12 h-10 ml-2 mt-1 border-2 border-green-500 justify-center items-center rounded-xl`,
});

export default styles;
