import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { FirstScreen } from '../Screens/FirstScreen';
import { Registerform } from '../Screens/Register.js';
import { Loginform } from '../Screens/Login';
import BottomNav from '../../src/Navigation/BottomNav';

const Stack = createStackNavigator();

const StackNav=()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={FirstScreen} 
      options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Loginform}  options={{headerShown:false}}/> 
      <Stack.Screen name="Register" component={Registerform}  options={{headerShown:false}} /> 
      <Stack.Screen name="Dashboard" component={BottomNav}  options={{headerShown:false}} />
      </Stack.Navigator>
  );
}
export default StackNav;