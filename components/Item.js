import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Item = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Item</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 30,
    backgroundColor: 'darkblue',
  },
  text: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Item;
