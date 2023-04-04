import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import React from 'react'
import { Colorss } from '../../../Constants/Color'
import { hp, wp } from '../../../Constants/Dimension'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

const HeaderCard = (props) => {
    const navigation=useNavigation()
  return (
    <View style={styles.MainView}>
    <View style={styles.innerView}>
    <TouchableOpacity onPress={()=>navigation.goBack()}
      style={styles.Tochble}
      >
      <AntDesign name='leftcircle' size={hp('6%')} color={Colorss.light_grey}/> 
      </TouchableOpacity>
      
      <Text style={styles.Title}>{props.title}</Text>
    </View>
   
    </View>
  )
}

export default HeaderCard

