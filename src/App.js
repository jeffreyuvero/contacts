import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Index from './Components/Index';
import Add from './Components/Add';

class App extends Component {
  render(){
    return(
        <Provider store = {store}>
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/add" component={Add} />
              </Switch>
            </div>
          </Router>
        </Provider>

    )
  }
}

export default App;