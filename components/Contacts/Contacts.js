import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../../actions/CardActions'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import Card from './Card'
import NavBar from './NavBar'

class Contacts extends Component {

  componentDidMount() {
    this.props.fetchCards()
  }

  renderNameCards = () => {
    return this.props.cardInfo.sort((a, b) =>  a.name.split(' ').pop().localeCompare(b.name.split(' ').pop()))   
    .map(card => <
      Card 
      key={card.id} 
      name={card.name} 
      company={card.company_name} 
      position={card.position} 
      message={card.message} 
      notes={card.notes} 
      phone={card.phone_number} 
      email={card.email} 
      viewed={card.viewed}
      id={card.id} 
    />)
  }

  renderCompanyCards = () => {
    return this.props.cardInfo.sort((a, b) => a.company_name.split(' ')[0].localeCompare(b.company_name.split(' ')[0]))   
    .map(card => <
      Card 
      key={card.id} 
      name={card.name} 
      company={card.company_name} 
      position={card.position} 
      message={card.message} 
      notes={card.notes} 
      phone={card.phone_number} 
      email={card.email} 
      viewed={card.viewed}
      id={card.id}  
    />)
  }

  renderNewCards = () => {
    return this.props.cardInfo.filter((card) => card.viewed !== true)   
    .map(card => <
      Card 
      key={card.id} 
      name={card.name} 
      company={card.company_name} 
      position={card.position} 
      message={card.message} 
      notes={card.notes} 
      phone={card.phone_number} 
      email={card.email} 
      viewed={card.viewed}
      id={card.id}  
    />)
  }

  render() {
    if( this.props.loading === true){
      return(
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#8fa8bc" />
        </View>
      )
    } else {
      if(this.props.show === 'name'){
        return (
          <SafeAreaView style={styles.container}>
            <NavBar new={this.props.cardInfo.filter((card) => card.viewed !== true).length}/>
            <ScrollView > 
              <View style={{paddingBottom: 100, paddingTop: 100}}>        
                {this.renderNameCards()}
              </View>  
            </ScrollView>
          </SafeAreaView>
        );
      }else if(this.props.show === 'company') {
        return (
          <SafeAreaView style={styles.container}>
            <NavBar new={this.props.cardInfo.filter((card) => card.viewed !== true).length}/>
            <ScrollView > 
              <View style={{paddingBottom: 100, paddingTop: 100}}>        
                {this.renderCompanyCards()}
              </View>  
            </ScrollView>
          </SafeAreaView>
        );
      }else if(this.props.show === 'new') {
        return (
          <SafeAreaView style={styles.container}>
            <NavBar new={this.props.cardInfo.filter((card) => card.viewed !== true).length}/>
            <ScrollView > 
              <View style={{paddingBottom: 100, paddingTop: 100}}>        
                {this.renderNewCards()}
              </View>  
            </ScrollView>
          </SafeAreaView>
        );
      }
    }
  }
}

const styles = StyleSheet.create({

  container:{
    flex: 0,
    backgroundColor: '#303030',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },

  companyBox: {
    position: 'absolute',
    shadowRadius: 4,
    borderRadius: 10,
    top: 10,
    left: 340,
    height: 30,
    width: 90,
    backgroundColor: 'transparent',
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
    backgroundColor: 'transparent',
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
    backgroundColor: 'transparent',
    textAlign: 'center',
    justifyContent: 'center',
    zIndex: 3
  },

  loading:{
    flex: 1,
    justifyContent: "center"
  },
})
const mapStateToProps = state => {
  return {
    cardInfo: state.cards,
    loading: state.loading,
    show: state.show
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchCards: () => dispatch(fetchCards())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);