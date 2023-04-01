import {StyleSheet} from 'react-native';
import {Colorss} from '../../../Constants/Color';
import {hp, wp} from '../../../Constants/Dimension';
export const styles = StyleSheet.create({
  root: {
    borderRadius: 10,
    marginVertical: hp('1.5%'),
    margin: hp('1.5%'),
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 0,
  },
  image: {
    width: wp('90%'),
    height: hp('28%'),
    resizeMode: 'contain',
    borderRadius: 10,
  },
});
