import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Offersdata from '../../../Assets/Datas/Offersdata';
import {styles} from './styles';
import {texts} from '../../../Constants/Text';
import OfferCard from '../../CardComp/OfferCard/OffersCard';

const Offers = () => {
  const Data = Offersdata;
  return (
    <View style={styles.Externalroot}>
      <View style={styles.Mainroot}>
        <Text style={styles.root}>{`${texts.Offers}`}</Text>
        <TouchableOpacity>
          <Text style={styles.Viewtext}>{`${texts.View_text}`}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={Data}
        horizontal={true}
        renderItem={({item}) => <OfferCard item={item} />}
      />
    </View>
  );
};

export default Offers;
