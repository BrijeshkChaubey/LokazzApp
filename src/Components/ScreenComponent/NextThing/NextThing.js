import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import NextthingData from '../../../Assets/Datas/NextthingData';
import {styles} from './styles';
import {texts} from '../../../Constants/Text';
import NextThingCard from '../../CardComp/NextThing.js/NextThingCard';

const NextThing = () => {
  const Data = NextthingData;
  return (
    <View style={styles.Externalroot}>
      <View style={styles.Mainroot}>
        <Text style={styles.root}>{`${texts.Next_Thing}`}</Text>
        <TouchableOpacity>
          <Text style={styles.Viewtext}>{`${texts.View_text}`}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={Data}
        horizontal={true}
        renderItem={({item}) => <NextThingCard item={item} />}
      />
    </View>
  );
};

export default NextThing;
