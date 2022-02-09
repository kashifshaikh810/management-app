import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  userNameContiner: {
    marginHorizontal: 15,
    width: '100%',
    height: 40,
    justifyContent: 'flex-end',
  },
  userName: {
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
  card: {
    elevation: 5,
    width: '92%',
    height: 200,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: 10,
  },
  cardHeadingContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  line: {
    width: '100%',
    height: '0.2%',
    backgroundColor: '#b3b3b3',
  },
  cardHeadingText: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  cardItems: {
    marginVertical: 10,
    marginHorizontal: 2,
  },
  fullName: {
    fontSize: 17,
    color: '#006f44',
  },
  text: {
    fontSize: 16,
  },
  cardTwoContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noRecordContainer: {
    width: '80%',
    height: 45,
    backgroundColor: '#497179',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noRecordText: {
    color: '#f3f3f3',
    fontSize: 16,
  },
  timeOffDetailsCard: {
    elevation: 5,
    width: '92%',
    height: Dimensions.get('window').height / 1.1,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: 10,
  },
  timeOffDetailsContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  holiday: {
    color: '#263238',
    textTransform: 'uppercase',
    fontSize: 14,
  },
  numOfHoliday: {
    fontSize: 46,
    color: '#006f44',
    fontWeight: '400',
  },
  hoursAvailable: {
    color: '#808495',
    textTransform: 'uppercase',
    fontWeight: '300',
    fontSize: 10,
  },
  headingOfTotalHours: {
    color: '#808495',
    textTransform: 'uppercase',
    fontSize: 10,
    marginVertical: 5,
  },
  numOfTotalHours: {
    fontSize: 12,
    color: '#263238',
    fontWeight: '400',
  },
  roundCircleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  roundCircle: {
    width: 110,
    height: 110,
    borderRadius: 60,
    borderWidth: 7,
    borderColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  numOfUsedHours: {
    color: 'red',
    fontSize: 30,
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#fff',
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 50,
  },
});

export default styles;
