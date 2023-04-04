import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderCard from '../../Components/CardComp/HeaderCard/HeaderCard';
import {hp} from '../../Constants/Dimension';
import DetaillistCard from '../../Components/CardComp/DetaillistCard/DetaillistCard';
import Detaillistdata from '../../Assets/Datas/Detaillistdata';

const Servicelist = () => {
  const Data = Detaillistdata;
  return (
    <ScrollView>
      <HeaderCard title={'Cleaning control'} />
      <View style={styles.Flatlist}>
        <FlatList
          data={Data}
          renderItem={({item}) => <DetaillistCard item={item} />}
        />
      </View>
    </ScrollView>
  );
};

export default Servicelist;

const styles = StyleSheet.create({
  Flatlist: {
    marginTop: hp('0.6%'),
  },
});
