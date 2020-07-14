import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider: () => React$Node = ({ children }) => {

  const [user, setUser] =  useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedToken = await AsyncStorage.getItem('@AirGarage:token')
      const storagedUser = await AsyncStorage.getItem('@AirGarage:user')


      if(storagedToken && storagedUser){
        //set token api
        api.defaults.headers.authorization = 'Bearer ' + JSON.parse(storagedToken).token;

        setUser(JSON.parse(storagedUser))
      }
      setLoading(false);
    }
    loadStoragedData();
  }, [])

  async function signIn(email, senha) {
    try{
      const response = await api.post('/sessions', {
          email: email,
          password: senha
      });
      setUser(response.data.user);

      await AsyncStorage.setItem('@AirGarage:token', JSON.stringify(response.data.token));
      await AsyncStorage.setItem('@AirGarage:user', JSON.stringify(response.data.user));

      //set token api
      api.defaults.headers.authorization = 'Bearer ' + response.data.token.token;


    } catch (error) {
      console.log("Ocorreu um erro: " + error)
    }
  }
  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    })

  }
  return (
    <AuthContext.Provider value={{signed: !!user, loading, user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;



