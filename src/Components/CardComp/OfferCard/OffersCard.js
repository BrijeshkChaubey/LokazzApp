import {View, Text, Image} from 'react-native';
import React from 'react';
import {hp, wp} from '../../../Constants/Dimension';
import {styles} from './styles';

const OfferCard = ({...props}) => {
  const data = props;
  return (
    <View style={styles.root}>
      <View>
        <Image style={styles.image} source={{uri: data.item.image}} />
      </View>
    </View>
  );
};

export default OfferCard;
