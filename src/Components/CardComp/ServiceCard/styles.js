import {StyleSheet} from 'react-native';
import {Colorss} from '../../../Constants/Color';
import {hp, wp} from '../../../Constants/Dimension';
export const styles = StyleSheet.create({
  root: {
    borderRadius: 10,
    marginVertical: hp('1.5%'),
    margin: hp('2%'),
    padding: hp('0.1%'),
    width: wp('20%'),
    height: hp('15%'),
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 0,
  },
  image: {
    width: wp('15%'),
    height: hp('8%'),
    borderRadius: 10,
  },
  Title: {
    color: Colorss.Black,
    marginTop: hp('2.5%'),
  },
});
