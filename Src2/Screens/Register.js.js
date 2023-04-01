import React,{useState} from 'react';
import { View, Text, StyleSheet, Dimensions,ImageBackground } from 'react-native';
import { Button } from '../Components/ButtonComp';

import { Formcontainer } from '../Components/FormContainer';
import { Submmitbtn } from '../Components/SubmitButton';
import { Textinputcomp } from '../Components/TextinputComp';
import { isValidemail, isValidobjfield, updateError } from '../utils/method';
import { hp, wp } from '../Constants/Dimension';
import  { auth } from '../Constants/Database';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export const Registerform = ({navigation}) => {

    const[userinfo,setUserinfo]=useState({
        fullname:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const [error,setError]=useState('')
    const{ fullname,email,password,confirmPassword}=userinfo;
    const onHandleText=(value ,fieldName)=>{
    setUserinfo({...userinfo,[fieldName]:value});
    }
    const isValidform=()=>{
    if(!isValidobjfield(userinfo)) return updateError('Required all fields!',setError)
    if(!fullname.trim() || fullname.length < 3) return updateError('fullname should be valid!',setError)
    if(!isValidemail(email)) return updateError('Email is incorrect!',setError)
    if(!password.trim() || password.length < 8) return updateError('Password should be valid!',setError)
    if(password !== confirmPassword) return updateError('confirm should match!',setError)
    return true;
    }
    const handleSignUp = () => {
     createUserWithEmailAndPassword(auth,email, password)
          .then(() => {
            console.log('User account created & signed in!');
            navigation.navigate("Login")

          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }
        
            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
        
            console.error(error);
          });
      };
    const Submitform =()=>{
        if(isValidform()){
            handleSignUp()
            console.log(userinfo);

        }
    }
    return (
      <ImageBackground source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWJFotFTixd8uDrVqEIBMdxAH-r1WodGlGHlQJ_Cn-Q&usqp=CAU&ec=48665698'}}  blurRadius={3} style={{flex:1}}>
      <View > 
      <Text style={{paddingTop:160}}>Joy ride</Text>
       </View>
      <View style={{height:hp("80%"),backgroundColor:'white',borderTopLeftRadius:wp('13%'),borderTopRightRadius:wp('13%')}}>

        <Formcontainer>
            {error ? <Text style={{color:'red',fontSize:18, textAlign:'center'}}>{error}</Text>:null}
            <Textinputcomp value={fullname} onChangeText={(value)=>onHandleText(value,'fullname')} label='Full Name' placeholder='Jhon Doe' />
            <Textinputcomp  autoCapitalize='none'
            onChangeText={value=>onHandleText(value,'email')}
            value={email}
            label='Email' 
            placeholder='example@gmail.com'/>
            <Textinputcomp onChangeText={value=>onHandleText(value,'password')} value={password} label='Password' placeholder='*******' secureTextEntry/>
            <Textinputcomp onChangeText={value=>onHandleText(value,'confirmPassword')} value={confirmPassword} label='Confirm Password' placeholder='*******'  secureTextEntry />
            {/* <Submmitbtn  tittle='SignUp' /> */}
            <Button btnName="Register" 
            onPress={Submitform}
            btnStyle={styles.btnStyle}/>

        </Formcontainer>
        </View>
       </ImageBackground>


    )
}

const styles = StyleSheet.create({


    Text: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    btnStyle:{
      width:wp("40%" ),
      backgroundColor:'red'
    }
})
