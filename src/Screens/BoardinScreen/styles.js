import {StyleSheet} from 'react-native';
import { hp, wp } from '../../Constants/Dimension';
import { Colorss } from '../../Constants/Color';
export const styles = StyleSheet.create({
    innerView: {
      marginHorizontal: wp('5.2%'),
    },
    imageView: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: hp('55%'),
      marginBottom: hp('3%'),
    },
    image: {
      width: wp('8%'),
      height: hp('4.5%'),
      marginRight: wp('3%'),
    },
    rightjoyText: {
      color: Colorss.White,
      fontSize: hp('3.4%'),
      fontWeight: 'bold',
    },
    text: {
      color: Colorss.White,
      fontWeight: 'bold',
      fontSize: hp('4.7%'),
    },
    ButtonView: {
      marginHorizontal: wp('4%'),
      marginTop: hp('5.4%'),
      display: 'flex',
      flexDirection: 'row',
    },
    btnStyle1: {
      backgroundColor: Colorss.ButtonColor,
      width: wp('40%'),
      marginRight: wp('5%'),
      height: hp('6.5%'),
      borderRadius: wp('4%'),
    },
    btnStyle2: {
      backgroundColor: Colorss.light_grey,
      width: wp('40%'),
      height: hp('6.5%'),
      borderRadius: wp('4%'),
    },
  });