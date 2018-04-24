import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
    marginBottom: 20,
  },
  cardContainer: {
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 40,
    paddingBottom: 20,
    justifyContent: 'space-around'
  },
  inputContainer: {
    marginHorizontal: 35,
    marginVertical: 5,
  },
  inputTitle: {
    fontSize: 10,
    fontWeight: '600',
  },
  textInput: {
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.9)',
    height: 40,
    fontSize: 16,
  },
  loginBtn: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    marginTop: 20,
    marginRight: 35,
    marginLeft: 35,
    padding: 10
  },
  loginTxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  forgotPw: {
    paddingHorizontal: 20,
    paddingTop: 20,
    alignSelf: 'flex-end',
    marginRight: 15,
  },
  forgotPwTxt: {
    color: 'gray',
    fontWeight: '600',
  },
  br: {
    height: 70,
  },
  noAccount: {
    alignSelf: 'center',
  },
  noAccountContainer: {
    flexDirection: 'row',
  },
  noAccountMsg: {
    color: 'darkgray',
  },
  noAccountAction: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginLeft: 5,
  },
  noAccountActionTxt: {
    color: 'gray',
    fontWeight: '600',
  },
  space: {
    height: 230,
  },
  padBot: {
    paddingBottom: 80,
  },
});
