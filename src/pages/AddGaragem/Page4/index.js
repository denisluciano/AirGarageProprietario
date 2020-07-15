import React, { useRef } from 'react';
import { ActivityIndicator, Alert, Button, View, Text,ScrollView, TouchableOpacity } from 'react-native';
import { Form } from '@unform/mobile';
import Input from '../../../components/Input';
import * as Yup from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors'
import styles from './style';
import api from '../../../services/api';


export default function AddGaragePage4({route, navigation}) {
  const formRef = useRef(null);


  function storeGarages(payload){

    console.log(payload);

    api.post('/garages', payload).then((res) => {
      console.log((res.data.id))

    }).catch((err) =>{
      console.log(err)
    });


  }

  async function handleSubmit(data) {
    // console.log(data);
    // { email: 'test@example.com', password: '123456' }

    //inicia aqui

    try {
      //basicamente to dizendo que os dados que eu to recebendo para validar estão na forma e um objeto, 
      // e esse objeto está na seguinte forma(shape)
      const schema = Yup.object().shape({
        valor: Yup.number().positive('Deve ser preenchido com um valor numérico').required('É obrigatório adicionar um titulo para sua garagem'),
 
      })

      await schema.validate(data,{
        // abortEarly: false, //para pegar todos os erros, não só o primeiro
       })

       let dataPage4 = {}
       dataPage4 = Object.assign(data, route.params )

       Alert.alert(
        "Confirmação",
        "Deseja realmente confirmar o cadastro de uma nova garagem com os dados informados anteriormente?",
        [
          {
            text: "CANCELAR",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "SIM", onPress: () => storeGarages(dataPage4) }
        ],
        { cancelable: false }
      );



    } catch (error) {

      
      const errors = getValidationErrors(error);

      //como esta setando esse setErros aqui, podemos pegar esse 
      // e exibir ele dentro do input ou alguma outra coisa tipo mudar cor das bordas do formulario
      //formRef.current.setErrors(errors); //para isso aqui funcionar, precisamos que "abortEarly: false"


      Alert.alert(
        'Erro ao adicionar garagem',
        "Deve ser preenchido com um valor numérico valido que represente valor das diárias da sua garagem"
      )
    }

  }
  return (
    <ScrollView style={styles.containerSignUp}>
      <View style={styles.containerTextHeader}>
        <Text style={styles.textHeader}>Agora é hora de definir um valor para diárias da sua garagem</Text>
      </View>
      <View >
        <Form
        ref={formRef}
        onSubmit={handleSubmit}
        style={styles.formCadastro}

        >
          <Input name="valor" type="text"  maxLength={49} placeholder="Valor"/>
          {/* <Input name="descricao" type="text" multiline numberOfLines={4} style={styles.input} maxLength={299} placeholder="Descrição"/> */}


          <View style={styles.containerButton}>
            <TouchableOpacity
              title="Sign in"
              style={ styles.btnSubmit}
              onPress={ () => {
                formRef.current.submitForm();
              } }
            >
              <Text style={styles.submitText}>Cadastrar garagem</Text>
            </TouchableOpacity>
          </View>
        </Form>
      </View>
    </ScrollView>
  );
}
