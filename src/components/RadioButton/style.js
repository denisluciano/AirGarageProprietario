import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    circle: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ACACAC',
      alignItems: 'center', // To center the checked circle…
      justifyContent: 'center',
      marginHorizontal: 10
      },
    checkedCircle: {
      width: 14,
      height: 14,
      borderRadius: 7,
      backgroundColor: '#131313' // You can set it default or with yours one…
      }

});

export default styles;

