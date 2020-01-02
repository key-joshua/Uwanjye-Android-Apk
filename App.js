import React from 'react';
import Footer from './src/components/footer';
import Bkgrnd from './src/components/background';
import Contents from './src/components/homeContents';
import { StyleSheet, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Bkgrnd/>
    <Contents/>
    <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d86140',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
