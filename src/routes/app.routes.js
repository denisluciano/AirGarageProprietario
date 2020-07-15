/*
Uma observação que tenho a fazer aqui. Inicialmente o esquema de rotas era
feito de uma forma diferente, mas precisamos mudar pois em algumas telas
precisavamos ocultar o meu inferior e o react native não recomendava usar
'tabBarVisible', pois poderia acontecer alguns bugs. A recomendação era
criar uma pilha antes e depois chamar a tab, então foi isso que fizemos.

Tudo isso que foi mencionado a cima está na doc v5,
https://reactnavigation.org/docs/hiding-tabbar-in-screens/

Antes tinhamos as tabs e para cada tab tinha um componente de stach, como
por exemplo para tab Home o component dava as outras screens em uma pilha.
Esse component ficava em um arquivo separado chamado home.routes.js e nele
era carregado de fato os components react-native
*/
import * as React from 'react';

import { StyleSheet } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const AppTab = createBottomTabNavigator();

import Garagens from '../pages/Garagens';
import Notificacoes from '../pages/Notificacoes'
import Locacoes from '../pages/Locacoes';
import Faturamento from '../pages/Faturamento';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import AddGaragePage1 from '../pages/AddGaragem/Page1';
import AddGaragePage2 from '../pages/AddGaragem/Page2';
import AddGaragePage3 from '../pages/AddGaragem/Page3';
import AddGaragePage4 from '../pages/AddGaragem/Page4';



function TabRoutes() {
  return (
    <AppTab.Navigator
      // screenOptions={{
      //   headerShown:false,
      // }}
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarIcon: ({ focused, color, size }) => {

          if (route.name === 'Garagens') {
            return focused
              ? <FontAwesome name='car' size={size} color={color} />
              : <MaterialCommunityIcons name='car' size={size} color={color} />;
          } else if (route.name === 'Notificações') {
            return focused
              ? <Ionicons name='md-notifications' size={size} color={color} />
              : <Ionicons name='ios-notifications-outline' size={size} color={color} />;
          }else if (route.name === 'Locações') {
            return focused
              ? <Ionicons name='ios-list' size={size} color={color} />
              : <Ionicons name='ios-list' size={size} color={color} />;
          }else if (route.name === 'Faturamento') {
            return focused
              ? <FontAwesome5 name='money-bill' size={size} color={color} />
              : <FontAwesome name='money' size={size} color={color} />;
           }else if (route.name === 'Perfil') {
            return focused
              ? <FontAwesome name='user' size={size} color={color} />
              : <FontAwesome name='user-o' size={size} color={color} />;
          }

        },
      })}
      tabBarOptions={{
        activeBackgroundColor: "#ff6600",
        inactiveBackgroundColor: "#ff6600",
        activeTintColor: 'black',
        inactiveTintColor: 'black',
      }}


      >
        <AppTab.Screen name="Garagens" component={Garagens}  />
        <AppTab.Screen name="Notificações" component={Notificacoes} />
        <AppTab.Screen name="Locações" component={Locacoes} tabBarOptions={{ activeBackgroundColor:"#F4C20D" }} />
        <AppTab.Screen name="Faturamento" component={Faturamento} />
        <AppTab.Screen name="Perfil" component={Profile} />
      </AppTab.Navigator>
  );
}

const AppStack = createStackNavigator();

function AppRoutes({ navigation, route  }) {

  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown:false,
      }}
      initialRouteName="Home"
    >
      <AppStack.Screen name="Home" component={TabRoutes} />
      <AppStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          title: 'Editar Perfil',
          headerStyle: {
            backgroundColor: '#FF6600',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: true,
          // headerTitleAlign: "center",
        }}
      />
      <AppStack.Screen
        name="AddGaragePage1"
        component={AddGaragePage1}
        options={{
          title: 'Adicionar Garagem',
          headerStyle: {
            backgroundColor: '#FF6600',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: true,
          // headerTitleAlign: "center",
        }}
      />
      <AppStack.Screen
        name="AddGaragePage2"
        component={AddGaragePage2}
        options={{
          title: 'Adicionar Garagem',
          headerStyle: {
            backgroundColor: '#FF6600',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: true,
          // headerTitleAlign: "center",
        }}
      />
      <AppStack.Screen
        name="AddGaragePage3"
        component={AddGaragePage3}
        options={{
          title: 'Adicionar Garagem',
          headerStyle: {
            backgroundColor: '#FF6600',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: true,
          // headerTitleAlign: "center",
        }}
      />
      <AppStack.Screen
        name="AddGaragePage4"
        component={AddGaragePage4}
        options={{
          title: 'Adicionar Garagem',
          headerStyle: {
            backgroundColor: '#FF6600',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: true,
          // headerTitleAlign: "center",
        }}
      />

    </AppStack.Navigator>
  );
}


export default AppRoutes;
