import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  backImage: {
    width: '100%',
    height: '100%',
  },
  cardContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    height: '80%',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  headerTextContainer: {
    width: '100%',
    height: '12%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  headerSignInText: {
    fontSize: 20,
    color: 'black',
  },
  headerSigInTextContainer: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '22%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressAbleStyle: {
    backgroundColor: '#607d8b',
    borderRadius: 10,
    width: '30%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    flexDirection: 'row',
  },
  facebookPressable: {
    backgroundColor: '#607d8b',
    borderRadius: 10,
    width: '30%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  },
  pressableText: {
    fontSize: 16,
    color: '#fff',
  },
  pressableIcon: {
    marginHorizontal: 6,
  },
  suggestionTextContainer: {
    width: '100%',
    height: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  suggestionText: {
    fontSize: 16,
    color: 'black',
  },
  lastContainer: {
    width: '100%',
    height: '50%',
  },
  textInput: {
    width: '90%',
    height: '15%',
    borderWidth: 0.8,
    marginVertical: 5,
    alignSelf: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  forgotPasswordTextContainer: {
    width: '95%',
    alignItems: 'flex-end',
  },
  forgotText: {
    fontSize: 16,
    color: '#006f44',
  },
  rigerterAndLoginButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButton: {
    borderColor: '#006f44',
    borderWidth: 0.7,
    borderRadius: 10,
    width: '45%',
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    flexDirection: 'row',
  },
  loginButton: {
    backgroundColor: '#006f44',
    borderRadius: 10,
    width: '45%',
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    flexDirection: 'row',
  },
  register: {
    color: '#006f44',
    fontSize: 17,
  },
  login: {
    fontSize: 17,
    color: '#fff',
  },
  errText: {
    fontSize: 16,
    marginVertical: 10,
    color: 'red',
    textAlign: 'center',
  },
});

export default styles;
