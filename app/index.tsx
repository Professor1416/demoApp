import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import TabContent from './components/TabContent';
import Navbar from './components/Navbar';

const Index: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Feed');

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Tab Content */}
      <TabContent activeTab={activeTab} />

      {/* Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
});
