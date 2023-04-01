import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button} from '../Components/ButtonComp';
import Icon from 'react-native-vector-icons/Entypo';

import {Formcontainer} from '../Components/FormContainer';
import {Submmitbtn} from '../Components/SubmitButton';
import {Textinputcomp} from '../Components/TextinputComp';
import {isValidemail, isValidobjfield, updateError} from '../utils/method';
import {hp, wp} from '../Constants/Dimension';
import {auth} from '../Constants/Database';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import GlobalBackground from '../Components/BackgroundView';
import {useNavigation} from '@react-navigation/native';

export const Registerform = () => {
  const navigation = useNavigation();
  const [hidePassword, sethidePassword] = useState(true);
  const [hideconfirmPassword, sethideconfirmPassword] = useState(true);
  const [userinfo, setUserinfo] = useState({
    email: '',
    number: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const {number, email, password, confirmPassword} = userinfo;
  const onHandleText = (value, fieldName) => {
    setUserinfo({...userinfo, [fieldName]: value});
  };
  const onHandlePassword = (value, fieldName) => {
    setUserinfo({...userinfo, [fieldName]: value});
  };
  const onHandleconfirmPassword = (value, fieldName) => {
    setUserinfo({...userinfo, [fieldName]: value});
  };
  managePasswordVisibility = () => {
    console.log('Managepass visibility');
    sethidePassword(!hidePassword);
  };
  manageconfirmPasswordVisibility = () => {
    console.log('Managepass visibility');
    sethideconfirmPassword(!hideconfirmPassword);
  };
  const isValidform = () => {
    if (!isValidobjfield(userinfo))
      return updateError('Required all fields!', setError);
    if (!fullname.trim() || fullname.length < 3)
      return updateError('fullname should be valid!', setError);
    if (!isValidemail(email))
      return updateError('Email is incorrect!', setError);
    if (!password.trim() || password.length < 8)
      return updateError('Password should be valid!', setError);
    if (password !== confirmPassword)
      return updateError('confirm should match!', setError);
    return true;
  };
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Login');
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
  const Submitform = () => {
    // if (isValidform()) {
    //   handleSignUp();
    //   console.log(userinfo);
    // }
    handleSignUp();
  };
  const onLogin=()=>{
    navigation.navigate('Login');
  }
  return (
    <GlobalBackground
      haswhitebackground
      hastextinput={
        <Formcontainer>
          {error ? <Text style={styles.ErrorText}>{error}</Text> : null}
          <View style={styles.MainView}>
            <Text style={styles.SignupText}>Sign Up</Text>
          </View>

          <Textinputcomp
            autoCapitalize="none"
            onChangeText={value => onHandleText(value, 'email')}
            // value={email}
            label="Email"
            placeholder="example@gmail.com"
          />
          <Textinputcomp
            // value={number}
            onChangeText={value => onHandleText(value, 'number')}
            label="Mobile Number"
          />

          <View>
            <Text style={styles.Text}>Password</Text>
            <TextInput
              onChangeText={value => onHandlePassword(value, 'password')}
              //  value={password}
              placeholder="*******"
              style={styles.Textinput}
              secureTextEntry={hidePassword}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.visibilityBtn}
              onPress={managePasswordVisibility}>
              {hidePassword ? (
                <Icon name="eye-with-line" size={25} color="grey" />
              ) : (
                <Icon name="eye" size={25} color="grey" />
              )}
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.Text}>confirm Password</Text>
            <TextInput
              onChangeText={value =>
                onHandleconfirmPassword(value, 'confirmPassword')
              }
              //  value={confirmPassword}
              placeholder="*******"
              style={styles.Textinput}
              secureTextEntry={hideconfirmPassword}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.visibilityBtn}
              onPress={manageconfirmPasswordVisibility}>
              {hideconfirmPassword ? (
                <Icon name="eye-with-line" size={25} color="grey" />
              ) : (
                <Icon name="eye" size={25} color="grey" />
              )}
            </TouchableOpacity>
          </View>
          <Button btnName="Sign Up" onPress={Submitform} />
          <Button
            btnName="Log In"
            onPress={onLogin}
            btnStyle={styles.btnStyle}
            textcolor="#1E90FF"
          />
        </Formcontainer>
      }></GlobalBackground>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 50,

    fontWeight: 'bold',
  },
  btnStyle: {
    paddingTop: hp('7%'),
    backgroundColor: 'white',
  },
  // SignupStyle:{
  //   // width:wp("40%" ),
  //   paddingTop:60,
  //   backgroundColor:'white'

  // },
  Text: {
    fontWeight: 'bold',
    color: 'black',
  },
  Textinput: {
    borderWidth: wp('0.3%'),
    borderColor: 'lightgrey',
    color: 'black',
    height: hp('5%'),
    borderRadius: wp('3%'),
    fontsize: hp('5%'),
    paddingLeft: wp('3%'),
    marginBottom: hp('4%'),
  },

  visibilityBtn: {
    position: 'absolute',
    right: wp('2%'),
    height: hp('4%'),
    width: wp('7%'),
    marginTop: hp('3%'),
  },
  ErrorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },

  SignupText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: hp('3.5%'),
  },
  MainView: {
    marginVertical: hp('4.5%'),
  },
});
