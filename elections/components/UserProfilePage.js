import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserProfilePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile Page</Text>
      {/* User profile data */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4287f5',
    marginBottom: 24,
  },
});

export default UserProfilePage;
