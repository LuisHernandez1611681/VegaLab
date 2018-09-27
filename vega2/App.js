import React, { Component } from 'react';
import { Dimensions, ImageBackground, Image, Text, Button, StatusBar, TextInput, KeyboardAvoidingView, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  state = {
    email: '',
  };
  
  render() {
    return (
      <ImageBackground style={{flex:1}} source={require('C:/Users/hp/Desktop/PRUEBAVUENATIVE/vega2/img/fondo.jpg')}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Image 
            style={styles.imga}
            source={require('C:/Users/hp/Desktop/PRUEBAVUENATIVE/vega2/img/userm.png')}
          />
          <KeyboardAvoidingView behavior="padding" style={styles.form}>
            <TextInput
              style={styles.input}
              value={this.state.email}
              onChangeText={email => this.setState({email})}
              ref={ref => {this._emailInput = ref}}
              placeholder="Usuario"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="send"
              onSubmitEditing={this._submit}
              blurOnSubmit={true}
            />
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              value={this.state.password}
              onChangeText={password => this.setState({password})}
              ref={ref => {this.password = ref}}
              placeholder="Contraseña"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="send"
              onSubmitEditing={this._submit}
              blurOnSubmit={true}
            />
            <View>
              <Button style={styles.botonPrueba} title="Sign Up" onPress={this._submit} />
              <Text style={styles.legal}>
                Some important legal fine print here
              </Text>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    );
  }
  
  _submit = () => {
    alert(`Confirmation email has been sent to ${this.state.email}`);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    margin: 0,
    margin: 10,
    height: 40,
    borderRadius: 4,
    borderColor: "#FFF",
    borderWidth: 0,
    fontSize: 20,
    textAlign: 'center',
    color: "#FFF"
  },
  imga: {
    height: 200,
    width: 200,
    marginTop: 30,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto'
  },
  botonPrueba: {
    flex: 1
  },
  pruebaInp: {
    textAlign: 'center'
  },
  legal: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    color: '#FFF',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 100
  },
  form: {
    //flex: 1,
    justifyContent: 'space-between',
  },
});
