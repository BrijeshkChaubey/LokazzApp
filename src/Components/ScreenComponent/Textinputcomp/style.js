import {StyleSheet} from 'react-native';
import { Colorss } from '../../../Constants/Color';
import { hp, wp } from '../../../Constants/Dimension';

export const styles = StyleSheet.create({
    Text: {
        fontWeight: 'bold',
        color:Colorss.Black
    },
    Textinput: {
        borderWidth: wp("0.3%"),
        borderColor: Colorss.light_grey,
        color: Colorss.Black,
        height: hp("5%"),
        borderRadius: wp('3%'),
        fontsize: hp('5%'),
        paddingLeft: wp('3%'),
        marginBottom: hp('4%'),
      },


})