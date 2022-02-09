import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    width: '100%',
    height: Dimensions.get('window').height / 1,
  },
  headingContainer: {
    width: '100%',
    height: '10%',
    marginVertical: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 20,
    color: 'black',
  },
  line: {
    width: '90%',
    height: '0.1%',
    marginVertical: 15,
    backgroundColor: '#b3b3b3',
    alignSelf: 'center',
  },
  emailAddressHeading: {
    width: '37%',
    height: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailAddressText: {
    fontSize: 16,
    color: 'black',
  },
  star: {
    color: 'red',
  },
  textInput: {
    width: '90%',
    height: '7%',
    borderWidth: 0.8,
    marginVertical: 5,
    alignSelf: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  createAccountButtonContainer: {
    width: '80%',
    height: '12%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  createAccountPressable: {
    width: '55%',
    height: 50,
    marginHorizontal: 6,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  createAccountPressableText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default styles;
