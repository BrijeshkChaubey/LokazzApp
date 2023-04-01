import React from "react";
import {ImageBackground ,View,Text} from 'react-native';
import { hp } from "../Constants/Dimension";
const GlobalBackground=()=>{
    return(
        <ImageBackground source={{uri:'https://cdn.create.vista.com/api/media/medium/190787384/stock-photo-smiling-african-american-teacher-writing?token='}}  blurRadius={3} >
        {/* <View style={{height:hp('100%')}}> */}
        {/* <Text style={{paddingTop:160}}>Joy ride</Text> */}
        {/* </View> */}

       

       </ImageBackground>
    )
}
export default GlobalBackground;

       
       
    