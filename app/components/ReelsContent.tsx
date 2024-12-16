import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const ReelsContent: React.FC = () => {
  const reels = [
    { id: '1', caption: 'Dancing through the streets!', videoUrl: 'https://via.placeholder.com/300x200' },
    { id: '2', caption: 'My latest travel vlog!', videoUrl: 'https://via.placeholder.com/300x200' },
    { id: '3', caption: 'Just a little bit of comedy to brighten your day!', videoUrl: 'https://via.placeholder.com/300x200' },
  ];

  const renderReel = ({ item }: { item: { id: string; caption: string; videoUrl: string } }) => (
    <View style={styles.reelContainer}>
      
      <Text style={styles.reelCaption}>{item.caption}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={reels}
        renderItem={renderReel}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.reelsList}
      />
    </View>
  );
};

export default ReelsContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  reelsList: {
    paddingBottom: 20,
  },
  reelContainer: {
    marginBottom: 20,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
  },
  reelImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  reelCaption: {
    color: '#fff',
    fontSize: 16,
  },
});
