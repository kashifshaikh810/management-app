import React from 'react';
import {View, Text, ScrollView, Pressable, TextInput} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import HandIcon from 'react-native-vector-icons/FontAwesome';
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ArrowDownIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Picker} from '@react-native-picker/picker';
import SelectArrowIcon from 'react-native-vector-icons/Entypo';
import tw from 'tailwind-react-native-classnames';

import Header from '../Header/Header';
import styles from './styles';

const refineFieldsTextInputSection = props => {
  if (props.showRefineFieldsInputSection) {
    return (
      <View>
        <View style={[styles.fieldInputContainer, styles.marginTop]}>
          <Text style={styles.fieldLabelText}>field</Text>
          <View style={styles.fieldInput}>
            <TextInput />
          </View>
        </View>

        <View style={styles.fieldInputContainer}>
          <Text style={styles.fieldLabelText}>type</Text>
          <View style={[styles.fieldInput, styles.pickerContainer]}>
            <Picker
              mode="dropdown"
              selectedValue={props.terminationReasonActiveOrNotAction}
              onValueChange={(itemValue, itemIndex) =>
                props.setTerminationReasonActiveOrNotAction(itemValue)
              }>
              <Picker.Item label="Text" value="Text" />
              <Picker.Item label="Textarea" value="Textarea" />
            </Picker>
          </View>
        </View>

        <View style={[styles.headingContainer, styles.selfEnd]}>
          <Pressable
            android_ripple={{color: '#f1f1f1'}}
            style={() => [styles.clearPressable]}>
            <Text style={styles.clearPressableText}>clear</Text>
          </Pressable>

          <Pressable
            android_ripple={{color: '#f3f3f3'}}
            style={() => [
              styles.savePressable,
              styles.marginLeft,
              styles.searchPressable,
            ]}>
            <Text style={styles.savePressableText}>search</Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

const CompanyCustomFieldsMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>custom fields</Text>
          <View style={[styles.headingContainer, styles.marginTop]}>
            <HomeIcon name="home" size={15} color="green" />
            <Text style={styles.slash}>/</Text>
            <Text style={styles.headingText}>settings</Text>
            <Text style={styles.slash}>/</Text>
            <Text style={styles.headingText}>custom fields</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>employee custom tabs</Text>

            <View style={styles.createPressableContainer}>
              <Pressable style={styles.createPressable}>
                <Text style={styles.createPressableText}>
                  create employee tab
                </Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.line} />

          <View style={styles.customTabCard}>
            <View
              style={[
                styles.headingContainer,
                styles.iconsAndContentContainer,
              ]}>
              <Text style={styles.contentText}>aaaaaaaa</Text>

              <View style={[styles.headingContainer, styles.iconsContainer]}>
                <Pressable>
                  {({pressed}) => (
                    <EditIcon
                      name="edit"
                      size={17}
                      color={pressed ? 'green' : '#b3b3b3'}
                    />
                  )}
                </Pressable>
                <Pressable>
                  {({pressed}) => (
                    <DeleteIcon
                      name="delete"
                      size={17}
                      color={pressed ? 'green' : '#b3b3b3'}
                      style={styles.marginLeft}
                    />
                  )}
                </Pressable>
              </View>
            </View>

            <View style={styles.dropHereTextContainer}>
              <Text style={styles.dropHereText}>drop here</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>fields</Text>

            <View style={styles.createPressableContainer}>
              <Pressable style={styles.createPressable}>
                <Text style={styles.createPressableText}>
                  create custom field
                </Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.line} />

          <View style={[styles.marginLeft, styles.marginBottom]}>
            <Pressable
              style={[
                styles.headingContainer,
                styles.marginLeft,
                styles.marginTop,
              ]}
              onPress={() =>
                props.setShowRefineFieldsInputSection(
                  !props.showRefineFieldsInputSection,
                )
              }>
              <Text style={styles.refineText}>refine fields</Text>
              <ArrowDownIcon
                name={
                  props.showRefineFieldsInputSection
                    ? 'arrow-up-bold-circle'
                    : 'arrow-down-bold-circle'
                }
                style={styles.arrowIcon}
                size={20}
                color="#006f44"
              />
            </Pressable>

            {refineFieldsTextInputSection({...props})}

            <View style={styles.dragAFieldCard}>
              <HandIcon
                name="hand-o-down"
                size={20}
                color="#000"
                style={styles.marginLeft}
              />

              <Text style={styles.dragAFieldText}>Drag a field to tab</Text>

              <View style={styles.iconsContainer}>
                <Pressable style={styles.gotItPressable}>
                  {({pressed}) => (
                    <Text
                      style={[
                        styles.gotItText,
                        pressed ? tw`text-black` : tw`text-green-400`,
                      ]}>
                      got it
                    </Text>
                  )}
                </Pressable>
              </View>
            </View>
          </View>

          <View>
            <View style={[styles.headingContainer, styles.tableContainer]}>
              <View style={styles.headingContainer}>
                <SelectArrowIcon
                  name="select-arrows"
                  size={15}
                  color="#b3b3b3"
                  style={styles.selectIcon}
                />
                <Text style={styles.tableHeading}>field</Text>
              </View>

              <View style={styles.headingContainer}>
                <SelectArrowIcon
                  name="select-arrows"
                  size={15}
                  color="#b3b3b3"
                  style={styles.selectIcon}
                />
                <Text style={styles.tableHeading}>type</Text>
              </View>
            </View>

            <View style={[styles.headingContainer, tw`flex-1 justify-around`]}>
              <Text>a</Text>
              <Text>v</Text>
            </View>

            <View style={[styles.headingContainer, styles.tableContainer]}>
              <View style={styles.headingContainer}>
                <SelectArrowIcon
                  name="select-arrows"
                  size={15}
                  color="#b3b3b3"
                  style={styles.selectIcon}
                />
                <Text style={styles.tableHeading}>required</Text>
              </View>

              <Text style={styles.actionsText}>actions</Text>
            </View>
            <View style={[styles.headingContainer, tw`flex-1 justify-around`]}>
              <Text>a</Text>
              <Text>v</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CompanyCustomFieldsMarkup;
