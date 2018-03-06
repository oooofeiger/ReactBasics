import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,BrowserRouter as Router,Route,Redirect,Link} from 'react-router-dom';
import Index from './index';
import List from './components/list';
import Detail from './components/detail';

class Root extends React.Component{

  render(){
    return (
      <Router>
        <div>
          <Link to='/list/13423'>点此跳转列表页</Link>
          <Link to='/list/detail'>点此跳转详情页</Link>
          <Route component={List} path='/list/:id'/>
            <Route path='/list/detail' component={Detail}>
          </Route>
          <Route exact component={Index} path='/'/>
        </div>
      </Router>
    )
  }
}
ReactDOM.render(<Root/>,document.getElementById('example'))

export default Root;
