import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Button, StyleSheet, ScrollView, FlatList, StatusBar } from 'react-native';
import storybook from './storybook';
//import { Button } from './src/components/Button';
import { Login } from './src/views/Login';
import { ForgotPassword } from './src/views/ForgotPassword';
import { SignUp } from './src/views/SignUp';
import 'react-native-gesture-handler';
import { NavigationContainer, StackNavigationState } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const IS_STORYBOOK = false;

const LoginStack = createStackNavigator();

const LoginStackScreen: React.FC = () => {
    return (
        <NavigationContainer>
            <LoginStack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#1E1F28'
                    },
                    headerTintColor: '#F7F7F7',
                    headerTitleStyle: {
                        fontSize: 18,
                        lineHeight: 22,
                    },
                    headerTitleAlign: 'center',
                }}
            >
                <LoginStack.Screen name="Login" component={Login} options={{ title: '' }} />
                <LoginStack.Screen name="Forgot" component={ForgotPassword} options={{ title: '' }} />
                <LoginStack.Screen name="SignUp" component={SignUp} options={{ title: '' }} />
            </LoginStack.Navigator>
        </NavigationContainer>
    );
};

// const ForgotStack = createStackNavigator();

// const ForgotStackScreen: React.FC = () => {
//     return (
//         <ForgotStack.Navigator>
//             <ForgotStack.Screen name="Forgot" component={ForgotPassword} />
//             <ForgotStack.Screen name="Login" component={Login} />
//         </ForgotStack.Navigator>
//     );
// };

// const App: React.FC<{ navigation: StackNavigationProp<any> }> = ({ navigation }) => {
//     return <LoginStackScreen />;
// };

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
    return (
        <LoginStackScreen />
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="Forgot" component={ForgotPassword} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

//const Tab = createBottomTabNavigator();

// const HomeScreen: React.FC<{ navigation: StackNavigationProp<any> }> = ({ navigation }) => {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Home!</Text>
//             <TouchableOpacity>
//                 <Button title='go to settings' onPress={() => navigation.navigate('Settings')}/>
//             </TouchableOpacity>
//         </View>

//     );
// };

// const SettingsScreen: React.FC = () => {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>Settings!</Text>
//         </View>
//       );
// }

// const App: React.FC = () => {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator>
//                 <Tab.Screen name="Home" component={HomeScreen} />
//                 <Tab.Screen name="Settings" component={SettingsScreen} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// };

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
