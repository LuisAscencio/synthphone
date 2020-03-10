import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header';

import Item from './components/Item';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Item />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
