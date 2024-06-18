import {Picker, View} from 'react-native-ui-lib';
import React from 'react';
import styles from './styles';
import {ItemPickerProps} from '../../../types/employee';

const ItemPicker = ({
  itemBackgroundContainerStyle,
  ...props
}: ItemPickerProps) => {
  return (
    <>
      <View style={[styles.container, itemBackgroundContainerStyle]}>
        <Picker {...props} />
      </View>
    </>
  );
};
export default ItemPicker;
