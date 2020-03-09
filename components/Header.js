import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>PhoneSynth</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Header;
