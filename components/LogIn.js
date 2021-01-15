import React, {Component} from 'react';
import {Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {Redirect} from "react-router-native"
import BackgroundColor from 'react-native-background-color';

export default class LogIn extends Component {
  constructor() {
    super();

    this.state = {
      authenticated: false,
      biometryType: null,
    };
  }
  componentDidMount() {
    BackgroundColor.setColor('#303030')
    FingerprintScanner.isSensorAvailable()
      .then((biometryType) => {
        this.setState({biometryType});
      })
      .catch((error) => console.log('isSensorAvailable error => ', error));
  }
  
  getMessage=()=>{
  const {biometryType}=this.state;
    if(biometryType=='Face ID')
    {
      return 'Scan Face'
    }
    else
    {
      return 'Scan Fingerprint'
    }
  }

  showAuthenticationDialog = () => {
    this.setState({
      authenticated : true
    })
    const {biometryType}=this.state;
    if(biometryType!==null && biometryType!==undefined )
    {
    FingerprintScanner.authenticate({
      description: this.getMessage()
    })
      .then(() => {
        this.setState({
          authenticated: true
        })
      })
      .catch((error) => {
        console.log('Authentication error is => ', error);
      });
    }
    else
    {
    console.log('biometric authentication is not available');
    }
  };

  render() {
    if (this.state.authenticated === true) {
      return <Redirect to="/contacts"/>
  } 
    const {biometryType}=this.state;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={this.showAuthenticationDialog}>
          <Text style={styles.textStyle}>Authenticate</Text>
        </TouchableOpacity>
        <Text
          style={
            styles.biometryText
          }>{`biometryType is  ${biometryType}`}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '70%',
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontSize: 17, fontWeight: 'bold'},
  biometryText: {
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 30,
  },
});