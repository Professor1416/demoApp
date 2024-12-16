import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { name: 'Feed', icon: 'home-outline' },
  { name: 'Search', icon: 'search-outline' },
  { name: 'Reels', icon: 'play-outline' },
  { name: 'Notifications', icon: 'notifications-outline' },
  { name: 'Profile', icon: 'person-outline' },
];

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.navbar}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.navButton}
          onPress={() => setActiveTab(tab.name)}
        >
          <Ionicons
            name={tab.icon as any} // Type assertion for dynamic icon names
            size={24}
            color={activeTab === tab.name ? '#fff' : '#888'}
          />
          <Text style={[styles.navText, activeTab === tab.name && styles.activeNavText]}>
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#1a1a1d',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    color: '#888',
    fontSize: 12,
  },
  activeNavText: {
    color: '#fff',
  },
});
