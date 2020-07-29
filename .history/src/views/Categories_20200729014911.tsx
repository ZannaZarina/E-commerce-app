import React from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigationBar, NavBar } from '../components';

const Header: React.FC = () => {
   return (
       <View>
           <NavBar goBack titlesearch onPress={() => Alert.alert('search')} />
           <Text style={headerStyle.header}>My profile</Text>
       </View>
   );
};


export const Categories: React.FC = () => {
   return 
}; 