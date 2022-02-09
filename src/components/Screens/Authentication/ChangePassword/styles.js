const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBody: {
    width: '90%',
    height: '70%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  cardHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 20,
  },
  line: {
    width: '100%',
    height: '0.2%',
    backgroundColor: '#b3b3b3',
  },
  cardHeadingText: {
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: 'bold',
  },
  reviewerContainer: {
    width: '30%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentTextContainer: {
    marginHorizontal: 17,
    marginVertical: 5,
  },
  commentText: {
    color: '#212529',
    textTransform: 'capitalize',
  },
  commentTextInput: {
    flexDirection: 'row',
    width: '90%',
    height: 45,
    borderWidth: 0.6,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  cancelAndSendReqContainer: {
    width: '85%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginHorizontal: 20,
  },
  cancelPressableText: {
    color: '#fff',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  sendReqPressable: {
    width: '51%',
    height: 50,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  cancelPressable: {
    width: '51%',
    height: 50,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  star: {
    color: '#ff4c52',
    fontSize: 18,
  },
  newPasswordTextContainer: {
    marginHorizontal: 17,
    marginVertical: 5,
  },
  textInputContainer: {
    marginVertical: 10,
  },
  textInput: {
    paddingHorizontal: 10,
  },
});

export default styles;
