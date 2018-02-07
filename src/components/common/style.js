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
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
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
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
  image: {
    height: 280,
    flex: 1,
    width: null,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.1,
    elevation: 1,
  },
  userDetailContainer: {
    marginTop: 20,
  },
  userDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 40,
    marginRight: 40,
    paddingTop: 15,
  },
  userDetailTitle: {
    color: 'gray',
    fontSize: 16,
  },
  userDetail: {
    fontSize: 18,
  },
  partnersTitle: {
    marginLeft: 40,
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
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
