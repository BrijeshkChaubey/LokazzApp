import React, {useEffect, useRef} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const GooglePlacesInput = () => {
  const ref = useRef();

  useEffect(() => {
    ref.current?.setAddressText('Some Text');
  }, []);
  return (
    <GooglePlacesAutocomplete
      placeholder="Enter Location"
      minLength={2}
      autoFocus={false}
      returnKeyType={'default'}
      fetchDetails={true}
      query={{
        key: 'AIzaSyDKthBosH620DJlJMcH2pwcnWg7Nnk7Vn8',
        language: 'en',
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      styles={{
        textInputContainer: {
          backgroundColor: 'grey',
        },
        textInput: {
          height: 38,
          color: '#5d5d5d',
          fontSize: 16,
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
      }}
    />
  );
};

export default GooglePlacesInput;
