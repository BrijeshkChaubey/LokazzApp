import {StyleSheet} from 'react-native';
import {Colorss} from '../../../Constants/Color';
import {hp, wp} from '../../../Constants/Dimension';

export const styles = StyleSheet.create({
  Externalroot: {
    borderRadius: 10,
    marginVertical: hp('1.5%'),
    margin: hp('2%'),

    width: wp('20%'),
    height: hp('15%'),

    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 0,
  },
  Mainroot: {
    overflow: 'hidden',
    width: wp('22%'),
    height: hp('22%'),
  },
  root: {
    flex: 1,
    color: Colorss.Black,
    fontWeight: 'bold',
  },
  image: {
    width: wp('22%'),
    height: hp('22%'),
    resizeMode: 'contain',
    borderColor:'black',
    shadowColor:'white',
    shadowRadius:5,
    shadowOpacity:1,
    borderRadius: 10,
    elevation: 5,
  },
  Titletext: {
    width: wp('18%'),
    fontWeight: 'bold',
    color: Colorss.Black,
    alignItems: 'center',
  },
});
