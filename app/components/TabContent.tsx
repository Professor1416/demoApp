import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import FeedContent from './FeedContent';
import ReelsContent from './ReelsContent';
import SearchContent from './SearchContent';
import NotificationsContent from './NotificationsContent';
import ProfileContent from './ProfileContent'; // Import ProfileContent

interface TabContentProps {
  activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  const renderContent = (): React.ReactNode => {
    switch (activeTab) {
      case 'Feed':
        return <FeedContent />;
      case 'Reels':
        return <ReelsContent />;
      case 'Search':
        return <SearchContent />;
      case 'Notifications':
        return <NotificationsContent />;
      case 'Profile':
        return <ProfileContent />;
      default:
        return <Text style={styles.contentText}>Welcome!</Text>;
    }
  };

  return <View style={styles.content}>{renderContent()}</View>;
};

export default TabContent;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    color: '#fff',
    fontSize: 18,
  },
});
