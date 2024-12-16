import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome icons

const { width, height } = Dimensions.get('window'); // Get screen width and height

const ProfileContent: React.FC = () => {
  const [loading, setLoading] = useState(true); // Loading state for profile content

  // Simulate loading content (e.g., fetch profile data)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds (simulate API call)
    }, 3000);
  }, []);

  // Function to generate loading skeleton grid
  const renderLoadingGrid = () => {
    return (
      <View style={styles.gridContainer}>
        {[...Array(9)].map((_, index) => (
          <View key={index} style={styles.gridItem}>
            <ActivityIndicator size="large" color="#888" />
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}   showsVerticalScrollIndicator={false} >
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: 'https://instagram.fpnq13-3.fna.fbcdn.net/v/t51.2885-19/433083609_1475722899706812_8172456889831092924_n.jpg?_nc_ht=instagram.fpnq13-3.fna.fbcdn.net&_nc_cat=100&_nc_ohc=zBxq1LyrcgkQ7kNvgHBcQJB&_nc_gid=2cca0a42841d4aa5bf210eb8d8cf697a&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYAA6eRP7FVhO9mXEswmpJ_j05rR04IUzYzJNqSFlQ0m0w&oe=67609539&_nc_sid=7a9f4b' }}
            style={styles.profileImage}
          />
          <View style={styles.usernameContainer}>
            <Text style={styles.username}>@traveler_bug14</Text>
            <Text style={styles.bio}>Explorer | Photographer | Tech Enthusiast</Text>
          </View>
        </View>
      </View>

      {/* Statistics */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>120</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>10.5K</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>345</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      {/* Edit Profile and Share Profile Buttons */}
      <View style={styles.profileOptions}>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareProfileButton}>
          <Text style={styles.shareProfileText}>Share Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Story Highlights */}
      <View style={styles.highlightsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.highlightBox}>
            <Image
              source={{ uri: 'https://via.placeholder.com/50' }}
              style={styles.highlightImage}
            />
            <Text style={styles.highlightText}>Travel</Text>
          </View>
          <View style={styles.highlightBox}>
            <Image
              source={{ uri: 'https://via.placeholder.com/50' }}
              style={styles.highlightImage}
            />
            <Text style={styles.highlightText}>Food</Text>
          </View>
          <View style={styles.highlightBox}>
            <Image
              source={{ uri: 'https://via.placeholder.com/50' }}
              style={styles.highlightImage}
            />
            <Text style={styles.highlightText}>Tech</Text>
          </View>
        </ScrollView>
      </View>

      {/* Navigation Bar */}
      <View style={styles.navbarContainer}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="image" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="film" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="tags" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Loading Grid Below Posts */}
      {loading ? renderLoadingGrid() : (
        <View style={styles.gridContainer}>
          {[...Array(9)].map((_, index) => (
            <View key={index} style={styles.gridItem}>
              <Image
                source={{ uri: 'https://via.placeholder.com/150' }}
                style={styles.gridImage}
              />
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default ProfileContent;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileHeader: {
    width: '100%',
    paddingHorizontal: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: width * 0.25, // Use a percentage of screen width
    height: width * 0.25, // Maintain aspect ratio
    borderRadius: width * 0.125, // Make the image circular
    marginRight: 20,
  },
  usernameContainer: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 14,
    color: '#bbb',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 20,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
  },
  profileOptions: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  editProfileButton: {
    backgroundColor: '#1a1a1d',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  shareProfileButton: {
    backgroundColor: '#1a1a1d',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  editProfileText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  shareProfileText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  highlightsContainer: {
    width: '80%',
    marginVertical: 20,
  },
  highlightBox: {
    alignItems: 'center',
    marginRight: 15,
  },
  highlightImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  highlightText: {
    color: '#fff',
    marginTop: 5,
  },
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginVertical: 20,
  },
  navButton: {
    backgroundColor: '#1a1a1d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  gridItem: {
    width: width * 0.22, // Make each grid item a percentage of the screen width
    marginBottom: 10,
    backgroundColor: '#2a2a2a',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
});
