import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {isValidemail, isValidobjfield, updateError} from '../utils/method';
import {Textinputcomp} from '../Components/TextinputComp';
import {Formcontainer} from '../Components/FormContainer';
import {Button} from '../Components/ButtonComp';
import {hp, wp} from '../Constants/Dimension';
import Icon from 'react-native-vector-icons/Entypo';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';
import GlobalBackground from '../Components/BackgroundView';
import {auth} from '../Constants/Database';

export const Loginform = () => {
  const navigation = useNavigation();
  const [hidePassword, sethidePassword] = useState(true);
  const [userinfo, setUserinfo] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const {email, password} = userinfo;

  const siginIn = () => {
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigation.navigate('Dashboard');
        })
        .catch(error => {
          console.log(error);
          console.log('Login', userinfo);
          Alert.alert('Check Email and password');
        });
    } catch (error) {
      Alert.alert(error);
    }
  };

  const onHandleText = (value, fieldName) => {
    setUserinfo({...userinfo, [fieldName]: value});
  };
  const onHandlePassword = (value, fieldName) => {
    setUserinfo({...userinfo, [fieldName]: value});
  };
  managePasswordVisibility = () => {
    console.log('Managepass visibility');
    sethidePassword(!hidePassword);
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
  const OnSignup=()=>{
    navigation.navigate('Register');
  }
  const Submitform = () => {
    // if (isValidform()) {
    //   siginIn();
    // }
    siginIn();
  };
  return (
    <GlobalBackground
      haswhitebackground
      hastextinput={
        <Formcontainer>
          <View style={styles.MainView}>
            <Text style={styles.LogText}>Log In</Text>
          </View>
          {error ? <Text style={styles.ErrorText}>{error}</Text> : null}
          <Textinputcomp
            autoCapitalize="none"
            onChangeText={value => onHandleText(value, 'email')}
            // value={email}
            label="Email"
            placeholder="example@gmail.com"
          />
          <View>
            <Text style={styles.Text}>Password</Text>
            <TextInput
              onChangeText={value => onHandlePassword(value, 'password')}
              // value={password}
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

          <Button onPress={Submitform} btnName="Login" />
          <Button
            btnName="Forget Password ?"
            btnStyle={styles.SignupStyle}
            textcolor="grey"
          />
          <Button
            btnName="Sign Up"
            onPress={OnSignup}
            btnStyle={styles.SignupStyle}
            textcolor="#1E90FF"
          />
        </Formcontainer>
      }></GlobalBackground>
  );
};

const styles = StyleSheet.create({
  SignupStyle: {
    paddingTop: hp('7%'),
    backgroundColor: 'white',
  },
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
    marginBottom: hp('4.5%'),
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
  LogText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: hp('3.5%'),
  },
  MainView: {
    marginVertical: hp('4.5%'),
  },
});
