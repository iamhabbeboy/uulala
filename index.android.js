/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimension,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Auth0 from 'react-native-auth0';
const auth0 = new Auth0({ domain: 'iamhabbeboy.auth0.com', clientId: '1lhwv8X2q3bQE8k61oWHlJTJK3CoCnEs' });


export default class uulala extends Component {

  render() {

    login = () => {
      auth0
      .webAuth
      .authorize({scope: 'openid email', audience: 'https://iamhabbeboy.auth0.com/userinfo'})
      .then(credentials =>
        Alert.alert(
          'Success',
          'User Logged Successfully'
      ))
      .catch(error => alert(error));
    }

    return (
      <ScrollView>
      <Image style={{width: null, height: null, resizeMode: 'stretch', flex: 1}}
       source={require('./components/images/bg1.jpeg')}
      >
      <View style={styles.container}>
          <Image
            style={{width: 200, height: 100, resizeMode: 'contain'}}
            source={require('./components/images/logo.png')}
          />
      </View>
      <View style={{padding: 10, marginTop: 30}}>
        <TouchableOpacity style={{backgroundColor: '#993300', padding: 18, borderRadius: 50}}>

          <Text style={{color: '#FFF', textAlign: 'center', fontSize: 20}}>
           <Icon name="user-circle-o" color="#FFF" size={20}/>
            &nbsp;&nbsp;Login </Text>
        </TouchableOpacity>

        <View style={{marginTop: 20}} onPress={this.login}>
          <TouchableOpacity style={{backgroundColor: 'royalblue', padding: 18, borderRadius: 50}}
          onPress={login}>
            <Text style={{color: '#FFF', textAlign: 'center', fontSize: 18}}> <Icon name="facebook" color="#FFF" size={20}/>
              &nbsp;&nbsp; Connect with Facebook </Text>
          </TouchableOpacity>
        </View>
      <Text style={styles.instructions}>
        {`Don't Have an Account?`}
      </Text>
      <View style={{marginTop: 0, padding: 50}}>
        <TouchableOpacity style={{backgroundColor: '#1D315A',borderColor: '#3C95D0', borderWidth: 1, padding: 16, borderRadius: 50}}>
          <Text style={{color: '#FFF', textAlign: 'center', fontSize: 18}}>
           Create account? </Text>
        </TouchableOpacity>
      </View>

      </View>
      </Image>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 35,
  },
});

AppRegistry.registerComponent('uulala', () => uulala);
