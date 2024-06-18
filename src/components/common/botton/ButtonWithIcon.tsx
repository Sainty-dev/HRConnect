import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonWithIconProps} from './interface';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import {ICON_SIZE} from '../../../constants/sizes';
import colors from '../../../constants/colors';

const ButtonWithIcon = ({
  label,
  onClick,
  buttonStyles,
  iconColor,
  iconSize,
}: ButtonWithIconProps) => {
  return (
    <TouchableOpacity
      style={[styles.iconButtonContainer, buttonStyles]}
      onPress={onClick}>
      <FontAwesomeIcon
        icon={faCirclePlus}
        size={iconSize ?? ICON_SIZE.small}
        color={iconColor ?? colors.FOREGROUND_TEXT}
      />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};
export default ButtonWithIcon;
