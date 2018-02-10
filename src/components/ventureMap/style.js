import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const mapStyles = StyleSheet.create({
  outerContainer: {
    width: width,
    height: height,
  },
  innerContainer: {
    marginTop: 20,
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mapView: {
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: width,
    height: height,
  },
})
