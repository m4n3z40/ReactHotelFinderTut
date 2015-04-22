'use strict';

var React = require('react-native');

var {
  Component,
  View,
  Text,
  StyleSheet
} = React;

class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Tela de busca de hotéis
        </Text>
      </View>
    );
  }
}

//Estilos do componente
var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center'
  },
  description: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  }
});

//Exportando componente
module.exports = SearchScreen;