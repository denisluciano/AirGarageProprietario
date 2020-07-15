import React, {useState, useEffect} from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api'
import styles from './style';

function CardGaragem({ navigation, item }) {
  return(
    <View style={styles.cardGaragemGlobal}>
      <View style={styles.cardGaragem}>

        <View style={styles.containerInfo}>
          <View style={styles.headerInfo}>
            <Text style={styles.textTitle}>{item.titulo}</Text>

          </View>

          <View style={styles.infoItem}>
            <Text style={styles.textAdress}>Endereço: {item.enderecoGaragem.rua},{item.enderecoGaragem.bairro}, {item.enderecoGaragem.cidade}, {item.enderecoGaragem.estado}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.textAdress}>Cliente:</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.textAdress}>Valor:</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.textAdress}>Intervalo:</Text>
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
          onPress={() => navigation.navigate('Garage', {item: item})}
        >
          <Text style={styles.textDetalhes}>Rejeitar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={ styles.btnAceitar}
          onPress={() => navigation.navigate('Garage', {item: item})}
        >
          <Text style={styles.textDetalhes}>Aceitar</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}




function Locacoes({ navigation }) {
  const [garages, setGarages] = useState([]);

  useEffect(() => {
    async function loadGarages(){

      const response = await api.get('/garages');

      setGarages(response.data);
    }

    loadGarages();


  },[])

  return (
    <View style={styles.screen}>

      <FlatList
        data={garages}
        keyExtractor = {(garage) => `list-item-${garage.id}`}
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
