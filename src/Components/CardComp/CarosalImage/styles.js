import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  root: {width: 400},
  image: {
    borderRadius: 8,
    margin: 10,
    height: 160,
    width: 600,
    resizeMode: 'contain',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#ededed',
    borderColor: '#c9c9c9',
    margin: 5,
  },
});
