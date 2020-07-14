import React, {useState} from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import {Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';

import styles from './style';

const calendary =
{
  "janeiro" : 31,
  "marco": 31,
  "abril": 30,
  "maio": 31,
  "junho": 30,
  "julho": 31,
  "agosto": 31,
  "setembro": 30,
  "outubro": 31,
  "novembro": 30,
  "dezembro": 31,
};

function AddGaragePage3({ route, navigation }) {
  LocaleConfig.defaultLocale = 'pt-br';

  LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan.','Fev.','Mar','Abr','Mai','Jun','Jul.','Ago','Set.','Otu.','Nov.','Dez.'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    dayNamesShort: ['Dom.','Seg.','Ter.','Quar.','Quin.','Sex.','Sab.'],
    today: 'Hoje'
  };

  const [selected, setSelected] = useState({});
  const [firstDate, setFirstDate] = useState({});

  // usado para saber qual clique é para adicionar o intervalo.
  // false não deu nem um clique, true falta um para o intervalo
  const [alter, setAlter] = useState(false)

  const onDayPress = (day) => {

    // console.log(selected)

    for (let key in selected) {
      
      console.log("key");
      console.log( key );
      // values for the keys
      console.log( selected[key] ); // John, 30, true
    }

    console.log("---");

    if(!alter){
      const dayObj = new Date(day.year, day.month-1, day.day)
      setFirstDate(dayObj);
      setAlter(!alter)
    }else {
      const dayObj = new Date(day.year, day.month-1, day.day); //month is less 1 because is start in month 0 and calendary 1

      if(firstDate > dayObj){
        markDays(dayObj, firstDate);
      }else {
        markDays(firstDate, dayObj);
      }
      
      setAlter(!alter)
     
    }
  };
  const next = () => {
    //implementar isso aqui
/*     let user1 = {}

    user1["name"] = "John"
    user1["age"] = 30
    user1["isAdmin"] = true


    for (let key in user1) {
      // keys
      alert( key );  // name, age, isAdmin
      // values for the keys
      alert( user[key] ); // John, 30, true
    } */

    let dataPage3 = {}
       
    dataPage3 = Object.assign(route.params, {"disponibilidade": selected});

    navigation.navigate('AddGaragePage4', dataPage3)


  };
  const markDays = (initial, final) => {
  
    
    const markedDay = Object.assign({}, selected)

    var d = new Date(initial)
    
    for (; d <= final; d.setDate(d.getDate() + 1)) {

      if(final.getTime() == initial.getTime()){
        markedDay[formatDate(d)] = {startingDay: true, color: 'green', endingDay: true}
      } else if(d.getTime() == initial.getTime()){
        markedDay[formatDate(d)] =  {startingDay: true, color: 'green' }
      }else if(d.getTime() === final.getTime()){
        markedDay[formatDate(d)] = { endingDay: true, color: 'green'}
      }else{
        markedDay[formatDate(d)] = { startingDay: false, color: 'green', endingDay: false}
      }
      
    }

    setSelected(markedDay);
  };

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

  return (
    <View style={styles.containerDisponibilidade}>
      <View style={styles.containerBody}>
        <View style={styles.containerText}>
          <Text style={styles.textDisponibilidade}>
            Selecione os períodos que deseja disponibilizar 
            sua garagem clicando primeira vez em uma data para indicar o inicio e segunda vez para demarcar o fim
            </Text>
        </View>

        <View style={styles.containerCalendary}>

          <CalendarList

            markingType={'period'}
            pastScrollRange={0}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={3}
            // Enable or disable scrolling of calendar list
            markedDates={selected}
            onDayPress={onDayPress}
          />
        </View>

      </View>
      <View style={styles.bottomBar}>

        <TouchableOpacity
          style={styles.btnLimpar}
          onPress={() => {

          }}
        >
          <Text style={styles.textConfirmar}>Limpar tudo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnConfirmar}
          onPress={next}
        >
          <Text style={styles.textConfirmar}>Avançar</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

export default AddGaragePage3;
