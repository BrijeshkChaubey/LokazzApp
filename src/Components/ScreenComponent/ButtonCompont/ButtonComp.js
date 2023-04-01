import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colorss } from "../../../Constants/Color";
import { styles } from "./styles";

export const Button = (props) => {
    return (
        <View>
            <TouchableOpacity style={[styles.defaultbtn, props.btnStyle ? props.btnStyle : styles.additionalStyle]
            } onPress={props.onPress}>
                <Text style={{ color: props.textcolor?props.textcolor:Colorss.Black, fontWeight: 'bold' }}>{props.btnName}</Text>
            </TouchableOpacity>
        </View>
    )
}
