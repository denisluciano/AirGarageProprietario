import React, { useRef, useState } from 'react';
import { Alert, Button, Picker, View, Text,ScrollView, TouchableOpacity } from 'react-native';
import { Form } from '@unform/mobile';
import Input from '../../../components/Input';
import * as Yup from 'yup';
import getValidationErrors from '../../../utils/getValidationErrors';
import styles from './style2';




export default function AddGaragePage2({navigation}) {
  const formRef = useRef(null);

  const [tipo, setTipo] = useState("Residencial");
  const [acessoControlado, setAcessoControlado] = useState("");
  const [cameras, setCameras] = useState("");
  const [vagaPresa, setVagaPresa] = useState("");
  const [alarme, setAlarme] = useState("");
  const [objetos, setObjetos] = useState("");
  const [coberto, setCoberto] = useState("");


  async function handleSubmit(data) {
    // console.log(data);rr
    // { email: 'test@example.com', password: '123456' }

    try {
      //basicamente to dizendo que os dados que eu to recebendo para validar estão na forma e um objeto, 
      // e esse objeto está na seguinte forma(shape)
      const schema = Yup.object().shape({
        titulo: Yup.string().required('É obrigatório adicionar um titulo para sua garagem'),
        descricao: Yup.string().required('É obrigatório adicionar uma descrição para sua garagem'),
      })

      await schema.validate(data,{
        // abortEarly: false, //para pegar todos os erros, não só o primeiro
       })

    } catch (error) {      
      const errors = getValidationErrors(error);

      //como esta setando esse setErros aqui, podemos pegar esse 
      // e exibir ele dentro do input ou alguma outra coisa tipo mudar cor das bordas do formulario
      //formRef.current.setErrors(errors); //para isso aqui funcionar, precisamos que "abortEarly: false"
      Alert.alert(
        'Erro ao adicionar garagem',
        error.message
      )
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
          <Input name="Comprimento" type="text"  maxLength={49} placeholder="Comprimento"/>
          <View style={{alignItems:"flex-start", width: 360}}>
            <Text>Largura</Text>
          </View>
          <Input name="Largura" type="text"  maxLength={49} placeholder="Largura"/>
          <View style={{alignItems:"flex-start", width: 360}}>
            <Text>Altura</Text>
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
              <Picker.Item label="Sim" value="true" />
              <Picker.Item label="Não" value="false" />
            </Picker>
          </View>
          <View style={{marginVertical: 20}}>
            <Text>Cameras de segurança</Text>
            <Picker
              selectedValue={cameras}
              style={{ height: 50, width: 360 }}
              onValueChange={(itemValue, itemIndex) => setCameras(itemValue)}
            >
              <Picker.Item label="Sim" value="true" />
              <Picker.Item label="Não" value="false" />
            </Picker>
          </View>
          <View style={{marginVertical: 20}}>
            <Text>Vaga presa</Text>
            <Picker
              selectedValue={vagaPresa}
              style={{ height: 50, width: 360 }}
              onValueChange={(itemValue, itemIndex) => setVagaPresa(itemValue)}
            >
              <Picker.Item label="Sim" value="true" />
              <Picker.Item label="Não" value="false" />
            </Picker>
          </View>
          <View style={{marginVertical: 20}}>
            <Text>Alarme</Text>
            <Picker
              selectedValue={alarme}
              style={{ height: 50, width: 360 }}
              onValueChange={(itemValue, itemIndex) => setAlarme(itemValue)}
            >
              <Picker.Item label="Sim" value="true" />
              <Picker.Item label="Não" value="false" />
            </Picker>
          </View>
          <View style={{marginVertical: 20}}>
            <Text>Depósito para objetos</Text>
            <Picker
              selectedValue={objetos}
              style={{ height: 50, width: 360 }}
              onValueChange={(itemValue, itemIndex) => setObjetos(itemValue)}
            >
              <Picker.Item label="Sim" value="true" />
              <Picker.Item label="Não" value="false" />
            </Picker>
          </View>
          <View style={{marginVertical: 20}}>
            <Text>Coberto</Text>
            <Picker
              selectedValue={coberto}
              style={{ height: 50, width: 360 }}
              onValueChange={(itemValue, itemIndex) => setCoberto(itemValue)}
            >
              <Picker.Item label="Sim" value="true" />
              <Picker.Item label="Não" value="false" />
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
