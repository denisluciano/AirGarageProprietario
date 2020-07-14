import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import { AuthProvider } from './src/contexts/auth'



const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
