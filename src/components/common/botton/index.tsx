import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ButtonProps} from './interface';
import styles from './styles';

const Button = ({label, onClick, buttonStyles}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, buttonStyles]}
      onPress={onClick}>
      <View style={styles.row}>
        <Text style={styles.plusIcon}>+</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Button;
