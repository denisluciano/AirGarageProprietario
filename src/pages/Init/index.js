import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import styles from './style';

function Init({ navigation }) {
  return (
    <View style={styles.containerInit}>
      <View style={styles.containerLogo}>
      <Image
        source={require('../../assets/logo.png')}
        />
      </View>
      <View style={styles.containerMessage}>
        <Text style={styles.TextMessage}>Tem uma vaga disponível na sua garagem? Não espere mais e comece a faturar com o AirGarage</Text>
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity
          style={ styles.btnSignUp}
          onPress={() =>navigation.navigate('SignUp')}
        >
          <Text style={styles.submitText}>Cadastrar-se</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.btnSignIn}
          onPress={() =>navigation.navigate('Login')}
        >
          <Text style={styles.submitText}>Entrar</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Init;
