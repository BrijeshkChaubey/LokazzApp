import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../../../Constants/Dimension';
import {styles} from './styles';
import {texts} from '../../../Constants/Text';

const Cleaningcard = ({...props}) => {
  const data = props;

  return (
    <View style={styles.root}>
      <View>
        <Image style={styles.image} source={{uri: data.item.image}} />
      </View>
      <Text style={styles.title}>{data.item.title}</Text>
      <Text style={styles.servicetype}>{data.item.ServiceType}</Text>
      <View style={styles.innerroot}>
        <Text style={styles.startText}> {`${texts.Starting_at}`}</Text>
        <Text style={styles.Money}>{`${texts.Dollar}${data.item.money}`}</Text>
      </View>
    </View>
  );
};

export default Cleaningcard;
