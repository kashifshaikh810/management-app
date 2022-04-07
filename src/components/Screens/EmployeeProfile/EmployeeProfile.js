import React, {useEffect, useState} from 'react';
import {Alert, ToastAndroid} from 'react-native';
import {useSelector} from 'react-redux';
import {Auth, Database} from '../../firebaseTools';
import EmployeeProfileMarkup from './EmployeeProfileMarkup';

const EmployeeProfile = props => {
  const [companyUserData, setCompanyUserData] = useState({});
  const [companyUserBioData, setCompanyUserBioData] = useState({});
  const [companyUserProfileDetailsData, setCompanyUserProfileDetailsData] =
    useState({});
  const [companyUserEducationData, setCompanyUserEducationData] = useState({});
  const [companyNoteForEmployeeData, setCompanyNoteForEmployeeData] = useState(
    {},
  );
  const [isFetchDataLoading, setIsFetchDataLoading] = useState(false);

  // add new note modal
  const [showAddNewNoteModal, setShowAddNewNoteModal] = useState(false);
  const [companyNote, setCompanyNote] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // edit note modal
  const [showEditNoteModal, setShowEditNoteModal] = useState(false);

  // redux tool
  const {
    companyUser,
    companyUserBio,
    companyUserProfileDetails,
    companyUserEducation,
    currUserData,
    companyNoteForEmployee,
  } = useSelector(state => state?.reduc);

  // company note posted date
  let date = companyNoteForEmployeeData
    ? new Date(companyNoteForEmployeeData?.postedDate)
    : '';
  let postedDate = companyNoteForEmployeeData.postedDate
    ? date?.toISOString()?.slice(0, 10)?.split('-')?.reverse()?.join('/')
    : '';

  // company note posted time
  const formatAMPM = date => {
    let hours = date?.getHours();
    let minutes = date?.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  };

  const addNewNoteForEmployee = () => {
    let employeeId = companyUser ? companyUser.userID : '';
    let uid = Auth()?.currentUser?.uid;
    let date = new Date();
    let postedDate = date ? date?.toISOString()?.split('t')[0] : [];

    if (companyNote) {
      setIsLoading(true);
      Database()
        .ref(`/companyNoteForEmployee/${employeeId}`)
        .set({
          companyId: uid,
          employeeId: employeeId,
          companyNote: companyNote,
          postedDate: postedDate,
        })
        .then(() => {
          setIsLoading(false);
          setShowAddNewNoteModal(false);
        })
        .catch(err => {
          console.log(err, 'err');
          setIsLoading(false);
        });
    }
  };

  const editModalVisible = () => {
    setShowEditNoteModal(true);
    let data = companyNoteForEmployeeData.companyNote;
    setCompanyNote(data);
  };

  const editNoteForEmployee = () => {
    setIsLoading(true);
    let employeeId = companyUser ? companyUser.userID : '';
    let uid = Auth()?.currentUser?.uid;
    let date = new Date();
    let postedDate = date ? date?.toISOString()?.split('t')[0] : [];
    Database()
      .ref(`/companyNoteForEmployee/${employeeId}`)
      .update({
        companyId: uid,
        employeeId: employeeId,
        companyNote: companyNote,
        postedDate: postedDate,
      })
      .then(() => {
        setIsLoading(false);
        setShowEditNoteModal(false);
      })
      .catch(err => {
        console.log(err, 'err');
        setIsLoading(false);
      });
  };

  const deleteNoteForEmployee = () => {
    let employeeId = companyUser ? companyUser.userID : '';
    Database()
      .ref(`/companyNoteForEmployee/${employeeId}`)
      .remove()
      .then(() => {
        ToastAndroid.showWithGravityAndOffset(
          'Successfully Deleted...',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
      })
      .catch(err => {
        console.log(err, 'err');
      });
  };

  useEffect(() => {
    setIsFetchDataLoading(true);
    setCompanyUserData(companyUser ? companyUser : []);
    setCompanyUserBioData(companyUserBio ? companyUserBio : []);
    setCompanyUserProfileDetailsData(
      companyUserProfileDetails ? companyUserProfileDetails : [],
    );
    setCompanyUserEducationData(
      companyUserEducation ? companyUserEducation : [],
    );
    setCompanyNoteForEmployeeData(
      companyNoteForEmployee ? companyNoteForEmployee : [],
    );
    setTimeout(() => {
      setIsFetchDataLoading(false);
    }, 300);
  }, [
    companyUser,
    companyUserBio,
    companyUserProfileDetails,
    companyUserEducation,
    companyNoteForEmployee,
    props.navigation,
  ]);

  return (
    <EmployeeProfileMarkup
      {...props}
      companyUserData={companyUserData}
      companyUserBioData={companyUserBioData}
      companyUserProfileDetailsData={companyUserProfileDetailsData}
      companyUserEducationData={companyUserEducationData}
      isFetchDataLoading={isFetchDataLoading}
      showAddNewNoteModal={showAddNewNoteModal}
      setShowAddNewNoteModal={setShowAddNewNoteModal}
      currUserData={currUserData ? currUserData : {}}
      addNewNoteForEmployee={addNewNoteForEmployee}
      companyNote={companyNote}
      setCompanyNote={setCompanyNote}
      isLoading={isLoading}
      companyNoteForEmployeeData={companyNoteForEmployeeData}
      postedDate={postedDate}
      formatAMPM={formatAMPM}
      showEditNoteModal={showEditNoteModal}
      setShowEditNoteModal={setShowEditNoteModal}
      editModalVisible={editModalVisible}
      editNoteForEmployee={editNoteForEmployee}
      deleteNoteForEmployee={deleteNoteForEmployee}
    />
  );
};

export default EmployeeProfile;
