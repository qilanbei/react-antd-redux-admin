import React from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';

const AuthRouter = ({ component: Component }) => {
  const isLogged = localStorage.getItem('isLogin') === '1'
  return <Route render={props => (isLogged ? <Component {...props} /> : <Redirect to={'/login'} />)} />;
};

export default withRouter(AuthRouter);
