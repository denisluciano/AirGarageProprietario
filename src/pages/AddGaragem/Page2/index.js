import React, { useRef, useState } from 'react';
import { Alert, Button, Picker, View, Text,ScrollView, TouchableOpacity } from 'react-native';
import { Form } from '@unform/mobile';
import Input from '../../../components/Input';
import * as Yup from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors';
import styles from './style2';




export default function AddGaragePage2({route, navigation}) {
  const formRef = useRef(null);

  const [tipo, setTipo] = useState("Residencial");
  const [acessoControlado, setAcessoControlado] = useState("yes");
  const [cameras, setCameras] = useState("yes");
  const [vagaPresa, setVagaPresa] = useState("yes");
  const [alarme, setAlarme] = useState("yes");
  const [objetos, setObjetos] = useState("yes");
  const [coberto, setCoberto] = useState("yes");


  async function handleSubmit(data) {
    // console.log(data);rr
    // { email: 'test@example.com', password: '123456' }

    try {
      //basicamente to dizendo que os dados que eu to recebendo para validar estão na forma e um objeto, 
      // e esse objeto está na seguinte forma(shape)
      const schema = Yup.object().shape({
        comprimento: Yup.string().required('É obrigatório adicionar um comprimento para a vaga na garagem'),
        largura: Yup.string().required('É obrigatório adicionar uma largura para a vaga na garagem'),
        
      })

      await schema.validate(data,{
        // abortEarly: false, //para pegar todos os erros, não só o primeiro
       })

       let dataPage2 = {}
       
       dataPage2 = Object.assign(data, route.params, {tipo,
        acessoControlado,
        cameras,
        vagaPresa,
        alarme,
        objetos,
        coberto});

        navigation.navigate('AddGaragePage3', dataPage2)

    } catch (error) {      
      const errors = getValidationErrors(error);

      //como esta setando esse setErros aqui, podemos pegar esse 
      // e exibir ele dentro do input ou alguma outra coisa tipo mudar cor das bordas do formulario
      //formRef.current.setErrors(errors); //para isso aqui funcionar, precisamos que "abortEarly: false"
      Alert.alert(
        'Erro ao adicionar garagem',
        error.message
      );

    }
  }

  return (
    <ScrollView style={styles.containerSignUp}>
      <View style={styles.containerTextHeader}>
        <Text style={styles.textHeader}>Preencha todos os dados referentes a garagem</Text>
      </View>
      <View >
        <Form
        ref={formRef}
        onSubmit={handleSubmit}
        style={styles.formCadastro}

        >
          <View style={{alignItems:"flex-start", width: 360}}>
            <Text>Comprimento</Text>
          </View>
          <Input name="comprimento" type="text"  maxLength={49} placeholder="Comprimento"/>
          <View style={{alignItems:"flex-start", width: 360}}>
            <Text>Largura</Text>
          </View>
          <Input name="largura" type="text"  maxLength={49} placeholder="Largura"/>
          <View style={{alignItems:"flex-start", width: 360}}>
            <Text>Altura(Caso seja coberta)</Text>
          </View>
          <Input name="Altura" type="text"  maxLength={49} placeholder="Altura"/>

          <View style={{marginVertical: 20}}>
            <Text>Tipo</Text>
            <Picker
              selectedValue={tipo}
              style={{ height: 50, width: 360 }}
              onValueChange={(itemValue, itemIndex) => setTipo(itemValue)}
            >
              <Picker.Item label="Residencial" value="Residencial" />
              <Picker.Item label="Comercial" value="Comercial" />
            </Picker>
          </View>
          <View style={{marginVertical: 20}}>
            <Text>Acesso controlado</Text>
            <Picker
              selectedValue={acessoControlado}
              style={{ height: 50, width: 360 }}
              onValueChange={(itemValue, itemIndex) => setAcessoControlado(itemValue)}
            >
              <Picker.Item label="Sim" value="yes" />
              <Picker.Item label="Não" value="no" />
            </Picker>
          </View>
          <View style={{marginVertical: 20}}>
            <Text>Cameras de segurança</Text>
            <Picker
              selectedValue={cameras}
              style={{ height: 50, width: 360 }}
              onValueChange={(itemValue, itemIndex) => setCameras(itemValue)}
            >
              <Picker.Item label="Sim" value="yes" />
              <Picker.Item label="Não" value="no" />
            </Picker>
          </View>
          <View style={{marginVertical: 20}}>
            <Text>Vaga presa</Text>
            <Picker
              selectedValue={vagaPresa}
              style={{ height: 50, width: 360 }}
              onValueChange={(itemValue, itemIndex) => setVagaPresa(itemValue)}
            >
              <Picker.Item label="Sim" value="yes" />
              <Picker.Item label="Não" value="no" />
            </Picker>
          </View>
          <View style={{marginVertical: 20}}>
            <Text>Alarme</Text>
            <Picker
              selectedValue={alarme}
              style={{ height: 50, width: 360 }}
              onValueChange={(itemValue, itemIndex) => setAlarme(itemValue)}
            >
              <Picker.Item label="Sim" value="yes" />
              <Picker.Item label="Não" value="no" />
            </Picker>
          </View>
          <View style={{marginVertical: 20}}>
            <Text>Depósito para objetos</Text>
            <Picker
              selectedValue={objetos}
              style={{ height: 50, width: 360 }}
              onValueChange={(itemValue, itemIndex) => setObjetos(itemValue)}
            >
              <Picker.Item label="Sim" value="yes" />
              <Picker.Item label="Não" value="no" />
            </Picker>
          </View>
          <View style={{marginVertical: 20}}>
            <Text>Coberto</Text>
            <Picker
              selectedValue={coberto}
              style={{ height: 50, width: 360 }}
              onValueChange={(itemValue, itemIndex) => setCoberto(itemValue)}
            >
              <Picker.Item label="Sim" value="yes" />
              <Picker.Item label="Não" value="no" />
            </Picker>
          </View>


          <View style={styles.containerButton}>
            <TouchableOpacity
              title="Sign in"
              style={ styles.btnSubmit}
              onPress={ () => {
                formRef.current.submitForm();
              } }
            >
              <Text style={styles.submitText}>Avançar</Text>
            </TouchableOpacity>
          </View>
        </Form>
      </View>
    </ScrollView>
  );
}
