import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const LandingPage = ({ navigation }) => {
  const goToLoginPage = () => {
    navigation.navigate('LoginPage');
  };

  const goToSignupPage = () => {
    navigation.navigate('SignupPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LET'S VOTE</Text>
      <Image
        source={require('../assets/vote.png')}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={goToLoginPage}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToSignupPage}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4287f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 48,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    color: '#4287f5',
    fontWeight: 'bold',
  },
});

export default LandingPage;
