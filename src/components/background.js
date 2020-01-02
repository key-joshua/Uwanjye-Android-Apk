import React from 'react';
import { StyleSheet, Image } from 'react-native';

function Background() {
  return (
    <Image style={styles.homeImage} source={require('../../assets/uwanjye.gif')} />
  );
}

const styles = StyleSheet.create({

  homeImage: {
    width: 300, 
    height: 300
  },
});

export default Background;
