import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import Index from './index';
import List from './components/list';

class Root extends React.Component{

  render(){
    return (
      <Router>
        <Switch>
          <Route exact component={Index} path='/'></Route>
          <Route component={List} path='/list'></Route>
        </Switch>
      </Router>
    )
  }
}
ReactDOM.render(<Root/>,document.getElementById('example'))

export default Root;
