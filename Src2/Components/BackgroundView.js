import React, {Children} from 'react';
import {ImageBackground, View, Text, Image, StyleSheet} from 'react-native';
import {hp, wp} from '../Constants/Dimension';
import {getText} from '../Constants/Text';
const GlobalBackground = props => {
  return (
    <ImageBackground
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWJFotFTixd8uDrVqEIBMdxAH-r1WodGlGHlQJ_Cn-Q&usqp=CAU&ec=48665698',
      }}
      blurRadius={3}
      style={{flex: 1}}>
      {props.haswhitebackground ? (
        <View>
          <View style={styles.imageView}>
            <Image
              source={{
                uri: 'data:image/png;base64,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',
              }}
              style={styles.image}
            />
            <Text style={styles.rightjoy}>{getText.RIGHTJOY}</Text>
          </View>

          <View style={styles.Modallook}>{props.hastextinput}</View>
        </View>
      ) : (
        <View>{props.hasbuttonView}</View>
      )}
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  imageView: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: hp('4%'),
    paddingTop: hp('12%'),
  },
  image: {
    width: wp('8%'),
    height: hp('4.5%'),
    marginRight: wp('3%'),
    marginLeft: wp('4.5%'),
  },
  rightjoy: {
    color: 'white',
    fontSize: hp('3.2%'),
    fontWeight: 'bold',
  },
  Modallook: {
    height: hp('80%'),
    backgroundColor: 'white',
    borderTopLeftRadius: wp('13%'),
    borderTopRightRadius: wp('13%'),
  },
});
export default GlobalBackground;
