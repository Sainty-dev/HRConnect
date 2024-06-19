import React from 'react';
import {
  View,
  TextInput as ReactNativeInput,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {Props} from './interface';
import styles from './styles';
import colors from '../../../constants/colors';
import {ICON_SIZE} from '../../../constants/sizes';

const SkillItem: React.FC<Props> = ({
  item,
  index,
  updateSkill,
  deleteSkill,
}) => {
  return (
    <View style={styles.skillContainer}>
      <ReactNativeInput
        style={styles.input}
        placeholderTextColor={colors.FOREGROUND_TEXT}
        placeholder="Skill"
        value={item.skill}
        onChangeText={text => updateSkill(index, 'skill', text)}
      />
      <ReactNativeInput
        style={styles.input}
        placeholder="Years of Experience"
        placeholderTextColor={colors.FOREGROUND_TEXT}
        value={item.yearExp.toString()}
        keyboardType="numeric"
        onChangeText={text => updateSkill(index, 'yearExp', parseInt(text))}
      />
      <ReactNativeInput
        style={styles.input}
        placeholder="Seniority Rating"
        placeholderTextColor={colors.FOREGROUND_TEXT}
        value={item.seniorityRating}
        onChangeText={text => updateSkill(index, 'seniorityRating', text)}
      />
      <TouchableOpacity onPress={() => deleteSkill(index)}>
        <FontAwesomeIcon
          icon={faTrashCan}
          size={ICON_SIZE.small}
          color={colors.ERROR}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SkillItem;
