import {StyleSheet} from 'react-native';
import { hp, wp } from '../../../Constants/Dimension';
import { Colorss } from '../../../Constants/Color';

export const styles = StyleSheet.create({
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
      color: Colorss.White,
      fontSize: hp('3.2%'),
      fontWeight: 'bold',
    },
    Modallook: {
      height: hp('80%'),
      backgroundColor: Colorss.White,
      borderTopLeftRadius: wp('13%'),
      borderTopRightRadius: wp('13%'),
    },
  });