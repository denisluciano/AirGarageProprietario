import React, {useState, useEffect} from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api'
import styles from './style';

function CardGaragem({ navigation, item }) {

  function dataAtualFormatada(date){

    var x = new Date(date)
    return x.getDay()+"/"+x.getMonth()+"/"+x.getFullYear()+""

  }

  function formatTotalValue(value){


    return value.toFixed(2).toString().replace(".",",");

  }
  



  return(
    <View style={styles.cardGaragemGlobal}>
      <View style={styles.cardGaragem}>

        <View style={styles.containerInfo}>
          <View style={styles.headerInfo}>
            <Text style={styles.textTitle}>{item.titulo}</Text>

          </View>

          {/* <View style={styles.infoItem}>
            <Text style={styles.textAdress}>Endereço: {item.enderecoGaragem.rua},{item.enderecoGaragem.bairro}, {item.enderecoGaragem.cidade}, {item.enderecoGaragem.estado}</Text>
          </View> */}
          <View style={styles.infoItem}>
        <Text style={styles.textAdress}>Cliente: {item.clienteLocacao.nome}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.textAdress}>Valor: {formatTotalValue(item.valor_total)}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.textAdress}>Intervalo: {dataAtualFormatada(item.data_inicial)} até dia {dataAtualFormatada(item.data_final)}</Text>
          </View>

        </View>
        <View style={ styles.containerImageGarage }>
          <Image
          source={require('../../assets/locacoes_image.png')}
          />

        </View>
      </View>
      <View style={styles.statusInfo}>
        <Text style={styles.textValue}>Aguardando aprovação</Text>
      </View>
      <View style={styles.bottomInfo}>
      <View>
        <TouchableOpacity
          style={ styles.btnRejeitar}
          onPress={() => {}}
        >
          <Text style={styles.textDetalhes}>Rejeitar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={ styles.btnAceitar}
          onPress={() => {}}
        >
          <Text style={styles.textDetalhes}>Aceitar</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}




function Locacoes({ navigation }) {
  const [Locacoes, setLocacoes] = useState([]);

  useEffect(() => {
    async function loadLocacoes(){

      setLocacoes([])

      const response = await api.get('/locacaoproprietario');

      setLocacoes(response.data);
    }

    loadLocacoes();


  },[])

  return (
    <View style={styles.screen}>

      <FlatList
        data={Locacoes}
        keyExtractor = {(locacao) => `list-item-${locacao.id}`}
        ListEmptyComponent={() => (
          <View style={{height: 300, marginHorizontal:20, alignItems:"center", justifyContent:"center"}} >
          <Text style={{fontSize: 20}}>Não há nenhuma locação no momento</Text>
          </View>
          )}
        renderItem={({ item }) =>
          <View>
            <CardGaragem navigation={navigation} item={item} />
          </View>
        }
      />

  
    </View>
  );
}

export default Locacoes;
