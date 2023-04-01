import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { wp } from '../../../Constants/Dimension';

export const Formcontainer = ({ children }) => {
    return (
        <View style={styles.container}>

            {children}

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: wp('4%'),

    },


})
