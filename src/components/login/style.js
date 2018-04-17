import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
  cardContainer: {
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 40,
  },
  textInput: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: 50,
    fontSize: 16,
  },
  loginBtn: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'black',
    marginTop: 30,
    marginRight: 50,
    marginLeft: 50,
    padding: 10
  },
  loginTxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  forgotPw: {
    padding: 20,
    alignSelf: 'flex-end',
    marginRight: 30,
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
});
