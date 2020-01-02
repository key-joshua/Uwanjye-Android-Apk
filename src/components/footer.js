import React from 'react';
import { StyleSheet, Text, } from 'react-native';

export default function HomeContents() {
  return (
    <Text style={styles.footer}> Uwanjye &copy; 2020 Developed By Key-Joshua </Text>
  );
}

const styles = StyleSheet.create({

  footer: {
    color: '#fff',
    marginBottom: 10,
    position: 'absolute', 
    bottom:0
  },
});
