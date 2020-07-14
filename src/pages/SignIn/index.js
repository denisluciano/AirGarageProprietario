import React, { useContext } from 'react';
import { Button, TextInput, View, Image, KeyboardAvoidingView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AuthContext from '../../contexts/auth';
import styles from './style';


function SignIn({ navigation }) {
  const [email, onChangeEmail] = React.useState('denis.lopes3012@gmail.com');
  const [senha, onChangeText] = React.useState('png126497');
  const [session, setSession] = React.useState(null);


  //aqui estou usando meu contexto de autentificação
  const { signed, signIn } = useContext(AuthContext);

  async function handleSignIn() {

    //estou chamando a função "signIn" que eu passo no contexto auth aqui
    signIn(email, senha);
  }



  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={ styles.containerLogo }>
        <Image
        source={require('../../assets/logo.png')}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={ styles.input }
          onChangeText={text => onChangeEmail(text)}
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
        />
        <TextInput
          style={ styles.input }
          onChangeText={text => onChangeText(text)}
          value={senha}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          placeholder="Senha"

        />
        <TouchableOpacity
          style={ styles.btnSubmit}
          onPress={handleSignIn}
        >
          <Text style={styles.submitText}>Login</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}



export default SignIn;
