import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './StackNav';

const Mainnav=()=>{
  return (
    <NavigationContainer>
        <StackNav/>
    </NavigationContainer>
  );
}
export default Mainnav;