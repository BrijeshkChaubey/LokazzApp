import {View, Text, Image} from 'react-native';
import React from 'react';
import {hp, wp} from '../../../Constants/Dimension';
import {styles} from './styles';

const Servicecard = ({...props}) => {
  const data = props;

  return (
    <View style={styles.root}>
      <View>
        <Image style={styles.image} source={{uri: data.item.image}} />
      </View>

      <Text style={styles.Title}>{data.item.title}</Text>
    </View>
  );
};

export default Servicecard;
