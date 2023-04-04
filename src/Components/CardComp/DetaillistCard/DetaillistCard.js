import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colorss} from '../../../Constants/Color';
import {hp, wp} from '../../../Constants/Dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const DetaillistCard = props => {
  const navigation = useNavigation();
  const title = props.item.title;
  return (
    <View>
      <View style={styles.CardView}>
        <Image
          source={{uri: props.item.image}}
          resizeMode="contain"
          style={styles.Image}
        />
        <View style={styles.HeadingsMainView}>
          <View style={styles.HeadingView}>
            <Text style={styles.Heading1}>{props.item.title}</Text>
            <Text style={styles.Heading2}>{props.item.Servicecharge}</Text>
          </View>
          <View style={styles.Arrowbutton}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Cartscreen', {title: title})}>
              <AntDesign
                name="rightcircle"
                size={hp('3%')}
                color={Colorss.light_grey}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetaillistCard;
