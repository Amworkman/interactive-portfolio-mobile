import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';

const CardStore = (state = {show: 'company', cards: [], loading: false}, action) => {
  switch(action.type) {
    case 'LOADING_CARDS':
      return {
        ...state,
        cards: [...state.cards],
        loading: true
      }
    case 'SHOW_CARDS':
      return {
        ...state,
        cards: action.cards,
        loading: false
      }
    case 'CHANGE_SHOW':
      return {
        ...state,
        show: action.show
      }
      case 'DELETE_CARD':
      return {
        ...state,
        cards: action.cards,
        loading: false
      }
    default:
      return state;
  }
};

export default CardStore;