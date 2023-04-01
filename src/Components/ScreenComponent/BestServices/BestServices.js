import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Cleaningcard from '../../CardComp/Cleaningcard/Cleaningcard';
import {styles} from './styles';
import {texts} from '../../../Constants/Text';
import BestserviceData from '../../../Assets/Datas/BestserviceData';

const BestServices = () => {
  const Data = BestserviceData;
  return (
    <View style={styles.Externalroot}>
      <View style={styles.Mainroot}>
        <Text style={styles.root}>{`${texts.Our_Best_Services}`}</Text>
        <TouchableOpacity>
          <Text style={styles.Viewtext}>{`${texts.View_text}`}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={Data}
        horizontal={true}
        renderItem={({item}) => <Cleaningcard item={item} />}
      />
    </View>
  );
};

export default BestServices;
