import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  containerProfile: {
    backgroundColor: "#fff",
    flex:1 ,


  },
  containerImageProfile:{
    alignItems: "center",
    marginTop: 50,
  },
  containerItemsProfile: {
    flex: 1,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20
  },
  textProfile: {
    marginTop: 15,
    fontSize: 15,
  },
  itemProfile: {
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 1,
    borderBottomColor: "#A9A9A9",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
  },
  itemPoliticaProfile: {
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 50,
    borderBottomColor: "#A9A9A9",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
  },
  itemOption: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textItemProfile: {
    // marginLeft: 15,
  },
  containertextName: {
    alignItems: "center"
  },
  textName: {
    fontSize: 18,
    fontWeight: "bold"
  }


});

export default styles;
