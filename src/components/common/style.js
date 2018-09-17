import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  },
  headerContainer: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    zIndex: 5
  },
  cardContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    margin: 15,
  },
  cardSection: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
  cardImageSection: {
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
  cardButtonSection: {
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
  image: {
    height: 280,
    width: null,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.1,
  },
  name: {
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 10,
  },
  level: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 18,
    paddingTop: 5,
  },
  imageContainer: {
    elevation: 1,
  },
  editImage: {
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  },
  userDetailContainer: {
    marginTop: 20,
  },
  userDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 40,
    marginRight: 40,
    paddingTop: 25,
  },
  userDetailTitle: {
    color: 'gray',
    fontSize: 16,
  },
  userDetail: {
    fontSize: 17,
  },
  partnersTitle: {
    marginLeft: 30,
    paddingTop: 15,
  },
  partnersImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  partnersImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'gainsboro',
  },
  uploadImageContainer: {
    height: 280,
  },
  noImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 280
  },
  uploadImageLoadingOverlay: {
    height: 280,
    width: '100%',
    position:'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10
  },
  uploadImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
    width: 180,
    borderRadius: 90,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'gray',
  },
  uploadImageText: {
    color: 'gray',
  },
  yelpContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1
  },
  yelpTitle: {
    fontSize: 20,
    fontWeight: '600'
  },
  addressContainer: {
    paddingVertical: 3
  },
  addressTxt: {
    color: 'gray'
  },
  yelpContent: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  yelpRating: {
    paddingLeft: 10
  },
  yelpReviewTxt: {
    color: '#999999',
    paddingTop: 3
  },
  yelpLink: {
    height: 40,
    width: 80,
    position: 'absolute',
    right: -10
  },
  yelpLinkImg: {
    width: '100%',
    height: '100%'
  }
});
