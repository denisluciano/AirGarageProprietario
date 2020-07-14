import React, { useContext } from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes'
import AuthContext from '../contexts/auth';
import { View, ActivityIndicator, StyleSheet } from 'react-native'

function Routes() {


  //aqui é usado contexto para verificar se está logado
  const { signed, loading } = useContext(AuthContext);

  if(loading) {
    return(
      <View style={styles.containerLoading}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;


const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
  }
});
