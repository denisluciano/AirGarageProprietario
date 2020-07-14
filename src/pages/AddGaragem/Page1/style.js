import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  btnSubmit: {
    backgroundColor: '#FF6600',
    width: 330,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  containerButton: {
    alignItems: "center",
  },
  containerInputs:{
    alignItems: "center",
  },
  containerSignUp:{
    backgroundColor: "#fff",
    // justifyContent: "space-around",
    // alignContent: "center",
    // flex: 1,
  },
  containerTextHeader:{
    alignItems: "center",
    margin:  30,
  },

  input: {
    backgroundColor: '#D5DDE0',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    textAlignVertical: 'top'
  },
  textHeader:{
    fontSize: 18
  },
  formCadastro:{
    alignItems: "center",
  }
});

export default styles;

