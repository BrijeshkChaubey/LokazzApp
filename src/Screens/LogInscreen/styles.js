import {StyleSheet} from 'react-native';
import { hp, wp } from '../../Constants/Dimension';
import { Colorss } from '../../Constants/Color';

export const styles = StyleSheet.create({
    SignupStyle: {
      paddingTop: hp('7%'),
      backgroundColor: Colorss.White,
    },
    Text: {
      fontWeight: 'bold',
      color: Colorss.Black,
    },
    Textinput: {
      borderWidth: wp('0.3%'),
      borderColor: Colorss.light_grey,
      color: Colorss.Black,
      height: hp('5%'),
      borderRadius: wp('3%'),
      fontsize: hp('5%'),
      paddingLeft: wp('3%'),
      marginBottom: hp('4.5%'),
    },
    visibilityBtn: {
      position: 'absolute',
      right: wp('2%'),
      height: hp('4%'),
      width: wp('7%'),
      marginTop: hp('3%'),
    },
    ErrorText: {
      color: Colorss.Red,
      fontSize: 18,
      textAlign: 'center',
    },
    LogText: {
      color: Colorss.Black,
      fontWeight: 'bold',
      fontSize: hp('3.5%'),
    },
    MainView: {
      marginVertical: hp('4.5%'),
    },
  });
  