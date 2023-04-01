import {StyleSheet} from 'react-native';
import {Colorss} from '../../../Constants/Color';
import {hp, wp} from '../../../Constants/Dimension';
export const styles = StyleSheet.create({
  root: {
    borderRadius: 10,
    marginVertical: hp('1.5%'),
    margin: hp('2%'),
    padding: hp('0.1%'),
    height: hp('18%'),
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 0,
  },
  image: {
    width: wp('26%'),
    height: hp('8%'),
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    color: Colorss.Black,
  },
  servicetype: {
    fontWeight: '500',
    color: Colorss.grey,
  },
  innerroot: {
    flexDirection: 'row',
  },
  startText: {fontWeight: '400', color: Colorss.light_grey},
  Money: {
    fontWeight: 'bold',
    color: Colorss.Green,
  },
});
