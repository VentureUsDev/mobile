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
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'space-around'
  },
  inputContainer: {
    marginVertical: 5,
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1,
    color: '#180456'
  },
  textInput: {
    marginVertical: 10,
    borderWidth: 2,
    paddingHorizontal: 15,
    borderRadius: 7,
    borderColor: 'rgba(139, 178, 186, 0.2)',
    height: 60,
    fontSize: 14,
    fontWeight: '600'
  },
  loginBtn: {
    marginVertical: 20,
    marginRight: 65,
    marginLeft: 65,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  disabled: {
    opacity: 0.3,
  },
  loginTxt: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600'
  },
  forgotPw: {
    alignSelf: 'flex-end',
  },
  forgotPwTxt: {
    color: 'gray'
  },
  noAccount: {
    alignSelf: 'center',
    marginVertical: 15
  },
  noAccountContainer: {
    flexDirection: 'row',
  },
  noAccountMsg: {
    color: '#180456',
  },
  noAccountAction: {
    borderBottomWidth: 1,
    borderBottomColor: '#180456',
    marginLeft: 5,
  },
  noAccountActionTxt: {
    color: '#180456',
    fontWeight: '500',
  },
  padBot: {
    paddingBottom: 80,
  },
  errorText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'red',
    fontSize: 14,
    alignSelf: 'center'
  }
});
