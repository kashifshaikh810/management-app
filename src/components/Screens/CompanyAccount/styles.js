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
  card: tw`w-10/12 min-h-0 flex-1 m-3 ml-5 bg-white shadow-md`,
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
});

export default styles;
