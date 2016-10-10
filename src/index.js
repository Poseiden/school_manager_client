import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';
import MainTwo from './components/MainTwo';

// Render the main component into the dom
// ReactDOM.render(<MainTwo />, document.getElementById('app'));

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/main">Main</Link></li>
          <li><Link to="/mainTwo">MainTwo</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});

const Dashboard = React.createClass({
  render() {
    return <div>Welcome to the App!</div>
  }
});

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="main" component={Main}/>
      <Route path="mainTwo" component={MainTwo}/>
    </Route>
  </Router>
), document.getElementById('app'))
