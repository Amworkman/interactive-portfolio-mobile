import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';

class NavBar extends Component {
  constructor() {
    super()
    this.state = {
      companySelected: true,
      nameSelected: false,
      newSelected: false
    }
  }

  handlePress = (name) => {
    this.props.dispatch({ type: 'CHANGE_SHOW', show: name })
    if(name === 'company'){
      this.setState ({
        companySelected: true,
        nameSelected: false,
        newSelected: false
      })
    }else if(name === 'name'){
        this.setState ({
          companySelected: false,
          nameSelected: true,
          newSelected: false
        })
    }else if(name === 'new'){
      this.setState ({
        companySelected: false,
        nameSelected: false,
        newSelected: true
      })
    }    
  }

  render() {

    let companyColor = 'transparent'
    let nameColor = 'transparent'
    let newColor = 'transparent'

    if(this.state.companySelected === true){
      companyColor = 'rgba(120, 0, 0, 0.10)'
      nameColor = 'transparent'
      newColor = 'transparent'
    }else if(this.state.nameSelected === true){
      companyColor = 'transparent'
      nameColor = 'rgba(120, 0, 0, 0.10)'
      newColor = 'transparent'
    }else if(this.state.newSelected === true){
      companyColor = 'transparent'
      nameColor = 'transparent'
      newColor = 'rgba(120, 0, 0, 0.10)'
    }
    return (
      
      <Neomorph style={styles.bar}>
        <Neomorph onTouchStart={() => this.handlePress("company")} lightShadowColor="white"  darkShadowColor="black" style={[styles.companyBox, {backgroundColor: companyColor}]}></Neomorph>
        <LinearGradient start={{x: 0, y: 2}} end={{x: 1.5, y: 0}} colors={['#8fec63', '#192f6a']} style={styles.companyButton}>
        <Text style={styles.buttonText}>
          Company
        </Text>
        </LinearGradient> 

        <Neomorph onTouchStart={() => this.handlePress("name")} lightShadowColor="white"  darkShadowColor="black" style={[styles.nameBox, {backgroundColor: nameColor}]}></Neomorph>
        <LinearGradient start={{x: 0, y: 2}} end={{x: 1.5, y: 0}} colors={['#8fec63', '#192f6a']} style={styles.nameButton}>
        <Text style={styles.buttonText}>
          Name
        </Text>
        </LinearGradient>

        <Neomorph onTouchStart={() => this.handlePress("new")} lightShadowColor="white"  darkShadowColor="black" style={[styles.newBox, {backgroundColor: newColor}]}></Neomorph>
        <LinearGradient start={{x: 0, y: 2}} end={{x: 1.5, y: 0}} colors={['#8fec63', '#192f6a']} style={styles.newButton}>
        <Text style={styles.buttonText}>
          {this.props.new}
        </Text>
        </LinearGradient>      
      </Neomorph>
    );
  };
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    shadowRadius: 8,
    borderRadius: 0,
    top: 20,
    flex: 0,
    height: 50,
    width: 1000,
    margin: 20,
    backgroundColor: '#303030',
    zIndex: 2   
  },
 
  companyBox: {
    position: 'absolute',
    shadowRadius: 4,
    borderRadius: 10,
    top: 10,
    left: 340,
    height: 30,
    width: 90,
    backgroundColor: 'green',
    textAlign: 'center',
    justifyContent: 'center',
    zIndex: 3
  },

  nameBox: {
    position: 'absolute',
    shadowRadius: 4,
    borderRadius: 10,
    top: 10,
    left: 470,
    height: 30,
    width: 90,
    textAlign: 'center',
    justifyContent: 'center',
    zIndex: 3
  },

  newBox: {
    position: 'absolute',
    shadowRadius: 4,
    borderRadius: 50,
    top: 10,
    right: 340,
    height: 30,
    width: 30,
    textAlign: 'center',
    justifyContent: 'center',
    zIndex: 3
  },

  companyButton: {
    position: 'absolute',
    borderRadius: 10,
    top: 10,
    left: 340,
    height: 30,
    width: 90,
    textAlign: 'center',
    justifyContent: 'center',
    zIndex: -3
  },

  nameButton: {
    position: 'absolute',
    borderRadius: 10,
    top: 10,
    left: 470,
    height: 30,
    width: 90,
    textAlign: 'center',
    justifyContent: 'center',
    zIndex: -3
  },

  newButton: {
    position: 'absolute',
    borderRadius: 50,
    top: 10,
    right: 340,
    height: 30,
    width: 30,
    textAlign: 'center',
    justifyContent: 'center',
    zIndex: -3
  },

  buttonText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: "#303030"
    
  }

})


export default connect()(NavBar);