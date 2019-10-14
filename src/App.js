import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store'

import Index from '../Component/Index';

class App extends Component {
  render(){
    return(
        <Provider store = {store} >
          <div>
            <Index />
          </div>
        </Provider>

    )
  }
}

export default App;