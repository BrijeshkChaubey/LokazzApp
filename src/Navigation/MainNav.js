import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNav from './BottomNav';

const MainNav = () => {
  return (
    <NavigationContainer>
      <BottomNav />
    </NavigationContainer>
  );
};
export default MainNav;
