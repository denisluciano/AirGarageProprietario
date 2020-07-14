import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'

  },
  containerLogo :{
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  container: {
    flex: 1,
    // paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
    width: '90%',
  },

  input: {
    backgroundColor: '#D5DDE0',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#ff6600',
    width: 330,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText: {
    color:'#000',
    fontSize: 18,
  },
  btnRegister:{

  },
  registerText: {

  },
  btnforget: {

  },
  forgetText:{

  },
  textAboveInput: {
    alignItems: "center"
  },
  containerTextAboveInput: {
    alignItems: "flex-start",
  }
});

export default styles;
