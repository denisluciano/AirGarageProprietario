import React, { useContext } from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity} from 'react-native';

import AuthContext from './../../contexts/auth';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';



function Profile({ navigation }) {
  const { signOut } = useContext(AuthContext);

  function handleSignOut() {
    console.log("swes")
    signOut();
  }

  return (

      <View style={styles.containerProfile}>
        <View style={ styles.containerImageProfile }>
          <Image
          source={require('../../assets/profile_picture.png')}
          />
        </View>
        <View style={styles.containertextName}>
          <Text style={styles.textName}>Denis Luciano</Text>
          </View>
        <View style={styles.containerItemsProfile}>
          <View style={styles.itemProfile}>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}
            >

              <View style={styles.itemOption}>
                <Text style={styles.textItemProfile}> Editar dados </Text>
                <Icon name="angle-right" size={18} color="#000" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.itemProfile}>
            <TouchableOpacity
              onPress={() => {}}
            >
              <View style={styles.itemOption}>
                <Text style={styles.textItemProfile}> Alterar para proprietário </Text>
                <Icon name="angle-right" size={18} color="#000" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.itemPoliticaProfile}>
            <TouchableOpacity
              onPress={() => {}}
            >
              <View style={styles.itemOption}>
                <Text style={styles.textItemProfile}> Politica de privacidade </Text>
                <Icon name="angle-right" size={18} color="#000" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.itemProfile}>
            <TouchableOpacity
              onPress={() => {}}
            >

              <View style={styles.itemOption}>
                <Text style={styles.textItemProfile}> Ajuda </Text>
                <Icon name="angle-right" size={18} color="#000" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.itemProfile}>
            <TouchableOpacity
              onPress={handleSignOut}
            >
              <View style={styles.itemOption}>
                <Text style={styles.textItemProfile}> Sair </Text>
                <Icon name="angle-right" size={18} color="#000" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>


  )
}

export default Profile;
