import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {FirstScreen} from '../Screens/BoardinScreen/FirstScreen';
import {Loginform} from '../Screens/LogInscreen/Login';
import {Registerform} from '../Screens/SignUpscreen/Register';
import BottomNav from './BottomNav';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={FirstScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Loginform}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Registerform}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={BottomNav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default StackNav;
