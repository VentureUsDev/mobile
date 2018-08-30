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
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 18
  },
  thumbnail: {
    height: 50,
    width: 50,
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
    flexWrap: 'wrap'
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
  }
});
