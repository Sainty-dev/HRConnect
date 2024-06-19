import React, {ReactNode} from 'react';
import {ScrollView, View, StatusBar} from 'react-native';
import styles from './style';
import colors from '../../../constants/colors';

interface BaseContainerProps {
  children: ReactNode;
  padding?: number;
  backgroundColor?: string;
}

const BaseContainer: React.FC<BaseContainerProps> = ({
  children,
  padding = 5,
  backgroundColor = colors.MAIN,
}) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={{padding}}>{children}</ScrollView>
    </View>
  );
};

export default BaseContainer;
