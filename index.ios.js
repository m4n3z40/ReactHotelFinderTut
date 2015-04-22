'use strict';

//Importando react native
var React = require('react-native');

//Importando o componente SearchScreen
var SearchScreen = require('./app/components/SearchScreen');

//Extraindo os componentes necessários da biblioteca
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Component
} = React;

//Criando o componente principal, container para todo App
class ReactHotelFinderTut extends Component {
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        tintColor="#F9A11B"
        initialRoute={{
          title: 'React Hotel Finder',
          component: SearchScreen
        }} />
    );
  }
}

//Registrando componente principal, sem isso o app não funciona
AppRegistry.registerComponent(
  'ReactHotelFinderTut', 
  () => ReactHotelFinderTut
);