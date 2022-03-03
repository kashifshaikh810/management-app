import React from 'react';
import {Alert} from 'react-native';
import ComplaintsMarkup from './ComplaintsMarkup';

const Complaints = props => {
  const changeStatus = () =>
    Alert.alert('Status', 'Now chane the status...', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Resolved', onPress: () => console.log('Resolved Pressed')},
      {text: 'In Review', onPress: () => console.log('Review Pressed')},
    ]);

  const viewDetails = () =>
    Alert.alert('View Complaint', `${'let me explain'}`, [
      {text: 'Close', onPress: () => console.log('Resolved Pressed')},
    ]);

  return (
    <ComplaintsMarkup
      {...props}
      changeStatus={changeStatus}
      viewDetails={viewDetails}
    />
  );
};

export default Complaints;
