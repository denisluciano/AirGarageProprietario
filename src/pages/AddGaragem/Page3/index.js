import React, {useState} from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import {Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';

import styles from './style';

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
        
        var dateAnterior = new Date(d)
        dateAnterior.setDate(d.getDate() - 1)
        
        if(!!markedDay[formatDate(dateAnterior)]){
          markedDay[formatDate(dateAnterior)].endingDay = true
        }
        var dateProximo = new Date(d)
        dateProximo.setDate(d.getDate() + 1)
        
        if(!!markedDay[formatDate(dateProximo)]){
          markedDay[formatDate(dateProximo)].startingDay = true;
        }

      } else if(d.getTime() == initial.getTime()){
        markedDay[formatDate(d)] =  {startingDay: true, color: 'green' }
        
        var dateAnterior = new Date(d)
        dateAnterior.setDate(d.getDate() - 1)
        
        if(!!markedDay[formatDate(dateAnterior)]){
          markedDay[formatDate(dateAnterior)].endingDay = true
        }


      }else if(d.getTime() === final.getTime()){
        markedDay[formatDate(d)] = { endingDay: true, color: 'green'}
        //verificando se o proximo está selecionado para caso tiver falar que ele indica um inicio
        
        var dateProximo = new Date(d)
        dateProximo.setDate(d.getDate() + 1)
        
        if(!!markedDay[formatDate(dateProximo)]){
          markedDay[formatDate(dateProximo)].startingDay = true;
        }

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
            futureScrollRange={12}
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
            setSelected({})
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
