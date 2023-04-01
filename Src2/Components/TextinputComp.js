import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import { hp, wp } from '../Constants/Dimension';

export const Textinputcomp = ( props) => {
    const {placeholder,label}=props
    return (
        <View >
            <Text style={styles.Text}>{label}</Text>
            <TextInput
               {...props}
                placeholder={placeholder}
                style={styles.Textinput}
            />


        </View>

    )
}

const styles = StyleSheet.create({
    Text: {
        fontWeight: 'bold',
        color:'black'
    },
    Textinput: {
        borderWidth: wp("0.3%"),
        borderColor: 'lightgrey',
        color: 'black',
        height: hp("5%"),
        borderRadius: wp('3%'),
        fontsize: hp('5%'),
        paddingLeft: wp('3%'),
        marginBottom: hp('4%'),
      },


})