import React, {useState, useEffect} from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api'
import styles from './style';

function CardGaragem({ navigation, item }) {
  return(
    <View style={styles.cardGaragem}>
      <View style={ styles.containerImageGarage }>
        <Image
        source={require('../../assets/garagem.png')}
        />
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.headerInfo}>
          <Text style={styles.textTitle}>{item.titulo}</Text>

          <Icon name="heart-o" size={18} color="#000" />
        </View>

        <View style={styles.adressInfo}>
  <Text style={styles.textAdress}>{item.enderecoGaragem.rua},{item.enderecoGaragem.bairro}, {item.enderecoGaragem.cidade}, {item.enderecoGaragem.estado}</Text>
        </View>

        <View style={styles.valueInfo}>
          <Text style={styles.textValue}>15,00/Dia</Text>

        </View>
        <View style={styles.bottomInfo}>
          <View style={styles.rateInfo}>
            <Icon name="star-o" size={18} color="#000" />
            <Text>4,5</Text>
          </View>
          <View>
            <TouchableOpacity
              style={ styles.btnDetalhes}
              onPress={() => navigation.navigate('Garage', {item: item})}
            >
              <Text style={styles.textDetalhes}>Detalhes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

function SearchBar() {
  const [value, onChangeText] = React.useState('');
  return (
    <View style={styles.searchContainer}>
      <Icon style={styles.searchIcon} name="search" size={18} color="#000" />
      <TextInput
         style={styles.searchBar}
         onChangeText={text => onChangeText(text)}
         value={value}
         placeholder="Encontre uma garagem"
      />
    </View>
  );
}


function HomeScreen({ navigation }) {
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
      <SearchBar />

      <FlatList
        data={garages}
        keyExtractor = {(garage) => `list-item-${garage.id}`}
        renderItem={({ item }) =>
          <View>
            <CardGaragem navigation={navigation} item={item} />
          </View>
        }
      />

      
      <TouchableOpacity
        style={styles.btnCadastrarGaragem}
        onPress={() =>  navigation.navigate('AddGaragePage1')}
      >
        <View style={styles.containerButtonCadastrarGaragem}>
          <Text style={styles.textCadastrarGaragem}>Cadastrar garagem</Text>
          <Icon name="plus"  size={30} color="#fff" />
        </View>
        </TouchableOpacity>


    </View>
  );
}

export default HomeScreen;
