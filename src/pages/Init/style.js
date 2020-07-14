import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  containerInit:{
    flex: 1,
    justifyContent: "space-around"
  },
  containerLogo:{
    alignItems: "center",
    // backgroundColor: "#000"
  },
  containerMessage:{
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  containerButtons:{
    marginTop: 20
  },

  btnSignUp: {
    backgroundColor: "#0FCA0F",
    marginLeft: 30,
    marginRight: 30,
    padding: 10,
    elevation: 3,
    borderRadius: 10,
    alignItems: "center"
  },
  btnSignIn:{
    backgroundColor: "#ff6600",
    marginLeft: 30,
    marginRight: 30,
    padding: 10,
    marginTop: 15,
    elevation: 3,
    borderRadius: 10,
    alignItems: "center"

  },
  TextMessage:{
    fontSize: 25,
    textAlign: "center",
    fontFamily: "sans-serif-light"
  }

});

export default styles;
