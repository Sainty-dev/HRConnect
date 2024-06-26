import React, {useState} from 'react';
import {TextInputProps} from '../../../types/employee';
import {Controller} from 'react-hook-form';
import styles from './style';
import {Button, TextField, Text, View} from 'react-native-ui-lib';
import Animated, {
  FadeInLeft,
  FadeInUp,
  FadeOutRight,
  FadeOutUp,
  Layout,
} from 'react-native-reanimated';
import {
  ANIMATION_DURATION_IN_MIL_SEC,
  ICON_SIZE,
} from '../../../constants/sizes';
import colors from '../../../constants/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';

const TextInput = ({
  control,
  onChangeText,
  name,
  value: textValue,
  rules,
  error,
  ...props
}: TextInputProps) => {
  const [showError, setShowError] = useState(false);
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        render={({field: {onBlur, onChange, value}}) => {
          console.log('value', value);

          const handleTextChange = (text: string) => {
            onChange(text); //Is used for form validation
            onChangeText(text); // is used to update the value in the parent component
            value = text; //update the value in the controller
          };
          return (
            <>
              <View style={styles.column}>
                <View style={styles.row}>
                  <View style={styles.container}>
                    <Text
                      style={styles.textFieldLabel}
                      color={colors.FOREGROUND_TEXT}>
                      {name}
                    </Text>
                    <TextField
                      {...props}
                      placeholder={props.placeholder}
                      color={error ? colors.ERROR : colors.FOREGROUND_TEXT}
                      containerStyle={styles.textFieldContainer}
                      style={[styles.textField]}
                      underlineColorAndroid="transparent"
                      onBlur={onBlur}
                      onChangeText={handleTextChange}
                      onChange={value => onChangeText(value)}
                      value={textValue}
                    />
                  </View>
                </View>
                <View style={styles.row}>
                  {error && (
                    <Animated.View
                      entering={FadeInLeft.duration(
                        ANIMATION_DURATION_IN_MIL_SEC,
                      )}
                      exiting={FadeOutRight.duration(
                        ANIMATION_DURATION_IN_MIL_SEC,
                      )}
                      layout={Layout.duration(
                        ANIMATION_DURATION_IN_MIL_SEC,
                      ).springify()}
                      style={styles.animatedView}>
                      <Button
                        round
                        backgroundColor={colors.ERROR_INDICATOR_BACKGROUND}
                        onPress={() => setShowError(!showError)}>
                        <FontAwesomeIcon
                          icon={faTriangleExclamation}
                          size={ICON_SIZE.small}
                          color={colors.ERROR}
                        />
                      </Button>
                    </Animated.View>
                  )}

                  {showError && error && (
                    <Animated.View
                      entering={FadeInUp.duration(
                        ANIMATION_DURATION_IN_MIL_SEC,
                      )}
                      exiting={FadeOutUp.duration(
                        ANIMATION_DURATION_IN_MIL_SEC,
                      )}
                      layout={Layout.duration(
                        ANIMATION_DURATION_IN_MIL_SEC,
                      ).springify()}
                      style={styles.errorView}>
                      <Text color={colors.FOREGROUND_TEXT}>{error}</Text>
                    </Animated.View>
                  )}
                </View>
              </View>
            </>
          );
        }}
        name={name}
      />
    </>
  );
};
export default TextInput;
