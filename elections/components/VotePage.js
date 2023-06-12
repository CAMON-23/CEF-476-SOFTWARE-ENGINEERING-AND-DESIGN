import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const candidates = [
  { id: 1, name: 'Candidate 1' },
  { id: 2, name: 'Candidate 2' },
  { id: 3, name: 'Candidate 3' },
];

export default function App() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleVote = () => {
    if (selectedCandidate) {
      const updatedCandidates = candidates.map((candidate) => {
        if (candidate.id === selectedCandidate.id) {
          return { ...candidate, votes: candidate.votes + 1 };
        }
        return candidate;
      });
      setSelectedCandidate(null);
      // Further actions with updatedCandidates
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Online Election</Text>
      <Text style={styles.subtitle}>Select your preferred candidate:</Text>
      {candidates.map((candidate) => (
        <TouchableOpacity
          key={candidate.id}
          style={[
            styles.candidateItem,
            candidate === selectedCandidate && styles.selectedItem,
          ]}
          onPress={() => setSelectedCandidate(candidate)}
        >
          <Text style={styles.candidateName}>{candidate.name}</Text>
          <Text style={styles.voteCount}>Votes: {candidate.votes}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={[
          styles.button,
          selectedCandidate ? styles.activeButton : styles.disabledButton,
        ]}
        onPress={handleVote}
        disabled={!selectedCandidate}
      >
        <Text style={styles.buttonText}>Vote</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
    color: '#666',
  },
  candidateItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: '80%',
  },
  selectedItem: {
    borderColor: '#4287f5',
    shadowColor: '#4287f5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  candidateName: {
    fontSize: 16,
    color: '#333',
  },
  voteCount: {
    fontSize: 14,
    color: '#888',
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#4287f5',
    borderRadius: 8,
    marginTop: 16,
  },
  activeButton: {
    opacity: 1,
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
