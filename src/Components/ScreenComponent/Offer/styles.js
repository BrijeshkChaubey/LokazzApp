import {StyleSheet} from 'react-native';
import {Colorss} from '../../../Constants/Color';
import {hp, wp} from '../../../Constants/Dimension';

export const styles = StyleSheet.create({
  Externalroot: {
    backgroundColor: Colorss.White,
    margin: hp('0.5%'),
  },
  Mainroot: {
    flexDirection: 'row',
  },
  root: {
    flex: 1,
    color: Colorss.Black,
    fontWeight: 'bold',
  },
  Viewtext: {
    color: Colorss.Light_Blue,
    fontWeight: 'bold',
  },
});
