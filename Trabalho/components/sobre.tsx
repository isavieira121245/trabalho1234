import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Home from './home';


export default function App() {
const [page, setPage] = React.useState('sobre');

const renderPage =() => { 
if (page === 'sobre') {
return (

 <View style={styles.container}>
   <Text style={styles.title}>Lolaction </Text>
   <Text style={styles.sub}>Longitude: 00.00 </Text>
   <Text style={styles.sub}>Latitude: 00.00 </Text>
   <Image style={styles.imagem} source={require('../assets/images/isalinda.jpg')} />
   <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
      <Text style={styles.buttonText}>Proucurar </Text>
  </TouchableOpacity>
 </View>
);

} else if (page === 'home') {
  return <Home />;
}
};


 return <View style={styles.container}>{renderPage()}</View>;
}
 
  const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
},

  title: {
  fontSize: 24,
  fontWeight: 'bold',
  color: 'green',
  marginBottom: 20,
},

 button: {
 backgroundColor: 'green',
 padding: 10,
 borderRadius: 5,
},

 buttonText: {
 color: '#FFFFFF',
 fontSize: 16,

},
image: {


},
sub: {
    fontSize: 24,
  fontWeight: 'bold',
  color: 'green',
  marginBottom: 20,



}



});