import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import data from '../../../Assets/Datas/Servicedata';
import {styles} from './styles';
import {texts} from '../../../Constants/Text';
import Servicecard from '../../CardComp/ServiceCard/Servicecard';

const Services = () => {
  const Data = data;
  return (
    <View>
      <View style={styles.Mainroot}>
        <Text style={styles.root}> {`${texts.Services}`}</Text>
        <TouchableOpacity>
          <Text style={styles.Viewtext}> {`${texts.View_text}`}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={Data}
        horizontal={true}
        renderItem={({item}) => <Servicecard item={item} />}
      />
    </View>
  );
};

export default Services;
