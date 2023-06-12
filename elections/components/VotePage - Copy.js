import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const VotePage = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleVote = () => {
    if (selectedCandidate) {
      // Perform the voting logic here
      Alert.alert('Thank you for voting!');
    } else {
      Alert.alert('Please select a candidate before voting.');
    }
  };

  const handleCandidateSelect = (candidate) => {
    setSelectedCandidate(candidate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vote Page</Text>
      <View style={styles.candidatesContainer}>
        <TouchableOpacity
          style={[
            styles.candidateButton,
            selectedCandidate === 'Candidate 1' && styles.selected,
          ]}
          onPress={() => handleCandidateSelect('Candidate 1')}
        >
          <Text style={styles.candidateText}>Candidate 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.candidateButton,
            selectedCandidate === 'Candidate 2' && styles.selected,
          ]}
          onPress={() => handleCandidateSelect('Candidate 2')}
        >
          <Text style={styles.candidateText}>Candidate 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.candidateButton,
            selectedCandidate === 'Candidate 3' && styles.selected,
          ]}
          onPress={() => handleCandidateSelect('Candidate 3')}
        >
          <Text style={styles.candidateText}>Candidate 3</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.voteButton} onPress={handleVote}>
        <Text style={styles.voteButtonText}>Vote</Text>
      </TouchableOpacity>
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
  candidatesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  candidateButton: {
    backgroundColor: '#4287f5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  candidateText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selected: {
    backgroundColor: '#ff9900',
  },
  voteButton: {
    backgroundColor: '#4287f5',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  voteButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default VotePage;
