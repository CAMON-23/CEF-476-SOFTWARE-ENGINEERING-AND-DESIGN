import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import CandidateProfilesPage from './components/CandidateProfilesPage';
import VotePage from './components/VotePage';
import UserProfilePage from './components/UserProfilePage';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Login') {
              iconName = 'log-in';
            } else if (route.name === 'Signup') {
              iconName = 'person-add';
            } else if (route.name === 'Candidates') {
              iconName = 'people';
            } else if (route.name === 'Vote') {
              iconName = 'checkmark-circle';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={LandingPage} />
        <Tab.Screen name="Login" component={LoginPage} />
        <Tab.Screen name="Signup" component={SignupPage} />
        <Tab.Screen name="Candidates" component={CandidateProfilesPage} />
        <Tab.Screen name="Vote" component={VotePage} />
        <Tab.Screen name="Profile" component={UserProfilePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;