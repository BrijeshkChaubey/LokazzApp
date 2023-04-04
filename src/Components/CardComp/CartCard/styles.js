import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../Constants/Dimension';
import {Colorss} from '../../../Constants/Color';
export const styles = StyleSheet.create({
  MainView: {
    backgroundColor: '#F4F5FA',
    marginTop: hp('0.5%'),
    padding: wp('3.6%'),
  },
  innerView: {
    flexDirection: 'row',
  },
  innerView2: {
    flexDirection: 'row',
  },
  HeadingView: {
    width: wp('55%'),
  },
  PlaceText: {
    color: Colorss.Black,
    fontWeight: '500',
    fontSize: hp('2.5%'),
  },
  TimeView: {
    flexDirection: 'row',
    marginTop: hp('0.3%'),
    marginBottom: hp('0.3%'),
  },
  timeText: {
    marginLeft: wp('0.4%'),
    color: Colorss.light_grey,
  },
  MoreInfo: {
    color: Colorss.ButtonColor,
  },
  visibilityBtn: {
    width: wp('7%'),
    marginTop: hp('1.6%'),
  },
  MoneyText: {
    color: Colorss.Black,
    marginLeft: wp('17%'),
    fontSize: hp('2.5%'),
    fontWeight: '500',
    marginTop: hp('2%'),
    width: wp('14%'),
  },
  MainHeading: {
    color: Colorss.Black,
    fontWeight: '600',
    fontSize: hp('3%'),
    paddingBottom: hp('3%'),
  },
});
