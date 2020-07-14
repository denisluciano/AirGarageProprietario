import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { TextInput } from 'react-native';
import { useField } from '@unform/core';

import styles from './style';

function Input({ name, ...rest }) {
  // console.log('name--')
  // console.log(name);
  // console.log('nameFIM--')
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
      // console.log('name--')
      // console.log(inputRef);
      // console.log('nameFIM--')
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <TextInput
      ref={inputRef}
      style={styles.input}
      keyboardAppearance="dark"
      defaultValue={defaultValue}
      placeholderTextColor="#666360"
      onChangeText={value => {
        if (inputRef.current) {
          inputRef.current.value = value;
        }
      }}
      {...rest}
    />
  );
};

export default Input;
