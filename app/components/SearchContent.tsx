import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';

const SearchContent: React.FC = () => {
  const [query, setQuery] = useState('');

  const users = [
    { id: '1', username: '@john_doe', image: 'https://via.placeholder.com/150' },
    { id: '2', username: '@jane_smith', image: 'https://via.placeholder.com/150' },
    { id: '3', username: '@traveler_bug14', image: 'https://via.placeholder.com/150' },
    { id: '4', username: '@explorer', image: 'https://via.placeholder.com/150' },
    { id: '5', username: '@nature_lover', image: 'https://via.placeholder.com/150' },
    { id: '6', username: '@tech_guru', image: 'https://via.placeholder.com/150' },
  ];

  const screenWidth = Dimensions.get('window').width;
  const gridItemSize = (screenWidth - 30) / 2; // Adjust size based on screen width and padding.

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(query.toLowerCase())
  );

  const renderUser = ({ item }: { item: { id: string; username: string; image: string } }) => (
    <TouchableOpacity style={[styles.gridItem, { width: gridItemSize, height: gridItemSize }]}>
      <Image source={{ uri: item.image }} style={styles.userImage} />
      <Text style={styles.userText}>{item.username}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search users"
        placeholderTextColor="#888"
        value={query}
        onChangeText={setQuery}
      />
      
      {/* Grid Layout */}
      <FlatList
        data={filteredUsers}
        renderItem={renderUser}
        keyExtractor={(item) => item.id}
        numColumns={2} // Create a grid with two columns
        contentContainerStyle={styles.userList}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

export default SearchContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000', // Dark background for Instagram-like feel
  },
  searchInput: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  userList: {
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  gridItem: {
    backgroundColor: '#222',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  userImage: {
    width: '90%',
    height: '70%', // Adjust image height dynamically
    resizeMode: 'cover',
  },
  userText: {
    color: '#fff',
    fontSize: 14,
    padding: 5,
    textAlign: 'center',
  },
});
