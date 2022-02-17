import React, {useEffect, useState} from 'react';
import {Alert, Platform, ToastAndroid} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';

import MyProfileMarkup from './MyProfileMarkup';
import {Auth, Database, Storage} from '../../firebaseTools/index';
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchContactInformationData,
  fetchEmergencyContactData,
} from '../../Redux/Action/Actions';

const MyProfile = props => {
  const [selectedTab, setSelectedTab] = useState('time-off');
  const [showEmergencyContactModal, setShowEmergencyContactModal] =
    useState(false);
  const [showEmergencyContactModalInputs, setShowEmergencyContactModalInputs] =
    useState(false);
  const [isEmergencyContactLoading, setIsEmergencyContactLoading] =
    useState(false);
  const [profileImage, setProfileImage] = useState('');
  const [showYearModal, setShowYearModal] = useState({
    show: false,
    type: '',
    chooseVal: '2022',
  });
  const [showTypeModal, setShowTypeModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowMondaySection, setIsShowMondaySection] = useState(false);
  const [isShowTuesdaySection, setIsShowTuesdaySection] = useState(false);
  const [isShowWednesdaySection, setIsShowWednesdaySection] = useState(false);
  const [isShowThursdaySection, setIsShowThursdaySection] = useState(false);
  const [isShowFridaySection, setIsShowFridaySection] = useState(false);
  const [isShowSaturdaySection, setIsShowSaturdaySection] = useState(false);
  const [isShowSundaySection, setIsShowSundaySection] = useState(false);

  // edit profile details modal all inputs
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [profileDetails, setProfileDetails] = useState({});

  // edit bio modal all inputs
  const [about, setAbout] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [favoriteBooks, setFavoriteBooks] = useState('');
  const [musicPreference, setMusicPreference] = useState('');
  const [sports, setSports] = useState('');
  const [editBioData, setEditBioData] = useState({});

  // emergency contacts modal all inputs
  const [emergencyContactFirstName, setEmergencyContactFirstName] =
    useState('');
  const [emergencyContactLastName, setEmergencyContactLastName] = useState('');
  const [emergencyContactMiddleName, setEmergencyContactMiddleName] =
    useState('');
  const [emergencyContactRelationShip, setEmergencyContactRelationShip] =
    useState('');
  const [emergencyContactOfficePhone, setEmergencyContactOfficePhone] =
    useState('');
  const [emergencyContactMobilePhone, setEmergencyContactMobilePhone] =
    useState('');

  // contact information modal all inputs
  const [contactInfoMobilePhone, setContactInfoMobilePhone] = useState('');
  const [contactInfoAddress, setContactInfoAddress] = useState('');
  const [contactInfoCity, setContactInfoCity] = useState('');
  const [contactInfoPostalCode, setContactInfoPostalCode] = useState('');
  const [contactInIsLoading, setContactInIsLoading] = useState(false);
  const [contactInformationData, setContactInformationData] = useState({});

  // storage ref
  const storageRef = Storage().ref(
    `/profileImage/${profileImage ? profileImage?.name : ''}`,
  );
  const [alternativeEmail, setAlternativeEmail] = useState('');

  // modals for profile edit section
  const [showProfileDetailsModal, setShowProfileDetailsModal] = useState(false);

  // modal section
  const [isShowMondayModal, setIsShowMondayModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowMondayToModal, setIsShowMondayToModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  const [isShowTuesdayModal, setIsShowTuesdayModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowTuesdayToModal, setIsShowTuesdayToModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  const [isShowWednesdayModal, setIsShowWednesdayModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowWednesdayToModal, setIsShowWednesdayToModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  const [isShowThursdayModal, setIsShowThursdayModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowThursdayToModal, setIsShowThursdayToModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  const [isShowFridayModal, setIsShowFridayModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowFridayToModal, setIsShowFridayToModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  const [isShowSaturdayModal, setIsShowSaturdayModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowSaturdayToModal, setIsShowSaturdayToModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  const [isShowSundayModal, setIsShowSundayModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowSundayToModal, setIsShowSundayToModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [isFromSelected, setIsFromSelected] = useState(false);
  const [selectSingleOrMarried, setSelectSingleOrMarried] = useState('');
  const [isShowGenderModal, setIsShowGenderModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowLanguagesModal, setIsShowLanguagesModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowZoneModal, setIsShowZoneModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [showPositionModalForProfile, setshowPositionModalForProfile] =
    useState({
      show: false,
      type: '',
      chooseVal: '',
    });
  const [showDepartmentModalForProfile, setShowDepartmentModalForProfile] =
    useState({
      show: false,
      type: '',
      chooseVal: '',
    });
  const [showEmploymentLevelModal, setShowEmploymentLevelModal] =
    useState(false);

  const [showDirectManagerModal, setShowDirectManagerModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [showCountryModal, setShowCountryModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [showStateRegionModal, setShowStateRegionModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [showIssueDateMonthModal, setShowIssueDateMonthModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  const [showIssueDateYearsModal, setShowIssueDateYearsModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  const [showExpirationDateMonthModal, setShowExpirationDateMonthModal] =
    useState({
      show: false,
      type: '',
      chooseVal: '',
    });

  const [showExpirationDateYearsModal, setShowExpirationDateYearsModal] =
    useState({
      show: false,
      type: '',
      chooseVal: '',
    });

  const [isShowEmploymentDetailsModal, setIsShowEmploymentDetailsModal] =
    useState(false);
  const [isShowEditBioModal, setIsShowEditBioModal] = useState(false);
  const [isShowContactInformationModal, setIsShowContactInformationModal] =
    useState(false);
  const [isShowAddLicenseCertification, setIsShowAddLicenseCertification] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emergencyContactData, setEmergencyContactData] = useState({});

  const [dateOfHire, setDateOfHire] = useState(new Date());
  const [modeOfHire, setModeOfHire] = useState('date');
  const [showOfHire, setShowOfHire] = useState(false);
  const [isSelectedDateOfHire, setIsSelectedDateOfHire] = useState(false);
  const [userData, setUserData] = useState('');

  // redux section
  const {currUserData, profileData, bioData, contactData, contactInfoData} =
    useSelector(state => state?.reduc);
  const dispatch = useDispatch();

  // From date
  let fromSectionDate = new Date(date);
  let ddDate = fromSectionDate.getDate();
  let mmMonth = fromSectionDate.getMonth() + 1;
  let yyYear = fromSectionDate.getFullYear();
  if (ddDate < 10) {
    ddDate = '0' + ddDate;
  }

  if (mmMonth < 10) {
    mmMonth = '0' + mmMonth;
  }
  fromSectionDate = ddDate + '/' + mmMonth + '/' + yyYear;

  //functions

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    if (currentDate !== date) {
      setIsFromSelected(true);
    }
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  // date of hire functionallity
  let hireDateSection = new Date(dateOfHire);
  let hireDate = hireDateSection.getDate();
  let hireMonth = hireDateSection.getMonth() + 1;
  let hireYear = hireDateSection.getFullYear();
  if (hireDate < 10) {
    hireDate = '0' + hireDate;
  }

  if (hireMonth < 10) {
    hireMonth = '0' + hireMonth;
  }
  hireDateSection = hireDate + '/' + hireMonth + '/' + hireYear;

  // date of hire functions
  const hireOnChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfHire;
    setShowOfHire(Platform.OS === 'ios');
    setDateOfHire(currentDate);
    if (currentDate !== dateOfHire) {
      setIsSelectedDateOfHire(true);
    }
  };

  const hireShowMode = currentMode => {
    setShowOfHire(true);
    setModeOfHire(currentMode);
  };

  const hireShowDatepicker = () => {
    hireShowMode('date');
  };

  const uploadProfileImage = async () => {
    try {
      const file = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      setProfileImage(file);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err, 'errr');
      } else {
        throw err;
      }
    }
  };

  const submit = async () => {
    let currUserUid = Auth()?.currentUser?.uid;
    let language = isShowLanguagesModal?.chooseVal;
    let dateOfBirth = fromSectionDate;
    let gender = isShowGenderModal?.chooseVal;
    let timeZone = isShowZoneModal?.chooseVal;

    if (
      firstName &&
      lastName &&
      profileImage &&
      gender &&
      selectSingleOrMarried &&
      dateOfBirth &&
      email &&
      language &&
      timeZone
    ) {
      setIsLoading(true);
      try {
        const profilePic = profileImage.uri;
        const profilePicResult = await RNFetchBlob.fs.readFile(
          profilePic,
          'base64',
        );
        const profilePicTask = storageRef.putString(
          profilePicResult,
          'base64',
          {
            contentType: profileImage.type,
          },
        );
        profilePicTask.on('state_changed', taskSnapshot => {
          console.log(
            `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
          );
        });
        await profilePicTask.then(imageSnapshot => {
          console.log('Image Upload Successfully');
          Storage()
            .ref(imageSnapshot.metadata.fullPath)
            .getDownloadURL()
            .then(myDownloadURL => {
              console.log('image ', myDownloadURL);
              Database().ref(`/profileDetails/${currUserUid}`).set({
                userId: currUserUid,
                profileImage: myDownloadURL,
                firstName: firstName,
                middileName: middileName,
                lastName: lastName,
                gender: gender,
                maritalStatus: selectSingleOrMarried,
                dateOfBirth: dateOfBirth,
                email: email,
                alternativeEmail: alternativeEmail,
                language: language,
                timeZone: timeZone,
              });
              Database()
                .ref('/userSignUp/')
                .child(currUserUid)
                .update({firstName: firstName, lastName: lastName});
              setFirstName('');
              setMiddleName('');
              setLastName('');
              setProfileImage('');
              setIsShowGenderModal({chooseVal: ''});
              setSelectSingleOrMarried('');
              fromSectionDate == '';
              setEmail('');
              setAlternativeEmail('');
              setIsShowLanguagesModal({chooseVal: ''});
              setIsShowZoneModal({chooseVal: ''});
              Alert.alert('Employee has been updated successfully.');
              setShowProfileDetailsModal(false);
              setIsLoading(false);
            });
        });
      } catch (err) {
        console.log(err);
      }
    } else if (
      profileImage ||
      firstName !== profileDetails?.firstName ||
      lastName !== profileDetails?.lastName ||
      middleName !== profileDetails?.middleName ||
      gender !== profileDetails?.gender ||
      selectSingleOrMarried !== profileDetails?.maritalStatus ||
      dateOfBirth !== profileDetails?.dateOfBirth ||
      language !== profileDetails?.language ||
      timeZone !== profileDetails?.timeZone ||
      firstName ||
      middleName ||
      lastName ||
      gender ||
      selectSingleOrMarried ||
      dateOfBirth ||
      language ||
      timeZone ||
      alternativeEmail ||
      email
    ) {
      setIsLoading(true);
      if (profileImage) {
        try {
          const profilePic = profileImage.uri;
          const profilePicResult = await RNFetchBlob.fs.readFile(
            profilePic,
            'base64',
          );
          const profilePicTask = storageRef.putString(
            profilePicResult,
            'base64',
            {
              contentType: profileImage.type,
            },
          );
          profilePicTask.on('state_changed', taskSnapshot => {
            console.log(
              `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
            );
          });
          await profilePicTask.then(imageSnapshot => {
            console.log('Image Upload Successfully');
            Storage()
              .ref(imageSnapshot.metadata.fullPath)
              .getDownloadURL()
              .then(myDownloadURL => {
                console.log('image ', myDownloadURL);
                Database()
                  .ref('profileDetails')
                  .child(currUserUid)
                  .update({profileImage: myDownloadURL});
              });
          });
        } catch (err) {
          setIsLoading(false);
          console.log(err);
        }
      }
      if (firstName !== profileDetails?.firstName || firstName) {
        Database()
          .ref('/profileDetails/')
          .child(currUserUid)
          .update({firstName: firstName});
        Database()
          .ref('/userSignUp/')
          .child(currUserUid)
          .update({firstName: firstName});
      }
      if (middleName !== profileDetails?.middleName || middleName) {
        Database()
          .ref('/profileDetails/')
          .child(currUserUid)
          .update({middleName: middleName});
        Database()
          .ref('/userSignUp/')
          .child(currUserUid)
          .update({middleName: middleName});
      }
      if (lastName !== profileDetails?.lastName || lastName) {
        Database()
          .ref('/profileDetails/')
          .child(currUserUid)
          .update({lastName: lastName});
        Database()
          .ref('/userSignUp/')
          .child(currUserUid)
          .update({lastName: lastName});
      }

      if (gender !== profileDetails?.gender || gender) {
        Database()
          .ref('/profileDetails/')
          .child(currUserUid)
          .update({gender: gender});
      }

      if (
        selectSingleOrMarried !== profileDetails?.maritalStatus ||
        selectSingleOrMarried
      ) {
        Database()
          .ref('/profileDetails/')
          .child(currUserUid)
          .update({maritalStatus: selectSingleOrMarried});
      }

      if (dateOfBirth !== profileDetails?.dateOfBirth || dateOfBirth) {
        Database()
          .ref('/profileDetails/')
          .child(currUserUid)
          .update({dateOfBirth: dateOfBirth});
      }

      if (email !== profileDetails?.email || email) {
        Database()
          .ref('/profileDetails/')
          .child(currUserUid)
          .update({email: email});
        Database()
          .ref('/userSignUp/')
          .child(currUserUid)
          .update({email: email});
      }

      if (
        alternativeEmail !== profileDetails?.alternativeEmail ||
        alternativeEmail
      ) {
        setIsLoading(true);
        Database()
          .ref('/profileDetails/')
          .child(currUserUid)
          .update({alternativeEmail: alternativeEmail});
      }

      if (language !== profileDetails?.language || language) {
        Database()
          .ref('/profileDetails/')
          .child(currUserUid)
          .update({language: language});
      }

      if (timeZone !== profileDetails?.timeZone || timeZone) {
        Database()
          .ref('/profileDetails/')
          .child(currUserUid)
          .update({timeZone: timeZone});
      }
      setTimeout(() => {
        setIsLoading(false);
        setShowProfileDetailsModal(false);
        Alert.alert('Employee has been updated successfully.');
      }, 2000);
    } else {
      ToastAndroid.show(
        'Warning, Please all feilds are required.',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  };

  const updateEditBio = () => {
    let currUserUid = Auth()?.currentUser?.uid;
    if (about && hobbies && favoriteBooks && musicPreference && sports) {
      Database().ref(`/editBio/${currUserUid}`).set({
        about: about,
        hobbies: hobbies,
        favoriteBooks: favoriteBooks,
        musicPreference: musicPreference,
        sports: sports,
      });
      setIsShowEditBioModal(false);
      Alert.alert('Profile has been updated successfully.');
    } else {
      if (about !== editBioData?.about || about) {
        Database().ref('/editBio/').child(currUserUid).update({about: about});
      }

      if (hobbies !== editBioData?.hobbies || hobbies) {
        Database()
          .ref('/editBio/')
          .child(currUserUid)
          .update({hobbies: hobbies});
      }

      if (favoriteBooks !== editBioData?.favoriteBooks || favoriteBooks) {
        Database()
          .ref('/editBio/')
          .child(currUserUid)
          .update({favoriteBooks: favoriteBooks});
      }

      if (musicPreference !== editBioData?.musicPreference || musicPreference) {
        Database()
          .ref('/editBio/')
          .child(currUserUid)
          .update({musicPreference: musicPreference});
        setMusicPreference('');
        setIsShowEditBioModal(false);
      }

      if (sports !== editBioData?.sports || sports) {
        Database().ref('/editBio/').child(currUserUid).update({sports: sports});
      }
      Alert.alert('Profile has been updated successfully.');
      setIsShowEditBioModal(false);
    }
  };

  const emergencyContactSubmit = () => {
    let currUserUid = Auth()?.currentUser?.uid;
    if (
      emergencyContactFirstName &&
      emergencyContactLastName &&
      emergencyContactRelationShip &&
      emergencyContactOfficePhone &&
      emergencyContactMobilePhone
    ) {
      setIsEmergencyContactLoading(true);
      Database().ref(`/emergencyContact/${currUserUid}`).set({
        userId: currUserUid,
        emergencyContactFirstName: emergencyContactFirstName,
        emergencyContactMiddleName: emergencyContactMiddleName,
        emergencyContactLastName: emergencyContactLastName,
        emergencyContactRelationShip: emergencyContactRelationShip,
        emergencyContactOfficePhone: emergencyContactOfficePhone,
        emergencyContactMobilePhone: emergencyContactMobilePhone,
      });
      setShowEmergencyContactModal(false);
      setIsEmergencyContactLoading(false);
      Alert.alert('Profile has been updated successfully.');
    } else {
      setIsEmergencyContactLoading(true);
      if (
        emergencyContactFirstName !== contactData?.emergencyContactFirstName ||
        emergencyContactFirstName
      ) {
        Database()
          .ref('/emergencyContact/')
          .child(currUserUid)
          .update({emergencyContactFirstName: emergencyContactFirstName});
      }

      if (
        emergencyContactMiddleName !==
          contactData?.emergencyContactMiddleName ||
        emergencyContactMiddleName
      ) {
        Database()
          .ref('/emergencyContact/')
          .child(currUserUid)
          .update({emergencyContactMiddleName: emergencyContactMiddleName});
      }

      if (
        emergencyContactLastName !== contactData?.emergencyContactLastName ||
        emergencyContactLastName
      ) {
        Database()
          .ref('/emergencyContact/')
          .child(currUserUid)
          .update({emergencyContactLastName: emergencyContactLastName});
      }

      if (
        emergencyContactRelationShip !==
          contactData?.emergencyContactRelationShip ||
        emergencyContactRelationShip
      ) {
        Database()
          .ref('/emergencyContact/')
          .child(currUserUid)
          .update({emergencyContactRelationShip: emergencyContactRelationShip});
      }

      if (
        emergencyContactOfficePhone !==
          contactData?.emergencyContactOfficePhone ||
        emergencyContactOfficePhone
      ) {
        Database()
          .ref('/emergencyContact/')
          .child(currUserUid)
          .update({emergencyContactOfficePhone: emergencyContactOfficePhone});
      }

      if (
        emergencyContactMobilePhone !==
          contactData?.emergencyContactMobilePhone ||
        emergencyContactMobilePhone
      ) {
        Database()
          .ref('/emergencyContact/')
          .child(currUserUid)
          .update({emergencyContactMobilePhone: emergencyContactMobilePhone});
      }
      setIsEmergencyContactLoading(false);
      setShowEmergencyContactModal(false);
      Alert.alert('Profile has been updated successfully.');
    }
  };

  const removeEmergencyContact = () => {
    let uid = Auth()?.currentUser?.uid;
    Database().ref(`/emergencyContact/${uid}`).remove();
    setShowEmergencyContactModalInputs(false);
    setShowEmergencyContactModal(false);
    Alert.alert('contact has been removed successfully.');
  };

  const submitContactInfo = () => {
    let uid = Auth()?.currentUser?.uid;
    let country = showCountryModal?.chooseVal;
    let stateAndRegion = showStateRegionModal?.chooseVal;

    if (
      contactInfoMobilePhone &&
      country &&
      contactInfoAddress &&
      contactInfoCity &&
      stateAndRegion &&
      contactInfoPostalCode
    ) {
      setContactInIsLoading(true);
      Database().ref(`/contactInformation/${uid}`).set({
        userId: uid,
        contactInfoMobilePhone: contactInfoMobilePhone,
        country: country,
        contactInfoAddress: contactInfoAddress,
        contactInfoCity: contactInfoCity,
        stateAndRegion: stateAndRegion,
        contactInfoPostalCode: contactInfoPostalCode,
      });
      setContactInIsLoading(false);
      setIsShowContactInformationModal(false);
      Alert.alert('Profile has been updated successfully.');
    } else {
      setContactInIsLoading(true);
      if (contactInfoMobilePhone) {
        Database()
          .ref('/contactInformation/')
          .child(uid)
          .update({contactInfoMobilePhone: contactInfoMobilePhone});
      }

      if (country) {
        Database()
          .ref('/contactInformation/')
          .child(uid)
          .update({country: country});
      }

      if (contactInfoAddress) {
        Database()
          .ref('/contactInformation/')
          .child(uid)
          .update({contactInfoAddress: contactInfoAddress});
      }

      if (contactInfoCity) {
        Database()
          .ref('/contactInformation/')
          .child(uid)
          .update({contactInfoCity: contactInfoCity});
      }

      if (stateAndRegion) {
        Database()
          .ref('/contactInformation/')
          .child(uid)
          .update({stateAndRegion: stateAndRegion});
      }

      if (contactInfoPostalCode) {
        Database()
          .ref('/contactInformation/')
          .child(uid)
          .update({contactInfoPostalCode: contactInfoPostalCode});
      }

      setContactInIsLoading(false);
      setIsShowContactInformationModal(false);
      Alert.alert('Profile has been updated successfully.');
    }
  };

  useEffect(() => {
    setProfileDetails(profileData);
    setFirstName(currUserData?.firstName);
    setMiddleName(profileData?.middleName);
    setLastName(currUserData?.lastName);
    setSelectSingleOrMarried(profileData?.maritalStatus);
    setEmail(currUserData?.email);
    setAlternativeEmail(profileData?.alternativeEmail);
    setUserData(currUserData);
  }, [profileData, currUserData]);

  useEffect(() => {
    setAbout(bioData?.about);
    setHobbies(bioData?.hobbies);
    setFavoriteBooks(bioData?.favoriteBooks);
    setMusicPreference(bioData?.musicPreference);
    setSports(bioData?.sports);
    setEditBioData(bioData);
  }, [bioData]);

  useEffect(() => {
    dispatch(fetchEmergencyContactData());
    dispatch(fetchContactInformationData());
  }, []);

  useEffect(() => {
    setEmergencyContactData(contactData);
    setEmergencyContactFirstName(contactData?.emergencyContactFirstName);
    setEmergencyContactLastName(contactData?.emergencyContactLastName);
    setEmergencyContactMiddleName(contactData?.emergencyContactMiddleName);
    setEmergencyContactRelationShip(contactData?.emergencyContactRelationShip);
    setEmergencyContactOfficePhone(contactData?.emergencyContactOfficePhone);
    setEmergencyContactMobilePhone(contactData?.emergencyContactMobilePhone);
  }, [contactData]);

  useEffect(() => {
    setContactInformationData(contactInfoData);
    setContactInfoMobilePhone(contactInfoData?.contactInfoMobilePhone);
    setContactInfoAddress(contactInfoData?.contactInfoAddress);
    setContactInfoCity(contactInfoData?.contactInfoCity);
    setContactInfoPostalCode(contactInfoData?.contactInfoPostalCode);
  }, [contactInfoData]);

  return (
    <MyProfileMarkup
      {...props}
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      showYearModal={showYearModal}
      setShowYearModal={setShowYearModal}
      showTypeModal={showTypeModal}
      setShowTypeModal={setShowTypeModal}
      isShowMondaySection={isShowMondaySection}
      setIsShowMondaySection={setIsShowMondaySection}
      isShowTuesdaySection={isShowTuesdaySection}
      setIsShowTuesdaySection={setIsShowTuesdaySection}
      isShowWednesdaySection={isShowWednesdaySection}
      setIsShowWednesdaySection={setIsShowWednesdaySection}
      isShowThursdaySection={isShowThursdaySection}
      setIsShowThursdaySection={setIsShowThursdaySection}
      isShowFridaySection={isShowFridaySection}
      setIsShowFridaySection={setIsShowFridaySection}
      isShowSaturdaySection={isShowSaturdaySection}
      setIsShowSaturdaySection={setIsShowSaturdaySection}
      isShowSundaySection={isShowSundaySection}
      setIsShowSundaySection={setIsShowSundaySection}
      isShowMondayModal={isShowMondayModal}
      setIsShowMondayModal={setIsShowMondayModal}
      isShowMondayToModal={isShowMondayToModal}
      setIsShowMondayToModal={setIsShowMondayToModal}
      isShowTuesdayModal={isShowTuesdayModal}
      setIsShowTuesdayModal={setIsShowTuesdayModal}
      isShowTuesdayToModal={isShowTuesdayToModal}
      setIsShowTuesdayToModal={setIsShowTuesdayToModal}
      isShowWednesdayModal={isShowWednesdayModal}
      setIsShowWednesdayModal={setIsShowWednesdayModal}
      isShowWednesdayToModal={isShowWednesdayToModal}
      setIsShowWednesdayToModal={setIsShowWednesdayToModal}
      isShowThursdayModal={isShowThursdayModal}
      setIsShowThursdayModal={setIsShowThursdayModal}
      isShowThursdayToModal={isShowThursdayToModal}
      setIsShowThursdayToModal={setIsShowThursdayToModal}
      isShowFridayModal={isShowFridayModal}
      setIsShowFridayModal={setIsShowFridayModal}
      isShowFridayToModal={isShowFridayToModal}
      setIsShowFridayToModal={setIsShowFridayToModal}
      isShowSaturdayModal={isShowSaturdayModal}
      setIsShowSaturdayModal={setIsShowSaturdayModal}
      isShowSaturdayToModal={isShowSaturdayToModal}
      setIsShowSaturdayToModal={setIsShowSaturdayToModal}
      isShowSundayModal={isShowSundayModal}
      setIsShowSundayModal={setIsShowSundayModal}
      isShowSundayToModal={isShowSundayToModal}
      setIsShowSundayToModal={setIsShowSundayToModal}
      showProfileDetailsModal={showProfileDetailsModal}
      setShowProfileDetailsModal={setShowProfileDetailsModal}
      showDatepicker={showDatepicker}
      onChange={onChange}
      mode={mode}
      show={show}
      date={date}
      isFromSelected={isFromSelected}
      fromSectionDate={fromSectionDate}
      selectSingleOrMarried={selectSingleOrMarried}
      setSelectSingleOrMarried={setSelectSingleOrMarried}
      isShowGenderModal={isShowGenderModal}
      setIsShowGenderModal={setIsShowGenderModal}
      isShowLanguagesModal={isShowLanguagesModal}
      setIsShowLanguagesModal={setIsShowLanguagesModal}
      isShowZoneModal={isShowZoneModal}
      setIsShowZoneModal={setIsShowZoneModal}
      showPositionModalForProfile={showPositionModalForProfile}
      setshowPositionModalForProfile={setshowPositionModalForProfile}
      hireShowDatepicker={hireShowDatepicker}
      hireOnChange={hireOnChange}
      modeOfHire={modeOfHire}
      showOfHire={showOfHire}
      dateOfHire={dateOfHire}
      isSelectedDateOfHire={isSelectedDateOfHire}
      hireDateSection={hireDateSection}
      showDepartmentModalForProfile={showDepartmentModalForProfile}
      setShowDepartmentModalForProfile={setShowDepartmentModalForProfile}
      showEmploymentLevelModal={showEmploymentLevelModal}
      setShowEmploymentLevelModal={setShowEmploymentLevelModal}
      isShowEmploymentDetailsModal={isShowEmploymentDetailsModal}
      setIsShowEmploymentDetailsModal={setIsShowEmploymentDetailsModal}
      isShowEditBioModal={isShowEditBioModal}
      setIsShowEditBioModal={setIsShowEditBioModal}
      isShowContactInformationModal={isShowContactInformationModal}
      setIsShowContactInformationModal={setIsShowContactInformationModal}
      showCountryModal={showCountryModal}
      setShowCountryModal={setShowCountryModal}
      showStateRegionModal={showStateRegionModal}
      setShowStateRegionModal={setShowStateRegionModal}
      isShowAddLicenseCertification={isShowAddLicenseCertification}
      setIsShowAddLicenseCertification={setIsShowAddLicenseCertification}
      showIssueDateMonthModal={showIssueDateMonthModal}
      setShowIssueDateMonthModal={setShowIssueDateMonthModal}
      showIssueDateYearsModal={showIssueDateYearsModal}
      setShowIssueDateYearsModal={setShowIssueDateYearsModal}
      showExpirationDateMonthModal={showExpirationDateMonthModal}
      setShowExpirationDateMonthModal={setShowExpirationDateMonthModal}
      showExpirationDateYearsModal={showExpirationDateYearsModal}
      setShowExpirationDateYearsModal={setShowExpirationDateYearsModal}
      uploadProfileImage={uploadProfileImage}
      profileImage={profileImage}
      firstName={firstName}
      setFirstName={setFirstName}
      middleName={middleName}
      setMiddleName={setMiddleName}
      lastName={lastName}
      setLastName={setLastName}
      email={email}
      setEmail={setEmail}
      alternativeEmail={alternativeEmail}
      setAlternativeEmail={setAlternativeEmail}
      submit={submit}
      isLoading={isLoading}
      profileDetails={profileDetails}
      userData={userData}
      about={about}
      setAbout={setAbout}
      hobbies={hobbies}
      setHobbies={setHobbies}
      favoriteBooks={favoriteBooks}
      setFavoriteBooks={setFavoriteBooks}
      musicPreference={musicPreference}
      setMusicPreference={setMusicPreference}
      sports={sports}
      setSports={setSports}
      updateEditBio={updateEditBio}
      editBioData={editBioData}
      showEmergencyContactModal={showEmergencyContactModal}
      setShowEmergencyContactModal={setShowEmergencyContactModal}
      showEmergencyContactModalInputs={showEmergencyContactModalInputs}
      setShowEmergencyContactModalInputs={setShowEmergencyContactModalInputs}
      emergencyContactFirstName={emergencyContactFirstName}
      setEmergencyContactFirstName={setEmergencyContactFirstName}
      emergencyContactLastName={emergencyContactLastName}
      setEmergencyContactLastName={setEmergencyContactLastName}
      emergencyContactMiddleName={emergencyContactMiddleName}
      setEmergencyContactMiddleName={setEmergencyContactMiddleName}
      emergencyContactRelationShip={emergencyContactRelationShip}
      setEmergencyContactRelationShip={setEmergencyContactRelationShip}
      emergencyContactOfficePhone={emergencyContactOfficePhone}
      setEmergencyContactOfficePhone={setEmergencyContactOfficePhone}
      emergencyContactMobilePhone={emergencyContactMobilePhone}
      setEmergencyContactMobilePhone={setEmergencyContactMobilePhone}
      emergencyContactSubmit={emergencyContactSubmit}
      isEmergencyContactLoading={isEmergencyContactLoading}
      emergencyContactData={emergencyContactData}
      removeEmergencyContact={removeEmergencyContact}
      submitContactInfo={submitContactInfo}
      contactInfoMobilePhone={contactInfoMobilePhone}
      setContactInfoMobilePhone={setContactInfoMobilePhone}
      contactInfoAddress={contactInfoAddress}
      setContactInfoAddress={setContactInfoAddress}
      contactInfoCity={contactInfoCity}
      setContactInfoCity={setContactInfoCity}
      contactInfoPostalCode={contactInfoPostalCode}
      setContactInfoPostalCode={setContactInfoPostalCode}
      contactInIsLoading={contactInIsLoading}
      contactInformationData={contactInformationData}
      // get all users from database and show this section
      showDirectManagerModal={showDirectManagerModal}
      setShowDirectManagerModal={setShowDirectManagerModal}
    />
  );
};

export default MyProfile;
