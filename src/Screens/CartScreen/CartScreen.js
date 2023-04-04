import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import HeaderCard from '../../Components/CardComp/HeaderCard/HeaderCard';
import CartCard from '../../Components/CardComp/CartCard/CartCard';
import Cartdata from '../../Assets/Datas/Cartdata';
import BigCardCart from '../../Components/CardComp/CartCard/BigCardCart';
import {Button} from '../../Components/ScreenComponent/ButtonCompont/ButtonComp';
import {Colorss} from '../../Constants/Color';
import {styles} from './styles';

const CartScreen = props => {
  const selector = useSelector(state => state);
  const title = props.route.params.title;
  const Data = Cartdata;

  return (
    <View>
      <ScrollView>
        <HeaderCard title={title} />

        <View style={styles.Flatlist}>
          <FlatList
            data={Data}
            renderItem={({item}) => <CartCard item={item} />}
          />
        </View>
        <BigCardCart amount={69} />
      </ScrollView>
      <View style={styles.PriceView}>
        <View style={styles.root}>
          <View style={styles.inneroot}>
            <View style={styles.root}>
              <Text style={styles.Totalamount}>$ {selector.Total}</Text>

              <Text style={styles.item}> {selector.item} item</Text>
            </View>
            <Text style={styles.taxes}> inc. of all taxes</Text>
          </View>
          <Button
            btnName="Proceed"
            btnStyle={styles.btnStyle1}
            textcolor={Colorss.White}
          />
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
