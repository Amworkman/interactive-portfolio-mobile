import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Linking,
  TouchableWithoutFeedback,
  Text,
  StatusBar,
  TouchableWithoutFeedbackBase,
} from 'react-native';
import FlipCard from 'react-native-flip-card'
import {Neomorph} from 'react-native-neomorph-shadows'
import LinearGradient from 'react-native-linear-gradient'
import {connect} from 'react-redux'
import {deleteCard} from '../../actions/CardActions'
import {updateCard} from '../../actions/CardActions'


class card extends Component {
  render() {
    let newTag = <Text></Text>
    if(this.props.viewed !== true){
      newTag = <TouchableWithoutFeedback onPress={() => this.props.updateCard(this.props.id, {viewed: true})} style={styles.new}><View style={styles.new}><Text style={styles.newText}>NEW!</Text></View></TouchableWithoutFeedback>
    }
    return (
        <FlipCard
          style={styles.card}
          >
          {/* Face Side */}
          
          <Neomorph style={styles.face}>
            <Text style={styles.name}>{this.props.name}</Text>
            <Text style={styles.title}>{this.props.position} at {this.props.company}</Text>
            {newTag}
            <TouchableWithoutFeedback style={styles.callButton} onPress={ () => Linking.openURL(`tel:${this.props.phone}`)}> 
              <Neomorph inner style={styles.callButton}>  
                <Text style={styles.callText}> Call </Text>
              </Neomorph>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback style={styles.emailButton} onPress={ () => Linking.openURL(`mailto:${this.props.email}`)}>         
              <Neomorph inner style={styles.emailButton}> 
                <Text style={styles.emailText}> Email </Text>
              </Neomorph>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => this.props.deleteCard(this.props.id)} style={styles.deleteButton}>
              <Neomorph inner lightShadowColor="red" style={styles.deleteButton}> 
                <Text style={styles.delete}> - </Text>
              </Neomorph>
            </TouchableWithoutFeedback>
          
          </Neomorph>
          {/* Back Side */}
          <Neomorph style={styles.back}>
            <View style={styles.backView}>
            <Text style={styles.message}>{this.props.message}</Text>
            </View>
          </Neomorph>
        </FlipCard>  
    );
  }
}

const styles = StyleSheet.create({
  card: {
    height: 150,
    width: 300,
    margin: 20,
    marginBottom: 20,   
  },

  back: {
    shadowRadius: 7,
    borderRadius: 10,
    backgroundColor: '#303030',
    height: 150,
    width: 300,
  },

  face: {
    shadowRadius: 7,
    borderRadius: 10,
    backgroundColor: '#303030',
    height: 150,
    width: 300,
    alignItems: 'center',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    fontSize: 25,
    top: -20,
    color: '#93a393',
    fontWeight: 'bold'
  },

  title: {
    fontSize: 13,
    top: -10,
    color: '#8d8d8d',
  },
  message: {
    fontSize: 13,
    top: -10,
    color: '#8d8d8d',
  },

  backView: {
    margin: 20,
  },

  new: {
    top: -90,
    right: -120,
  },

  newText: {
    top: 5,
    color: 'rgba(169,238,143, 0.65)',
    fontSize: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,

  },

  callText: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
    alignSelf: 'center',
    color: '#849b66',

  },

  emailText: {
    alignSelf: 'center',
    color: '#8fa8bc',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,

  },

  button: {
    shadowRadius: 4,
    borderRadius: 10,
    backgroundColor: '#303030',
    textAlign: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 75,
    height: 23,
    
  },

  callButton: {
    backgroundColor: 'transparent',
    shadowRadius: 4,
    position: 'absolute',   
    borderRadius: 10,
    bottom: 15,
    left: 42,
    height: 23,
    width: 75,
    textAlign: 'center',
    justifyContent: 'center',
    zIndex: -3
  },

  emailButton: {
    backgroundColor: 'transparent',
    shadowRadius: 4,
    position: 'absolute',
    borderRadius: 10,
    bottom: 15,
    right: 42,
    height: 23,
    width: 75,
    textAlign: 'center',
    justifyContent: 'center',
    zIndex: -3
  },

  deleteButton: {
    backgroundColor: 'rgba(151, 110, 110, 0.25)',
    shadowRadius: 7,
    position: 'absolute',   
    borderRadius: 50,
    top: 5,
    left: 5,
    height: 23,    
    width: 23,
    textAlign: 'center',
    justifyContent: 'center',
    zIndex: -3
  },

  delete: {
    alignSelf: 'center',
    color: 'rgba(181, 181, 181, 0.65)',
    fontWeight: 'bold',
  },

  smallButton: {
    backgroundColor: 'black',
    shadowRadius: 4,
    borderRadius: 50,
    backgroundColor: '#303030',
    textAlign: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 23,
    height: 23,
    
  },


});

const mapDispatchToProps = dispatch => {
  return {
    deleteCard: (id) => dispatch(deleteCard(id)),
    updateCard: (id, params) => dispatch(updateCard(id, params))
  }
}

export default connect(null, mapDispatchToProps)(card);
