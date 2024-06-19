import React, {useState} from 'react';
import {View} from 'react-native';
import {
  GooglePlacesAutocomplete,
  GooglePlaceDetail,
} from 'react-native-google-places-autocomplete';
import {AddressDetails, AddressSearchInputProps} from './interface';
import styles from './styles';
import colors from '../../../constants/colors';
import {API_KEYS} from '../../../constants/api';
import { Text } from 'react-native-ui-lib';

const AddressSearchInput: React.FC<AddressSearchInputProps> = ({
  onSelectAddress,
}) => {
  const [addressDetails, setAddressDetails] = useState<AddressDetails>({
    city: '',
    country: '',
    postalCode: '',
  });

  const handlePress = (data: any, details: GooglePlaceDetail | null = null) => {
    if (details) {
      const addressComponents = details.address_components;

      let city = '';
      let country = '';
      let postalCode = '';

      for (let component of addressComponents) {
        const types = component.types;
        if (types.includes('locality')) {
          city = component.long_name;
        }
        if (types.includes('country')) {
          country = component.long_name;
        }
        if (types.includes('postal_code')) {
          postalCode = component.long_name;
        }
      }

      const newAddressDetails = {city, country, postalCode};
      setAddressDetails(newAddressDetails);
      onSelectAddress(newAddressDetails);
    }
  };

  return (
    <>
      <Text style={styles.textFieldLabel} color={colors.FOREGROUND_TEXT}>
        Address
      </Text>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Search for an address"
          minLength={2}
          autoFocus={false}
          returnKeyType={'search'}
          listViewDisplayed="auto"
          fetchDetails={true}
          onPress={handlePress}
          key={API_KEYS.GOOGLE_MAPS_API_KEY}
          styles={{
            textInputContainer: {
              width: '100%',
            },
            description: {
              fontWeight: 'bold',
            },
            textInput: {
              backgroundColor: colors.COMPONENT_BACKGROUND,
              borderRadius: 10,
              height: 50,
              color: colors.FOREGROUND_TEXT,
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={200}
        />
      </View>
    </>
  );
};

export default AddressSearchInput;
