import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './components/LoginUI'; 
import Profile from './components/ProfileUI'; 

export default function App() {
  return (
    
  <Login></Login> 
    
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
