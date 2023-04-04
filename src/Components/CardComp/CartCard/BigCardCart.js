import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import {Colorss} from '../../../Constants/Color';
import {useDispatch} from 'react-redux';
import {TotalAmount} from '../../../redux/action';

const BigCardCart = () => {
  const dispatch = useDispatch();
  const [Amount, setAmount] = useState(true);
  manageAmount = () => {
    if (Amount === true) {
      const datatopass = {amount: 69, act: 'plus'};
      dispatch(TotalAmount(datatopass));
      setAmount(!Amount);
    } else {
      const datatopass = {amount: 69, act: 'minus'};
      dispatch(TotalAmount(datatopass));
      setAmount(!Amount);
    }
  };
  return (
    <View style={styles.MainView}>
      <Text style={styles.MainHeading}>Offices Pest Control</Text>

      <View style={styles.innerView}>
        <View style={styles.HeadingView}>
          <Text style={styles.PlaceText}>Offices</Text>
          <View style={styles.TimeView}>
            <EvilIcons name="clock" size={17} color={Colorss.light_grey} />
            <Text style={styles.timeText}>45 min</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.MoreInfo}>MORE INFO</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.innerView2}>
          <Text style={styles.MoneyText}>$ 69</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.visibilityBtn}
            onPress={manageAmount}>
            {Amount ? (
              <AntDesign name="plussquare" size={25} color={Colorss.Black} />
            ) : (
              <FontAwesome
                name="minus-square-o"
                size={30}
                color={Colorss.Black}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BigCardCart;
