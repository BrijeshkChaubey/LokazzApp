import {StyleSheet} from 'react-native';
import {Colorss} from '../../Constants/Color';
import {hp, wp} from '../../Constants/Dimension';

export const styles = StyleSheet.create({
  Mainroot: {
    backgroundColor: Colorss.White,
    margin: hp('0.5%'),
  },
  root: {
    flexDirection: 'row',
    paddingBottom: hp('1.2%'),
    alignItems: 'center',
    margin: hp('1%'),
  },
  currentlocationText: {
    fontWeight: 'bold',
    fontSize: hp('1.5%'),
    color: Colorss.grey,
  },
  locationtext: {
    fontWeight: 'bold',
    fontSize: hp('1.5%'),
    color: Colorss.Black,
  },
  Search: {
    flexDirection: 'row',
    backgroundColor: Colorss.light_grey,
    width: wp('88%'),
    padding: hp('0.2%'),
    height: hp('5.5%'),
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
});
