import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const mapStyles = StyleSheet.create({
  outerContainer: {
    width: width,
    height: height,
  },
  innerContainer: {
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
  calloutContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  calloutImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  calloutHeader: {
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  calloutTitle: {
    fontSize: 16,
  },
  calloutVenturists: {
    color: 'gray',
  },
})
