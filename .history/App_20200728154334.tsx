import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, FlatList, StatusBar } from 'react-native';
import storybook from './storybook';
import Button from './src/components/Button';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const IS_STORYBOOK = false;

const Tab = createBottomTabNavigator();

const HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <View>
                <Text>
                    1111
                </Text>
                <Text>
                    2222
                </Text>
                <Text>
                    3333
                </Text>
            </View>
        </NavigationContainer>
    );
};

// interface SkillProps {
//     title: string;
//     logo: string;
//     hours: number;
// }

// // const skills = [
// //     {
// //         title: 'Java',
// //         logo: '👋',
// //         hours: 5000,
// //     },
// //     {
// //         title: 'PHP',
// //         logo: '👋',
// //         hours: 200,
// //     },
// //     {
// //         title: 'React Native',
// //         logo: '👋',
// //         hours: 4120,
// //     },
// //     {
// //         title: 'React',
// //         logo: '👋',
// //         hours: 380,
// //     },
// //     {
// //         title: 'TypeScript',
// //         logo: '👋',
// //         hours: 450,
// //     },
// //     {
// //         title: 'JavaScript',
// //         logo: '👋',
// //         hours: 790,
// //     },
// //     {
// //         title: 'Kotlin',
// //         logo: '👋',
// //         hours: 10,
// //     },
// //     {
// //         title: 'C++',
// //         logo: '👋',
// //         hours: 410,
// //     },
// //     {
// //         title: 'Scala',
// //         logo: '👋',
// //         hours: 30,
// //     },
// //     {
// //         title: 'Python',
// //         logo: '👋',
// //         hours: 50,
// //     },
// //     {
// //         title: 'Ruby',
// //         logo: '👋',
// //         hours: 5000,
// //     },
// //     {
// //         title: 'C#',
// //         logo: '👋',
// //         hours: 20,
// //     },
// //     {
// //         title: 'Swift',
// //         logo: '👋',
// //         hours: 1,
// //     },
// //     {
// //         title: 'g',
// //         logo: '👋',
// //         hours: 0,
// //     },
// //     {
// //       title: 'f',
// //       logo: '👋',
// //       hours: 5000,
// //   },
// //   {
// //       title: 'd',
// //       logo: '👋',
// //       hours: 200,
// //   },
// //   {
// //       title: 's',
// //       logo: '👋',
// //       hours: 4120,
// //   },
// //   {
// //       title: 'a',
// //       logo: '👋',
// //       hours: 380,
// //   },
// //   {
// //       title: 'p',
// //       logo: '👋',
// //       hours: 450,
// //   },
// //   {
// //       title: 'o',
// //       logo: '👋',
// //       hours: 790,
// //   },
// //   {
// //       title: 'i',
// //       logo: '👋',
// //       hours: 10,
// //   },
// //   {
// //       title: 'u',
// //       logo: '👋',
// //       hours: 410,
// //   },
// //   {
// //       title: 'y',
// //       logo: '👋',
// //       hours: 30,
// //   },
// //   {
// //       title: 't',
// //       logo: '👋',
// //       hours: 50,
// //   },
// //   {
// //       title: 'r',
// //       logo: '👋',
// //       hours: 5000,
// //   },
// //   {
// //       title: 'e',
// //       logo: '👋',
// //       hours: 20,
// //   },
// //   {
// //       title: 'w',
// //       logo: '👋',
// //       hours: 1,
// //   },
// //   {
// //       title: 'q',
// //       logo: '👋',
// //       hours: 0,
// //   },
// // ];

// const generateRandomSkills = (n: number) => {
//   return [...new Array(n)].map((it, i)=> ({
//         title: 'Java' + i,
//         logo: '👋',
//         hours: 5000,
//   }));
// };

// const Skill: React.FC<SkillProps> = ({ title, logo, hours }) => {
//     const [totalHoursSpent, setTotalHoursSpent] = useState<number>(hours);
//     return (
//         <View style={skillStyle.container}>
//             <Text>{title}</Text>
//             <Text>{logo}</Text>
//             <Text>{totalHoursSpent}</Text>
//             <TouchableOpacity onPress={() => setTotalHoursSpent(totalHoursSpent + 1)}>
//                 <Text>Add Hour</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const skillStyle = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         paddingVertical: 35,
//     },
// });

// const App: React.FC = () => {
//   const skills = generateRandomSkills(9)
//     return (
//         // <View style={styles.container}>
//         //   <Text style={[styles.title, styles.redBold]}>My Skills</Text>
//         //     <FlatList
//         //       keyExtractor={(item) => item.title}
//         //       data={skills}
//         //       renderItem={({item})=>(
//         //         <Skill title={item.title} logo={item.logo}
//         //         hours={item.hours} />}
//         //         ListHeaderComponent={item=>item.title}
//         //       />

// <FlatList<SkillProps>
//   data={skills}
//   style={styles.container}
//   renderItem={({item})=>
//     <Skill
//       title={item.title}
//       logo={item.logo}
//       hours={item.hours}
//     />}
//   ListHeaderComponent={<Text style={[styles.title, styles.redBold]}>My Skills</Text>}
//   keyExtractor={item=>item.title}
// />
//     );
// };

//       {/*// <>
//       //   <StatusBar backgroundColor='red' />
//       //   <ScrollView style={styles.container}>
//       //       <Text style={[styles.title, styles.redBold]}>My Skills</Text>
//       //         {skills.map(skill => (
//       //           <Skill key={skill.title} title={skill.title} logo={skill.logo} hours={skill.hours} />
//       //           ))}
//       //   </ScrollView>
//       // </> */}

//          //   </View>

// //   );
// // };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingVertical: 30,
//         paddingHorizontal: 12,
//         backgroundColor: 'lavender',
//     },
//     title: {
//         fontSize: 36,
//         paddingBottom: 8,
//     },
//     redBold: {
//         color: 'red',
//         fontWeight: '900',
//     },
// });

export default IS_STORYBOOK ? storybook : App;
