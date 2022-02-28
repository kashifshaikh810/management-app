import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  textContainer: tw`mt-5 ml-5 mb-2`,
  text: tw`text-lg text-black uppercase`,
  headingContainer: tw`flex-row`,
});

export default styles;
