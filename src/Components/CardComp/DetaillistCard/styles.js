import {StyleSheet} from 'react-native';
import { Colorss } from '../../../Constants/Color';
import { hp, wp } from '../../../Constants/Dimension';
export const styles = StyleSheet.create({
  CardView: {
    flexDirection: 'row',
    backgroundColor: Colorss.White,
    margin: wp('0.4%'),
  },
  Image: {
    height: hp('8%'),
    width: wp('20%'),
    borderRadius: wp('2%'),
    margin: wp('3%'),
  },
  HeadingsMainView: {
    flexDirection: 'row',
  },
  HeadingView: {
    marginLeft: wp('3%'),
    marginTop: hp('1.7%'),
    width: wp('50%'),
  },
  Heading1: {
    color: Colorss.Black,
    fontWeight: 'bold',
    fontSize: hp('2.6%'),
  },
  Heading2: {
    color: Colorss.Black,
    marginTop: hp('0.2%'),
  },
  Arrowbutton: {
    marginLeft: wp('7%'),
    marginTop: hp('3%'),
  },
});
