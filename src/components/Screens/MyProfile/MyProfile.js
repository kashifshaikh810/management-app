import React, {useEffect, useState} from 'react';
import {Alert, Platform, ToastAndroid} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';

import MyProfileMarkup from './MyProfileMarkup';
import {Auth, Database, Storage} from '../../firebaseTools/index';
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchContactInformationData,
  fetchEducationData,
  fetchEmergencyContactData,
  fetchLicensesAndCertificationsData,
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
  const [refreshing, setRefreshing] = useState(false);

  // contact information modal all inputs
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [showEducationModalInputs, setShowEducationModalInputs] =
    useState(false);
  const [collageOrUniversity, setCollageOrUniversity] = useState('');
  const [degree, setDegree] = useState('');
  const [major, setMajor] = useState('');
  const [yearGraduated, setYearGraduated] = useState('');
  const [userEducationData, setUserEducationData] = useState({});
  const [isEducationLoading, setIsEducationLoading] = useState(false);

  // add license modal all inputs
  const [addLicenseName, setAddLicenseName] = useState('');
  const [addLicenseIssuing, setAddLicenseIssuing] = useState('');
  const [addLicenseId, setAddLicenseId] = useState('');
  const [addLicenseUrl, setAddLicenseUrl] = useState('');
  const [licenseCertificationsData, setLicenseCertificationsData] = useState(
    {},
  );
  const [
    isLicenseAndCertificationsLoading,
    setIsLicenseAndCertificationsLoading,
  ] = useState(false);
  const [goToBottom, setGoToBottom] = useState(false);

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
  const {
    currUserData,
    profileData,
    bioData,
    contactData,
    contactInfoData,
    educationData,
    licenseAndCertificationsData,
  } = useSelector(state => state?.reduc);
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
      })
        .then(() => {
          setProfileImage(file);
        })
        .catch(err => {
          console.log(err);
        });
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
      firstName ||
      lastName ||
      profileImage ||
      gender ||
      selectSingleOrMarried ||
      dateOfBirth ||
      email ||
      language ||
      middleName ||
      timeZone
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
                  .ref(`/profileDetails/${currUserUid}`)
                  .set({
                    userId: currUserUid,
                    profileImage: myDownloadURL,
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName,
                    gender: gender,
                    maritalStatus: selectSingleOrMarried,
                    dateOfBirth: dateOfBirth,
                    email: email,
                    alternativeEmail: alternativeEmail,
                    language: language,
                    timeZone: timeZone,
                  })
                  .then(() => {
                    Database()
                      .ref('/userSignUp/')
                      .child(currUserUid)
                      .update({
                        firstName: firstName,
                        middleName: middleName,
                        lastName: lastName,
                      })
                      .then(() => {
                        Alert.alert('Employee has been updated successfully.');
                        setShowProfileDetailsModal(false);
                        setIsLoading(false);
                      })
                      .catch(err => {
                        console.log(err);
                      });
                  })
                  .catch(err => {
                    console.log(err);
                  });
              });
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        Database()
          .ref(`/profileDetails/${currUserUid}`)
          .update({
            userId: currUserUid,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            gender: gender,
            maritalStatus: selectSingleOrMarried,
            dateOfBirth: dateOfBirth,
            email: email,
            alternativeEmail: alternativeEmail,
            language: language,
            timeZone: timeZone,
          })
          .then(() => {
            Database()
              .ref('/userSignUp/')
              .child(currUserUid)
              .update({
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
              })
              .then(() => {
                Alert.alert('Employee has been updated successfully.');
                setShowProfileDetailsModal(false);
                setIsLoading(false);
              })
              .catch(err => {
                console.log(err);
              });
          })
          .catch(err => {
            console.log(err);
          });
      }
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
      Database()
        .ref(`/editBio/${currUserUid}`)
        .set({
          about: about,
          hobbies: hobbies,
          favoriteBooks: favoriteBooks,
          musicPreference: musicPreference,
          sports: sports,
        })
        .then(() => {
          setIsShowEditBioModal(false);
          Alert.alert('Profile has been updated successfully.');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const emergencyContactSubmit = () => {
    let currUserUid = Auth()?.currentUser?.uid;
    if (
      emergencyContactFirstName ||
      emergencyContactLastName ||
      emergencyContactRelationShip ||
      emergencyContactOfficePhone ||
      emergencyContactMobilePhone
    ) {
      setIsEmergencyContactLoading(true);
      Database()
        .ref(`/emergencyContact/${currUserUid}`)
        .set({
          userId: currUserUid,
          emergencyContactFirstName: emergencyContactFirstName,
          emergencyContactMiddleName: emergencyContactMiddleName,
          emergencyContactLastName: emergencyContactLastName,
          emergencyContactRelationShip: emergencyContactRelationShip,
          emergencyContactOfficePhone: emergencyContactOfficePhone,
          emergencyContactMobilePhone: emergencyContactMobilePhone,
        })
        .then(() => {
          setShowEmergencyContactModal(false);
          setIsEmergencyContactLoading(false);
          Alert.alert('Profile has been updated successfully.');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const removeEmergencyContact = () => {
    let uid = Auth()?.currentUser?.uid;
    Database()
      .ref(`/emergencyContact/${uid}`)
      .remove()
      .then(() => {
        setShowEmergencyContactModalInputs(false);
        setShowEmergencyContactModal(false);
        Alert.alert('contact has been removed successfully.');
      })
      .catch(() => {
        setShowEmergencyContactModalInputs(false);
        setShowEmergencyContactModal(false);
      });
  };

  const submitContactInfo = () => {
    let uid = Auth()?.currentUser?.uid;
    let country = showCountryModal?.chooseVal;
    let stateAndRegion = showStateRegionModal?.chooseVal;

    if (
      contactInfoMobilePhone ||
      country ||
      contactInfoAddress ||
      contactInfoCity ||
      stateAndRegion ||
      contactInfoPostalCode
    ) {
      setContactInIsLoading(true);
      Database()
        .ref(`/contactInformation/${uid}`)
        .set({
          userId: uid,
          contactInfoMobilePhone: contactInfoMobilePhone,
          country: country,
          contactInfoAddress: contactInfoAddress,
          contactInfoCity: contactInfoCity,
          stateAndRegion: stateAndRegion,
          contactInfoPostalCode: contactInfoPostalCode,
        })
        .then(() => {
          setContactInIsLoading(false);
          setIsShowContactInformationModal(false);
          Alert.alert('Profile has been updated successfully.');
        })
        .catch(err => {
          setContactInIsLoading(false);
          setIsShowContactInformationModal(false);
        });
    }
  };

  const removeEducation = () => {
    let uid = Auth()?.currentUser?.uid;
    Database()
      .ref(`/education/${uid}`)
      .remove()
      .then(() => {
        setShowEducationModal(false);
        setShowEducationModalInputs(false);
        Alert.alert('Education has been updated successfully.');
      })
      .catch(err => {
        setShowEducationModal(false);
        setShowEducationModalInputs(false);
        console.log(err);
      });
  };

  const educationSubmit = () => {
    let uid = Auth()?.currentUser?.uid;
    if (collageOrUniversity || degree || major || yearGraduated) {
      setIsEducationLoading(true);
      Database()
        .ref(`/education/${uid}`)
        .set({
          collageOrUniversity: collageOrUniversity,
          degree: degree,
          major: major,
          yearGraduated: yearGraduated,
        })
        .then(() => {
          setShowEducationModal(false);
          setIsEducationLoading(false);
          Alert.alert('Education has been updated successfully.');
        })
        .catch(err => {
          setShowEducationModal(false);
          setIsEducationLoading(false);
          console.log(err);
        });
    }
  };

  const submitAddLicense = () => {
    let uid = Auth()?.currentUser?.uid;
    let issueSectionMonth = showIssueDateMonthModal?.chooseVal;
    let issueSectionYear = showIssueDateYearsModal?.chooseVal;
    let expireSectionMonth = showExpirationDateMonthModal?.chooseVal;
    let expireSectionYear = showExpirationDateYearsModal?.chooseVal;

    if (
      addLicenseName ||
      addLicenseIssuing ||
      addLicenseUrl ||
      addLicenseId ||
      issueSectionMonth ||
      issueSectionYear ||
      expireSectionMonth ||
      expireSectionYear
    ) {
      setIsLicenseAndCertificationsLoading(true);
      Database()
        .ref(`/addLicenseOrCertification/${uid}`)
        .set({
          addLicenseName: addLicenseName,
          addLicenseIssuing: addLicenseIssuing,
          addLicenseUrl: addLicenseUrl,
          addLicenseId: addLicenseId,
          issueSectionMonth: issueSectionMonth,
          issueSectionYear: issueSectionYear,
          expireSectionMonth: expireSectionMonth,
          expireSectionYear: expireSectionYear,
        })
        .then(() => {
          setIsLicenseAndCertificationsLoading(false);
          setIsShowAddLicenseCertification(false);
          Alert.alert(
            'AddLicense Or Certification has been updated successfully.',
          );
        })
        .catch(err => {
          console.log(err);
          setIsLicenseAndCertificationsLoading(false);
          setIsShowAddLicenseCertification(false);
        });
    }
  };

  const editLicenseAndCertifications = () => {
    setIsShowAddLicenseCertification(true);
  };

  const deleteLicenseAndCertifications = () => {
    let uid = Auth()?.currentUser?.uid;
    setRefreshing(true);
    Database()
      .ref(`/addLicenseOrCertification/${uid}`)
      .remove()
      .then(() => {
        setRefreshing(false);
        setGoToBottom(true);
        Alert.alert(
          'AddLicense Or Certification has been removed successfully.',
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 100);
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
    setIsShowLanguagesModal({chooseVal: profileData?.language});
    setIsShowZoneModal({chooseVal: profileData?.timeZone});
    setIsShowGenderModal({chooseVal: profileData?.gender});
  }, [profileData, currUserData, refreshing]);

  useEffect(() => {
    setAbout(bioData?.about);
    setHobbies(bioData?.hobbies);
    setFavoriteBooks(bioData?.favoriteBooks);
    setMusicPreference(bioData?.musicPreference);
    setSports(bioData?.sports);
    setEditBioData(bioData);
  }, [bioData, refreshing]);

  useEffect(() => {
    dispatch(fetchEmergencyContactData());
    dispatch(fetchContactInformationData());
    dispatch(fetchEducationData());
    dispatch(fetchLicensesAndCertificationsData());
  }, [refreshing]);

  useEffect(() => {
    setEmergencyContactData(contactData);
    setEmergencyContactFirstName(contactData?.emergencyContactFirstName);
    setEmergencyContactLastName(contactData?.emergencyContactLastName);
    setEmergencyContactMiddleName(contactData?.emergencyContactMiddleName);
    setEmergencyContactRelationShip(contactData?.emergencyContactRelationShip);
    setEmergencyContactOfficePhone(contactData?.emergencyContactOfficePhone);
    setEmergencyContactMobilePhone(contactData?.emergencyContactMobilePhone);
  }, [contactData, refreshing]);

  useEffect(() => {
    setContactInformationData(contactInfoData);
    setContactInfoMobilePhone(contactInfoData?.contactInfoMobilePhone);
    setContactInfoAddress(contactInfoData?.contactInfoAddress);
    setContactInfoCity(contactInfoData?.contactInfoCity);
    setContactInfoPostalCode(contactInfoData?.contactInfoPostalCode);
    setShowCountryModal({chooseVal: contactInfoData?.country});
    setShowStateRegionModal({chooseVal: contactInfoData?.stateAndRegion});
  }, [contactInfoData, refreshing]);

  useEffect(() => {
    setUserEducationData(educationData);
    setCollageOrUniversity(educationData?.collageOrUniversity);
    setDegree(educationData?.degree);
    setMajor(educationData?.major);
    setYearGraduated(educationData?.yearGraduated);
  }, [educationData, refreshing]);

  useEffect(() => {
    setLicenseCertificationsData(licenseAndCertificationsData);
    setAddLicenseName(licenseAndCertificationsData?.addLicenseName);
    setAddLicenseIssuing(licenseAndCertificationsData?.addLicenseIssuing);
    setAddLicenseUrl(licenseAndCertificationsData?.addLicenseUrl);
    setAddLicenseId(licenseAndCertificationsData?.addLicenseId);
    setShowIssueDateMonthModal({
      chooseVal: licenseAndCertificationsData?.issueSectionMonth,
    });
    setShowIssueDateYearsModal({
      chooseVal: licenseAndCertificationsData?.issueSectionYear,
    });
    setShowExpirationDateMonthModal({
      chooseVal: licenseAndCertificationsData?.expireSectionMonth,
    });
    setShowExpirationDateYearsModal({
      chooseVal: licenseAndCertificationsData?.expireSectionYear,
    });
  }, [licenseAndCertificationsData, refreshing]);

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
      onRefresh={onRefresh}
      refreshing={refreshing}
      setRefreshing={setRefreshing}
      showEducationModal={showEducationModal}
      setShowEducationModal={setShowEducationModal}
      showEducationModalInputs={showEducationModalInputs}
      setShowEducationModalInputs={setShowEducationModalInputs}
      collageOrUniversity={collageOrUniversity}
      setCollageOrUniversity={setCollageOrUniversity}
      degree={degree}
      setDegree={setDegree}
      major={major}
      setMajor={setMajor}
      yearGraduated={yearGraduated}
      setYearGraduated={setYearGraduated}
      educationSubmit={educationSubmit}
      removeEducation={removeEducation}
      userEducationData={userEducationData}
      isEducationLoading={isEducationLoading}
      setIsEducationLoading={setIsEducationLoading}
      addLicenseName={addLicenseName}
      setAddLicenseName={setAddLicenseName}
      addLicenseIssuing={addLicenseIssuing}
      setAddLicenseIssuing={setAddLicenseIssuing}
      addLicenseId={addLicenseId}
      setAddLicenseId={setAddLicenseId}
      addLicenseUrl={addLicenseUrl}
      setAddLicenseUrl={setAddLicenseUrl}
      submitAddLicense={submitAddLicense}
      licenseCertificationsData={licenseCertificationsData}
      editLicenseAndCertifications={editLicenseAndCertifications}
      deleteLicenseAndCertifications={deleteLicenseAndCertifications}
      isLicenseAndCertificationsLoading={isLicenseAndCertificationsLoading}
      goToBottom={goToBottom}
      // get all users from database and show this section
      showDirectManagerModal={showDirectManagerModal}
      setShowDirectManagerModal={setShowDirectManagerModal}
    />
  );
};

export default MyProfile;
