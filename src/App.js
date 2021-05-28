import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Admin from './components/Landing/Admin'
import PostDetails from './components/PostDetails/PostDetails';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Landing from './components/Landing/Landing';

import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';


import useStyles from './styles';

const App = () => {
  
  const user = JSON.parse(localStorage.getItem('profile'));

  //  const role ='';
  // if(user!=null){
  //  role = user.result.role;
  // console.log(user.result.role);
  // }
  

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        {/* <Navbar /> */}
        <Switch>
                   <Route path="/admin" exact component={Admin} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          {/* <Route path="/auth1" exact component={Auth} /> */}
          {/* <Route path="/auth" exact component={() => (!user ?<Auth/> : user.result.role === 'admin' ? <Admin/>: <Landing/> )} /> */}
          <Route path="/auth" exact 
        
          // {() => (!user ? <Auth /> : <Redirect to="/" />)} 

          component= {function () {
            if(!user ){
              return (
                <Auth/>
              )
            
            }
          const user2 = JSON.parse(localStorage.getItem('profile'));
           
          if (user2.result.role === 'admin'){
           console.log('1');
           return (
             <Admin/>
           )
         }
         else {
           console.log('2');
           return (
             <Landing/>
           )
         }
         
         }}
          />
          <Route path="/" exact component={function () {
          const user2 = JSON.parse(localStorage.getItem('profile'));
           
          if (user2.result.role === 'admin'){
           console.log('1');
           return (
             <Redirect to ='/admin'/>
           )
         }
         else {
           console.log('2');
           return (
             <Landing/>
           )
         }
         
         }} />
     
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
