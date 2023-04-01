import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { wp } from "../../Constants/Dimension";

export const Button = (props) => {
    return (
        <View>
            <TouchableOpacity style={[styles.defaultbtn, props.btnStyle ? props.btnStyle : styles.additionalStyle]
            }>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>{props.btnName}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    defaultbtn: {
        alignItems: 'center',
        borderRadius: 7,
        padding: 10,

    },
    additionalStyle: {
        backgroundColor: "#1E90FF",
        width: wp("90%"),

    }
})