import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBody: {
    width: '90%',
    height: '50%',
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
  closeIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  closePressabel: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#e9ecef',
  },
  reqTypeContainer: {
    marginHorizontal: 18,
    height: 35,
    justifyContent: 'center',
  },
  reqType: {
    color: '#212529',
    textTransform: 'capitalize',
    fontSize: 17,
  },
  star: {
    fontSize: 18,
    color: '#ff4c52',
  },
  reviewerContainer: {
    marginHorizontal: 18,
    height: 35,
    justifyContent: 'center',
  },
  commentTextContainer: {
    marginHorizontal: 18,
    height: 35,
    justifyContent: 'center',
  },
  commentText: {
    color: '#212529',
    textTransform: 'capitalize',
  },
  commentTextInput: {
    width: '90%',
    height: 150,
    borderWidth: 0.6,
    borderRadius: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    textAlignVertical: 'top',
  },
  cancelAndSendReqContainer: {
    marginVertical: 20,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  scrollView: {
    flex: 1,
  },
});

export default styles;
