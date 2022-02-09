import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  scrollView: {
    flex: 1,
  },
  empHeadingContainer: {
    marginHorizontal: 15,
    width: '100%',
    height: 40,
    justifyContent: 'flex-end',
  },
  empHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#43425d',
  },
  headingContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    alignItems: 'center',
    marginHorizontal: 15,
  },
  headingTextSlash: {
    marginHorizontal: 5,
  },
  headingText: {
    marginHorizontal: 5,
    color: '#6c757d',
  },
  emloyeeDetailText: {
    marginHorizontal: 5,
    color: '#6c757d',
  },
  imageBack: {
    width: '95%',
    height: Dimensions.get('window').height / 2.2,
    marginHorizontal: 15,
  },
  contentContainer: {
    width: '90%',
    alignItems: 'center',
    marginVertical: 20,
  },
  userProfile: {
    width: '40%',
    height: 120,
    borderRadius: 70,
    borderWidth: 0.6,
    borderColor: '#fff',
  },
  hobbiesContainer: {
    flex: 1,
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  userNameContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  userName: {
    fontSize: 20,
    color: '#e9e9f0',
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  email: {
    fontSize: 14,
    color: '#e9e9f0',
    fontWeight: '300',
    textDecorationLine: 'underline',
  },
  doBContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
  },
  userDOB: {
    fontSize: 14,
    color: '#e9e9f0',
    fontWeight: '300',
  },
  card: {
    elevation: 10,
    width: '90%',
    height: Dimensions.get('window').height / 2.3,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: 20,
  },
  cardHeadingContainer: {
    marginHorizontal: 20,
    marginVertical: 25,
  },
  line: {
    width: '100%',
    height: 0.3,
    backgroundColor: '#b3b3b3',
  },
  cardHeadingText: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
  },
  employeeHeading: {
    color: '#263238',
    fontSize: 14,
  },
  employeePosition: {
    color: '#6c757d',
    fontSize: 14,
  },
  itMyOwnCard: {
    elevation: 10,
    width: '90%',
    height: Dimensions.get('window').height / 2,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: 10,
  },
  itMyOwn: {
    fontSize: 23,
    color: '#6c757d',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  profileDetailsContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  profileDetailsContainerChild: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'space-evenly',
  },
  detailsContainer: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: 'space-evenly',
  },
  managerNotesCard: {
    elevation: 10,
    width: '90%',
    height: Dimensions.get('window').height / 2.8,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: 10,
  },
  managerNotesTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  managerNotesBackground: {
    width: '70%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#8dd9e8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  managerNotesText: {
    color: '#4d4f5c',
    fontWeight: '400',
    fontSize: 16,
  },
  educationCard: {
    elevation: 10,
    width: '90%',
    height: Dimensions.get('window').height / 3,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: 10,
  },
  educationTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  educationBackground: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#8dd9e8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  educationText: {
    color: '#4d4f5c',
    fontWeight: '400',
    fontSize: 16,
  },
});

export default styles;
