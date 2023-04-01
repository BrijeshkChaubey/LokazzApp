import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput, Alert,ImageBackground} from 'react-native';
import { isValidemail, isValidobjfield, updateError } from '../utils/method';
import { Textinputcomp } from '../Components/TextinputComp';
import { Formcontainer } from '../Components/FormContainer';
import { Button } from '../Components/ButtonComp';
import { hp, wp } from '../Constants/Dimension';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import GlobalBackground from '../Components/BackgroundView';

export const Loginform = () => {
  const navigation=useNavigation()
  const [userinfo, setUserinfo] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const {email, password} = userinfo;

  const auth = getAuth();
  const siginIn = () => {
    try {
      signInWithEmailAndPassword(auth,email, password)
        .then(() => {
            
            navigation.navigate("Dashboard")
        })
        .catch(error => {
          console.log(error);
          console.log("Login",userinfo)
          Alert.alert('Check Email and password');
        });
    } catch (error) {
      Alert.alert(error);
    }
  };
  
 
  const onHandleText = (value, fieldName) => {
    setUserinfo({...userinfo, [fieldName]: value});
  };

  const isValidform = () => {
    if (!isValidobjfield(userinfo))
      return updateError('Required all fields!', setError);

    if (!isValidemail(email))
      return updateError('Email is incorrect!', setError);
    if (!password.trim() || password.length < 8)
      return updateError('Password should be valid!', setError);

    return true;
  };
  const Submitform = () => {
    if (isValidform()) {
        siginIn()
      
         
    }
  };
  return (
    <ImageBackground source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWJFotFTixd8uDrVqEIBMdxAH-r1WodGlGHlQJ_Cn-Q&usqp=CAU&ec=48665698'}}  blurRadius={3} style={{flex:1}}>
    <View > 
    <Text style={{paddingTop:160}}>Joy ride</Text>
     </View>
    <View style={{height:hp("80%"),backgroundColor:'white',borderTopLeftRadius:wp('13%'),borderTopRightRadius:wp('13%')}}>
    <Formcontainer>
      {error ? (
        <Text style={{color: 'red', fontSize: 18, textAlign: 'center'}}>
          {error}
        </Text>
      ) : null}
      <Textinputcomp
        autoCapitalize="none"
        onChangeText={value => onHandleText(value, 'email')}
        value={email}
        label="Email"
        placeholder="example@gmail.com"
      />
      <Textinputcomp
        onChangeText={value => onHandleText(value, 'password')}
        value={password}
        label="Password"
        placeholder="*******"
        secureTextEntry
      />
      <Button onPress={Submitform} btnName="Login" 
            btnStyle={styles.btnStyle}/>
    </Formcontainer>
    </View>
    
    

   </ImageBackground>
     
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 50,

    fontWeight: 'bold',
  },
  btnStyle:{
    width:wp("40%" ),
    backgroundColor:'red'
  }
});
