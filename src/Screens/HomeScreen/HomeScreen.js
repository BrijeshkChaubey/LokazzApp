import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import React, {useEffect} from 'react';
import Services from '../../Components/ScreenComponent/Services/Services';
import Cleaning from '../../Components/ScreenComponent/Cleanning/Cleaning';
import BestServices from '../../Components/ScreenComponent/BestServices/BestServices';
import NextThing from '../../Components/ScreenComponent/NextThing/NextThing';
import Offers from '../../Components/ScreenComponent/Offer/Offer';
import {Carosalimagescreen} from '../../Components/CardComp/CarosalImage/CaroselImage';


import {styles} from './styles';
import CaroselImagedata from '../../Assets/Datas/CaroselImagedata';

const HomeScreen = () => {
  const data = CaroselImagedata;

  // useEffect(() => {
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       // const Address= Geocoder.geocodePosition("40.7809261", "-73.9637594" )
  //       console.log('Position', position);
  //       const currentLongitude = JSON.stringify(position.coords.longitude);

  //       const currentLatitude = JSON.stringify(position.coords.latitude);
  //     },
  //     error => alert(error.message),
  //     {
  //       enableHighAccuracy: true,
  //       timeout: 20000,
  //       maximumAge: 1000,
  //     },
  //   );

  //   var NY = {
  //     lat: 40.7809261,
  //     lng: -73.9637594,
  //   };
  // }, []);

  return (
    <ScrollView>
      <View style={styles.Mainroot}>
        <View style={styles.root}>
          <Icon name="location-pin" size={25} color='black' />
          <View style={{flex: 1}}>
            <Text style={styles.currentlocationText}> Current location</Text>
            <Text style={styles.locationtext}>
              Location
              <AntDesign name="caretdown" size={10} />
            </Text>
          </View>
          <FontAwesome name="bell-o" size={20} color='black'  />
        </View>
        <View>
          <View style={styles.Search}>
            <Feather
              name="search"
              size={20}
              color={'grey'}
              style={{marginLeft: 4}}
            />
            <TextInput placeholder="Search" />
          </View>
          <Carosalimagescreen data={data} />
        </View>
        <ScrollView>
          <Services />
        </ScrollView>
      </View>

      <ScrollView>
        <Cleaning />
      </ScrollView>
      <ScrollView>
        <BestServices />
      </ScrollView>
      <ScrollView>
        <NextThing />
      </ScrollView>
      <ScrollView>
        <Offers />
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;
