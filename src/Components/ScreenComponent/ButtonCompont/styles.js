import {StyleSheet} from 'react-native';
import { Colorss } from '../../../Constants/Color';
import { hp, wp } from '../../../Constants/Dimension';

export const styles = StyleSheet.create({
    defaultbtn: {
        alignItems: 'center',
        justifyContent:'center',
        padding: wp('2%'),

    },
    additionalStyle: {
        backgroundColor: Colorss.ButtonColor,
        width: wp("90%"),
        height:hp('7.5%'),
        borderRadius: wp('4%'),

    }
})