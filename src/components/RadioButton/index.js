import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import styles from './style';


const RadioButton = props => {
  return (
    <TouchableOpacity 
      style={styles.circle} 
      onPress={props.onPress}
    >
      {props.checked ? (<View style={styles.checkedCircle} />) : (<View />)}
    </TouchableOpacity>
)
};

export default RadioButton;