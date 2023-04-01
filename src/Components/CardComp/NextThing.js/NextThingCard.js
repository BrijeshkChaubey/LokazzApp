import {View, Text, ImageBackground, BlurView} from 'react-native';
import React from 'react';
import {styles} from './styles';

const NextThingCard = ({...props}) => {
  const data = props;

  return (
    <View style={styles.Externalroot}>
      <View style={styles.Mainroot}>
        <ImageBackground
          blurRadius={2}
          style={styles.image}
          source={{uri: data.item.image}}>
          <Text style={styles.Titletext}>{data.item.title}</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

export default NextThingCard;
