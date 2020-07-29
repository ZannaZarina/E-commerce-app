import React from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigationBar, NavBar } from '../components';

const Header: React.FC = () => {
   return (
       <View>
           <NavBar goBack title='Categories' search onPress={() => Alert.alert('search')} />
          
       </View>
   );
};

const Men: React.FC = () => {
   return (
       <View style={{ flexDirection: 'row' }}>
           <Image source={require('../../assets/girlPhoto.png')} style={profileStyle.photo} />
           <View>
               <Text style={profileStyle.name}>Matilda Brown</Text>
               <Text style={profileStyle.email}>matildabrown@mail.com</Text>
           </View>
       </View>
   );
};


export const Categories: React.FC = () => {
   return 
}; 