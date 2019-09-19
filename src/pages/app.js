import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/Layout';
import Details from '../components/Details';
import Home from '../components/Home';
import Login from '../components/Login';
import PrivateRoute from '../components/PrivateRoute';
import Status from '../components/Status';

const Test = () => {
  return <div>Test From Dynamic</div>;
};

const App = () => (
  <Layout>
    <Status />
    <Router>
      <Test path='/app/test' />
      <PrivateRoute path='/app/profile' component={Home} />
      <PrivateRoute path='/app/details' component={Details} />
      <Login path='/app/login' />
    </Router>
  </Layout>
);

export default App;
