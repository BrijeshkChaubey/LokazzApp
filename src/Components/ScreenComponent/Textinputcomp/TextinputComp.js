import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import { styles } from './style';

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

