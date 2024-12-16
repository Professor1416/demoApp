import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import moment from 'moment'; // Import moment.js

// Define the Notification interface
interface Notification {
  id: string;
  message: string;
  userAvatar: string;
  timestamp: string;
}

const NotificationsContent: React.FC = () => {
  const [groupedNotifications, setGroupedNotifications] = useState<Record<string, Notification[]>>({});

  const notifications: Notification[] = [
    { id: '1', message: 'John Doe liked your post.', userAvatar: 'https://via.placeholder.com/50', timestamp: '2024-12-07T12:00:00Z' },
    { id: '2', message: 'Jane Smith started following you.', userAvatar: 'https://via.placeholder.com/50', timestamp: '2024-12-06T15:30:00Z' },
    { id: '3', message: 'Your reel has been shared by a friend!', userAvatar: 'https://via.placeholder.com/50', timestamp: '2024-12-05T09:15:00Z' },
    { id: '4', message: 'Alex commented on your photo.', userAvatar: 'https://via.placeholder.com/50', timestamp: '2024-12-07T10:30:00Z' },
    { id: '5', message: 'Maria started following you.', userAvatar: 'https://via.placeholder.com/50', timestamp: '2024-12-06T08:00:00Z' },
    { id: '6', message: 'Your video was featured on the Explore page.', userAvatar: 'https://via.placeholder.com/50', timestamp: '2024-12-05T18:45:00Z' },
    // Add more notifications with appropriate timestamps and messages
  ];

  // Group notifications by date
  const groupNotificationsByDate = (notifications: Notification[]) => {
    const grouped = notifications.reduce((acc, notification) => {
      const date = moment(notification.timestamp).format('YYYY-MM-DD');
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(notification);
      return acc;
    }, {} as Record<string, Notification[]>); // Declare the type of grouped object
    return grouped;
  };

  // Helper function to display relative time (e.g., '7 days ago')
  const timeAgo = (timestamp: string) => {
    return moment(timestamp).fromNow();
  };

  // Render each notification item
  const renderNotification = ({ item }: { item: Notification }) => (
    <View style={styles.notificationContainer}>
      <Image source={{ uri: item.userAvatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.notificationText}>{item.message}</Text>
        <Text style={styles.timeText}>{timeAgo(item.timestamp)}</Text>
      </View>
    </View>
  );

  // Render the group header (date)
  const renderGroupHeader = (groupDate: string) => {
    const formattedDate = moment(groupDate).format('MMMM D, YYYY');
    return <Text style={styles.groupHeader}>{formattedDate}</Text>;
  };

  // Use useEffect to group notifications when the component is mounted
  useEffect(() => {
    const grouped = groupNotificationsByDate(notifications);
    setGroupedNotifications(grouped);
  }, []);

  return (
    <View style={styles.container}>
      {Object.keys(groupedNotifications).map((groupDate) => (
        <View key={groupDate}>
          {renderGroupHeader(groupDate)}
          <FlatList
            data={groupedNotifications[groupDate]}
            renderItem={renderNotification}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.notificationsList}
          />
        </View>
      ))}
    </View>
  );
};

export default NotificationsContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  notificationsList: {
    paddingBottom: 20,
  },
  notificationContainer: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  notificationText: {
    color: '#fff',
    fontSize: 16,
  },
  timeText: {
    color: '#888',
    fontSize: 12,
    marginTop: 5,
  },
  groupHeader: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
