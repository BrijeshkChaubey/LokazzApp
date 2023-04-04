import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Cleaningdata from '../../../Assets/Datas/Cleaningdata';
import {styles} from './styles';
import {texts} from '../../../Constants/Text';
import Cleaningcard from '../../CardComp/Cleaningcard/Cleaningcard';
import { useNavigation } from '@react-navigation/native';

const Cleaning = () => {
  const navigation=useNavigation()
  const Data = Cleaningdata;
  return (
    <View style={styles.Externalroot}>
      <View style={styles.Mainroot}>
        <Text style={styles.root}>{`${texts.Cleaning_pest}`}</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Cleanin & cONTROL')}>
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

export default Cleaning;
