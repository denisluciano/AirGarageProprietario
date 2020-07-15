import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  bottomBar: {
    height: 61,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    elevation: 2,
    borderTopWidth:1,
    borderTopColor: "#eee",
  },
  btnConfirmar:{
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
    backgroundColor: "#0FCA0F",
  }, 
  btnLimpar:{
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#ff0000",
  },
  containerCalendary: {
    marginTop: 15,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 50,

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
