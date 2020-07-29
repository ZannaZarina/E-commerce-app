import React from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigationBar, NavBar } from '../components';

const HeaderMenu: React.FC = () => {
   return (
       <View style={{ flexDirection: 'row' }}>
           <Image source={require('../../assets/girlPhoto.png')} style={profileStyle.photo} />
           <View>
               <Text style={HeaderMenu.name}>Matilda Brown</Text>
               <Text style={profileStyle.email}>matildabrown@mail.com</Text>
           </View>
       </View>
   );
};


export const Categories: React.FC = () => {
   return 

   <NavBar goBack title='Categories' search onPress={() => Alert.alert('search')} />


}; 