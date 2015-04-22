'use strict';

//Importando react native
var React = require('react-native');

//Extraindo os componentes necessários da biblioteca
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component
} = React;

//Criando o componente principal, container para todo App
class ReactHotelFinderTut extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.helloWorld}>
          Hello World
        </Text>
      </View>
    );
  }
}

//Criando estilos dos components, isso te lembra algo?
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  helloWorld: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

//Registrando componente principal, sem isso o app não funciona
AppRegistry.registerComponent(
  'ReactHotelFinderTut', 
  () => ReactHotelFinderTut
);