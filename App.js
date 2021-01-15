import React from 'react';
import { NativeRouter, Route,} from "react-router-native"
import LogIn from './components/LogIn'
import Contacts from './components/Contacts/Contacts'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from "redux";
import CardStore from './reducers/CardStore'

const store = createStore(CardStore, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <LogIn/> 
        <Route path="/contacts" component={Contacts} />
      </NativeRouter> 
    </Provider>
  );
};

export default App;
