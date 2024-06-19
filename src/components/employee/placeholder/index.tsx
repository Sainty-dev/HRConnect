import React from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-ui-lib';
import styles from './style';

const Placeholder = () => (
  <View style={styles.container}>
    <Image
      source={require('../../../assets/empty_placeholder.png')}
      style={styles.image}
    />
  </View>
);

export default Placeholder;
