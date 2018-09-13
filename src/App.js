import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Router from './router';
import reducers from './reducers';
import {get_info} from './utils/eosjs';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyB9OcMpGYlsZQt2JWDSpOrtxYMA2pohFxk',
            authDomain: 'manager-a5bff.firebaseapp.com',
            databaseURL: 'https://manager-a5bff.firebaseio.com',
            projectId: 'manager-a5bff',
            storageBucket: '',
            messagingSenderId: '838442250756'
          };

          firebase.initializeApp(config);
          get_info().then(info => {
            /*this.setState({
              'head_block_producer': info['head_block_producer'],
              'chain_id': info['chain_id']
            })*/
            console.log(info);
          });
    }


    render() {
        const store = createStore(reducers, {}, applyMiddleware(thunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
