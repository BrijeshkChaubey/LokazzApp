import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colorss} from '../../../Constants/Color';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {TotalAmount} from '../../../redux/action';

const CartCard = props => {
  const dispatch = useDispatch();
  const [Amount, setAmount] = useState(true);
  manageAmount = () => {
    if (Amount === true) {
      const datatopass = {amount: props.item.money, act: 'plus'};
      dispatch(TotalAmount(datatopass));
      setAmount(!Amount);
    } else {
      const datatopass = {amount: props.item.money, act: 'minus'};
      dispatch(TotalAmount(datatopass));
      setAmount(!Amount);
    }
  };
  return (
    <View style={styles.MainView}>
      <View style={styles.innerView}>
        <View style={styles.HeadingView}>
          <Text style={styles.PlaceText}>{props.item.title}</Text>
          <View style={styles.TimeView}>
            <EvilIcons name="clock" size={17} color={Colorss.light_grey} />
            <Text style={styles.timeText}>{props.item.time} min</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.MoreInfo}>MORE INFO</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.innerView}>
          <Text style={styles.MoneyText}>$ {props.item.money}</Text>
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

export default CartCard;
