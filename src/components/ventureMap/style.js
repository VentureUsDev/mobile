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
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  calloutHeader: {
    marginLeft: 10,
  },
  calloutTitle: {
    fontSize: 18,
    fontWeight: '600'
  },
  date: {
    color: 'gray',
    fontSize: 16,
  },
  yelpRating: {
    paddingLeft: 10
  },
  yelpReviewTxt: {
    color: '#999999',
    paddingTop: 3
  },
  yelpContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    width: 200
  },
  yelpLink: {
    height: 45,
    width: 90,
    position: 'absolute',
    right: -10,
    bottom: 5
  },
  yelpLinkImg: {
    width: '100%',
    height: '100%'
  }
})
