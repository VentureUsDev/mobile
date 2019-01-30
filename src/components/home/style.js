const { width } = Dimensions.get('window')

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  subheader: {
    alignItems: 'center',
    paddingTop: 20,
  },
  thumbnail: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    height: 300,
    flex: 1,
    width: null,
  },
  newVentureContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    padding: 15
  },
  formLabel: {
    fontSize: 18,
    fontWeight: '600',
  },
  categoryTexts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  category: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 15,
    height: 150,
    width: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  },
  icon: {
    color: 'white',
    fontSize: 45
  },
  name: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    paddingTop: 10
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  modal: {
    width: '90%',
    height: '30%',
    backgroundColor: 'white',
    borderRadius: 5
  },
  locationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    width: '90%',
    height: '70%',
    backgroundColor: 'white',
  },
  inputContainer: {
    marginHorizontal: 30,
    marginBottom: 15,
    marginTop: 25
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#180456',
    letterSpacing: 0.5
  },
  textInput: {
    marginVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.9)',
    height: 40,
    fontSize: 16,
  },
  inputButton: {
    fontSize: 16,
    textAlign: 'right',
    marginRight: 30,
    color: '#0065ff'
  },
  errorTxt: {
    color: 'red',
    paddingVertical: 5,
    marginHorizontal: 30,
    textAlign: 'center'
  },
  cardStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  cardContainer: {
    backgroundColor: 'white',
    paddingBottom: 15,
    width: '90%',
  },
  confirmBtn: {
    marginVertical: 20,
    marginRight: 65,
    marginLeft: 65,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmTxt: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600'
  },
  confirmDetailContainer: {
    justifyContent: 'space-between',
    minHeight: 65,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'gainsboro',
    paddingHorizontal: 15
  },
  confirmDetail: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-end'
  },
  card: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    backgroundColor: 'white',
    top: 0
  },
  congratTxt: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600'
  },
  successCard: {
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '95%'
  },
  ventureCard: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  ventureCardContent: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10
  },
  iconContainer: {
    marginHorizontal: 10,
    borderRadius: 5,
    width: 85,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontWeight: '600',
    fontSize: 20,
  },
  locationTxt: {
    fontSize: 14,
    color: '#0065ff',
    paddingTop: 5
  },
  ventureCardRight: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: 5
  },
  ventureRejectIcon: {
    color: '#0065ff',
    fontSize: 20
  },
  ventureUser: {
    paddingRight: 5
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noVentureTxt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40
  },
  noTxt: {
    textAlign: 'center',
    fontSize: 18,
    color: '#007aff'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noBtn: {
    marginVertical: 20,
    marginHorizontal: 10,
    height: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 3.2,
    borderWidth: 1,
    borderColor: '#21c0ff'
  },
  noBtnTxt: {
    color: '#21c0ff',
    fontSize: 16,
    fontWeight: '600'
  },
  yelpSection: {
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  },
  yesBtn: {
    marginVertical: 20,
    marginHorizontal: 10,
    height: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 3.2,
  },
  yesBtnTxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  },
  disabled: {
    opacity: 0.3,
  },
  avatars: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  avatarContainer: {
    width: 46,
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
    borderRadius: 23,
    borderWidth: 4,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    marginRight: 3
  },
  confirmAvatarContainer: {
    width: 66,
    justifyContent: 'center',
    alignItems: 'center',
    height: 66,
    borderRadius: 33,
    borderWidth: 4,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    marginRight: 3
  },
  confirmAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  iconCategory: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 5
  }
});
