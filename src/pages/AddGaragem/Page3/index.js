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

function Disponibilidade({ navigation }) {
  LocaleConfig.defaultLocale = 'pt-br';

  LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan.','Fev.','Mar','Abr','Mai','Jun','Jul.','Ago','Set.','Otu.','Nov.','Dez.'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    dayNamesShort: ['Dom.','Seg.','Ter.','Quar.','Quin.','Sex.','Sab.'],
    today: 'Hoje'
  };

  const [selected, setSelected] = useState({});
  const [initialDate, setInitialDate] = useState({});
  const [finalDate, setFinalDate] = useState({});

  const onDayPress = (day) => {
    // setSelected(day.dateString);
    // console.log(day.dateString);


    const a = new Date(day.year, day.month, day.day)
    const b = new Date(2020, 7, 22)

    setInitialDate(Object.assign({}, a));
    setFinalDate(Object.assign({}, b));

    markDays(a,b);


  };
  const markDays = (initial, final) => {
    
    const markedDay = Object.assign({}, selected)
    
    for (var d = initial; d <= final; d.setDate(d.getDate() + 1)) {
      // console.log(formatDate(d))
      markedDay[formatDate(d)] = {selected: true, endingDay: false, startDay: false, color: 'green'}
    }

    setSelected(markedDay);
  };

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth()),
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
          style={ styles.btnConfirmar}
          onPress={() => {

          }}
        >
          <Text style={styles.textConfirmar}>Avançar</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

export default Disponibilidade;
