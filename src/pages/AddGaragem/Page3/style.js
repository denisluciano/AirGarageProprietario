import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  bottomBar: {
    height: 61,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
    elevation: 2,
    borderTopWidth:1,
    borderTopColor: "#eee",
  },
  btnConfirmar:{
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
    backgroundColor: "#F4C20D",
  },
  containerCalendary: {
    marginTop: 15,
    marginLeft: 0,
    marginRight: 0,

  },
  containerDisponibilidade:{
    flex: 1,
    backgroundColor: "#fff"
  },
  containerBody: {
    marginTop: 10,
    flex: 1
  },
  textDisponibilidade: {
    fontSize: 15
  },
  containerText:{
    margin: 15,
  }

})


export default styles;
