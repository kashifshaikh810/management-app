import React, {useState} from 'react';
import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import styles from './styles';

const SearchEmplyeesModal = props => {
  return (
    <View style={styles.container}>
      {props.companyEmployeesData.length >= 1 ? (
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={props?.companyEmployeesData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <>
                <Pressable
                  style={styles.flatList}
                  onPress={() => props.goToEmployeeProfile(item, index)}>
                  <View style={styles.activeTextParent}>
                    <View
                      style={[
                        styles.activeTextContainer,
                        {
                          backgroundColor:
                            item.activityType === 'inActive'
                              ? '#b3b3b3'
                              : '#13bd7c',
                        },
                        {
                          width: item.activityType === 'inActive' ? 60 : 50,
                        },
                      ]}>
                      <Text style={styles.activeText}>{item.activityType}</Text>
                    </View>
                  </View>

                  <View style={styles.imageAndNameContainer}>
                    <View
                      style={[
                        styles.userDPImageContainer,
                        {
                          borderColor:
                            item.activityType === 'inActive'
                              ? '#b3b3b3'
                              : '#13bd7c',
                        },
                      ]}>
                      {item.profileImage ? (
                        <Image
                          source={{uri: item.profileImage}}
                          style={styles.userDPImage}
                        />
                      ) : (
                        <Image
                          source={require('../../../../Assists/images/defaultProfile.png')}
                          style={styles.userDPImage}
                        />
                      )}
                    </View>

                    <View style={styles.namePositionAndDepartmentContainer}>
                      <Pressable>
                        {({pressed}) => (
                          <Text
                            style={[
                              styles.fistNameAndLastName,
                              {color: pressed ? '#006f44' : '#263238'},
                            ]}>
                            {item.firstName} {item.lastName}
                          </Text>
                        )}
                      </Pressable>
                      <Text style={styles.text}>
                        Position: {item?.position || 'N/A'}
                      </Text>
                      <Text style={styles.text}>
                        Department: {item?.Department || 'N/A'}
                      </Text>
                    </View>
                  </View>
                </Pressable>
                <View style={styles.line} />
              </>
            )}
          />
        </ScrollView>
      ) : (
        <View style={styles.noResults}>
          <Text>No Results</Text>
        </View>
      )}
    </View>
  );
};

export default SearchEmplyeesModal;
