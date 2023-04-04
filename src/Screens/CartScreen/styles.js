import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Constants/Dimension';
import {Colorss} from '../../Constants/Color';

export const styles = StyleSheet.create({
  Flatlist: {
    flex: 1,
  },
  btnStyle1: {
    backgroundColor: Colorss.ButtonColor,
    width: wp('55%'),
    marginVertical: wp('2.4%'),
    marginHorizontal: wp('11.5%'),
    height: hp('6%'),
    borderRadius: wp('4%'),
  },
  PriceView: {
    backgroundColor: Colorss.White,
    padding: wp('3%'),
  },
  root: {
    flexDirection: 'row',
  },
  inneroot: {
    marginTop: hp('1.5%'),
  },
  Totalamount: {
    color: Colorss.Green,
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
  item: {
    color: 'black',
    marginTop: hp('1%'),
  },
  taxes: {
    color: Colorss.Black,
  },
});
