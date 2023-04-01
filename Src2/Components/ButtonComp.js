import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { hp, wp } from "../Constants/Dimension";

export const Button = (props) => {
    return (
        <View>
            <TouchableOpacity style={[styles.defaultbtn, props.btnStyle ? props.btnStyle : styles.additionalStyle]
            } onPress={props.onPress}>
                <Text style={{ color: props.textcolor?props.textcolor:'white', fontWeight: 'bold' }}>{props.btnName}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    defaultbtn: {
        alignItems: 'center',
        justifyContent:'center',
        // borderRadius: 7,
        padding: wp('2%'),

    },
    additionalStyle: {
        backgroundColor: "#1E90FF",
        width: wp("90%"),
        height:hp('7.5%'),
        borderRadius: wp('4%'),

    }
})