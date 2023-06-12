import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserProfilePage = () => {
  // Sample data for voted candidates
  const votedCandidates = ['Candidate 1', 'Candidate 3'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <View style={styles.votedCandidatesContainer}>
        <Text style={styles.subtitle}>Voted Candidates:</Text>
        {votedCandidates.map((candidate, index) => (
          <Text key={index} style={styles.candidateName}>
            - {candidate}
          </Text>
        ))}
      </View>
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
    marginBottom: 16,
  },
  votedCandidatesContainer: {
    alignItems: 'flex-start',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  candidateName: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default UserProfilePage;
