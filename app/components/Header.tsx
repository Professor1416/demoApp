import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Instagram</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#1a1a1d',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
