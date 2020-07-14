import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  adressInfo:{
    alignItems: "center",
    flex: 1,
    paddingLeft:5,
    paddingRight: 5
  },
  bottomInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnCadastrarGaragem: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:210,
    position: 'absolute',                                          
    bottom: 15,                                                    
    right: 15,
    height:50,
    backgroundColor:'#0FCA0F',
    borderRadius:20,
  },
  btnDetalhes: {
    backgroundColor: "#ff6600",
    borderRadius: 4,
    paddingBottom: 2,

    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
  },
  cardGaragem: {
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 5,
    flex: 1,
    flexDirection:"row", //Indica a direção dos items, se é vertical ou horizontal
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    paddingLeft: 10,
    paddingRight:10,
    paddingBottom: 15,
    paddingTop: 15,
  },
  containerButtonCadastrarGaragem: {
    flexDirection:"row"
  },
  containerImageGarage:{

  },
  containerInfo:{
    flex:1,
    // backgroundColor: 'red',
    justifyContent: "space-between",
  },
  headerInfo:{
    flexDirection:"row",
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingTop: 5,
    paddingRight: 5,

  },
  rateInfo:{
    flexDirection:'row',

  },
  scrollViewHome: {
    marginTop: 10,
  },
  screen: {
    flex: 1,
    marginTop:7,
  },
  searchBar: {
    flex: 1,
    height: 40,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  searchContainer:{
    backgroundColor:'#fff',
    borderRadius: 7,
    elevation: 2,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight:10,
  },
  searchIcon: {
    padding: 10,
  },
  textAdress:{
    color:'#666',
    fontSize:14,


  },
  textCadastrarGaragem: {
    marginRight: 20, 
    fontSize: 16, 
    fontWeight:"700"
},
  textDetalhes: {},
  textTitle: {
    fontSize: 18,
  },
  textValue:{
    fontSize: 18,
  },

  valueInfo:{
    flex: 1,
    alignItems: "center",


  },

});

export default styles;
