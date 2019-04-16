import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from 'react-router-dom';
import {browserHistory, IndexRoute, Router} from 'react-router';

import {Provider} from 'react-redux';
import store from './store';

import Layout from './app/layouts/Layout';
import MainPage from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';
import Users from './app/pages/Users';
import User from './app/pages/User';


const app = document.querySelector('#root');

ReactDOM.render(
    <Provider store={store}>
	   <Router history={browserHistory}>
		  <Route path="/" component={Layout}>
			 <IndexRoute component={MainPage}/>
			 <Route path="users" component={Users}>
				<Route path=":userId" component={User}/>
			 </Route>
			 <Route path="*" component={PageNotFound}/>
		  </Route>
	   </Router>
    </Provider>
	,
app);

//localhost:8080/about
