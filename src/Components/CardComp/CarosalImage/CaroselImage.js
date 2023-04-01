import React, {useState, useCallback} from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import {Colorss} from '../../../Constants/Color';
import {styles} from './styles';

export const Carosalimagescreen = (...props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;
  const data = props[0].data[0].image;

  const onFlatlistUpdate = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWidth - 40}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatlistUpdate}
      />

      <View style={styles.dots}>
        {data.map((image, index) => (
          <View
            style={[
              styles.dot,
              {
                backgroundColor:
                  index === activeIndex ? Colorss.Light_Blue : Colorss.grey,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};
