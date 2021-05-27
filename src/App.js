import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Admin from './components/Landing/Admin'
import PostDetails from './components/PostDetails/PostDetails';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Landing from './components/Landing/Landing';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
