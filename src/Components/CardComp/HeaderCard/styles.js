import {StyleSheet} from 'react-native';
import { hp, wp } from '../../../Constants/Dimension';
import { Colorss } from '../../../Constants/Color';

export const styles = StyleSheet.create({
    MainView:{
        backgroundColor:'white'
        ,height:hp('12%') 
    },
    innerView:{
        flexDirection:'row'
        ,marginTop:hp('4%')
    },
    Tochble:{
        marginLeft:wp('6%')
    },
    Title:{
        color:Colorss.Black,
        fontWeight:'bold',
        fontSize:hp('3.3%')
        ,marginLeft:wp('5%'),
        marginTop:hp('1%')
    }
})