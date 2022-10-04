import * as React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Header from './Header';
import Home from '../screens/Home';
import Footer from './Footer';
import LogIn from './LogIn';
import Movies from '../screens/Movies';
import Series from '../screens/Series';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <main style={{ minHeight: '60vh' }}>
        <Switch>
          <Redirect path='/' to='home' exact />
          <Route path='/home' component={Home} exact />
          <Route path='/series' component={Series} exact />
          <Route path='/movies' component={Movies} exact />
          <Route path='/login' component={LogIn} exact />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
