import React from 'react';
import {View, Text, ScrollView, FlatList, Pressable} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import {SvgUri} from 'react-native-svg';

import Header from '../Header/Header';
import styles from './styles';
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: 0,
    name: 'time off schedule',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_Booked_re_vtod.svg',
  },
  {
    id: 1,
    name: 'time off balance',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_time_management_30iu.svg',
  },
  {
    id: 2,
    name: 'office location',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_in_the_office_o44c.svg',
  },
  {
    id: 3,
    name: 'employee gender',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_people_tax5.svg',
  },
  {
    id: 4,
    name: 'employee age',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_Connected_re_lmq2.svg',
  },
  {
    id: 5,
    name: 'holiday list',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_festivities_tvvj.svg',
  },
  {
    id: 6,
    name: 'birthday list',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_happy_birthday_s72n.svg',
  },
  {
    id: 7,
    name: 'departments',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_team_spirit_hrr4.svg',
  },
  {
    id: 8,
    name: 'children',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_children_4rtb.svg',
  },
  {
    id: 9,
    name: 'time off by employee',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_quitting_time_dm8t.svg',
  },
  {
    id: 10,
    name: 'headcounts',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_Around_the_world_re_n353.svg',
  },
  {
    id: 11,
    name: 'hired vs left',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_professor_8lrt.svg',
  },
  {
    id: 12,
    name: 'employee turnover',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_contract_uy56.svg',
  },
  {
    id: 13,
    name: 'duration of work',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_professor_8lrt.svg',
  },
  {
    id: 14,
    name: 'equipment and license',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_detailed_analysis_xn7y.svg',
  },
  {
    id: 15,
    name: 'employee levels',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_grades_j6jn.svg',
  },
  {
    id: 16,
    name: 'licenses & certifications',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_certification_aif8.svg',
  },
  {
    id: 17,
    name: 'termination/Dismissal reason',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_termination_u1it.svg',
  },
  {
    id: 18,
    name: 'termination/Dismissal',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_Live_collaboration_re_60ha.svg',
  },
  {
    id: 19,
    name: 'performance goals',
    img: 'https://kesewed.brainyhr.io/images/reports/undraw_Live_collaboration_re_60ha.svg',
  },
];

const ReportsMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>reports</Text>
        </View>

        <View style={styles.headingContainer}>
          <HomeIcon
            name="home"
            size={15}
            color="green"
            style={styles.homeIcon}
          />
          <Text style={styles.slash}>/</Text>
          <Text style={styles.headingText}>company reports</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item, index) => item.id.toString()}
          numColumns={2}
          renderItem={({item, index}) => (
            <>
              <Pressable
                style={({pressed}) => [
                  styles.card,
                  pressed ? tw`bg-gray-100` : tw`bg-white`,
                ]}>
                <View style={styles.cardImage}>
                  <SvgUri width="130" height="130" uri={item.img} />
                </View>
                <View style={styles.itemNameContainer}>
                  <Text style={styles.itemName}>{item.name}</Text>
                </View>
              </Pressable>
            </>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default ReportsMarkup;
