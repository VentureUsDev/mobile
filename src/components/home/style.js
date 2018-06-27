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
  categoryPicker: {
  },
  categoryItems: {
    fontSize: 16,
  },
  datePicker: {
    transform: [{scaleX: .7}, {scaleY: .7}]
  },
});
