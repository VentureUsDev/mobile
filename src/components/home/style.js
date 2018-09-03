export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  },
  subheader: {
    alignItems: 'center',
    paddingTop: 20,
  },
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600'
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
  },
  formContainer: {
    padding: 15,
    backgroundColor: 'white',
  },
  formLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  categoryTexts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
    height: 120,
    width: 120
  },
  icon: {
    color: 'white',
    fontSize: 45
  },
  name: {
    color: 'white',
    fontSize: 20
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  modal: {
    width: 300,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 5
  },
  locationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  location: {
    width: 300,
    height: 180,
    backgroundColor: 'white'
  },
  inputContainer: {
    marginHorizontal: 30,
    marginBottom: 15,
    marginTop: 25
  },
  inputTitle: {
    fontSize: 10,
    fontWeight: '600',
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
    marginRight: 30
  },
  errorTxt: {
    color: 'red',
    paddingVertical: 5,
    marginHorizontal: 30,
    textAlign: 'center'
  },
  cardContainer: {
    backgroundColor: 'white',
    paddingBottom: 15,
    width: '80%',
  },
  confirmBtn: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    marginTop: 5,
    marginHorizontal: 15,
  },
  confirmTxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  confirmDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'gainsboro',
    paddingHorizontal: 15
  },
  confirmDetail: {
    fontSize: 16,
    fontWeight: '600'
  },
  ventureCard: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  ventureCardContent: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10
  },
  iconContainer: {
    marginHorizontal: 10,
    borderRadius: 5,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  locationTxt: {
    fontSize: 14,
    color: 'gray',
    paddingTop: 5
  },
  ventureCardRight: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: 5
  },
  ventureRejectIcon: {
    color: 'tomato',
    fontSize: 25
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
});
