import React, {lazy} from 'react';
import {Switch,Route} from 'react-router-dom';
import Header from '../../features/frontend/header/Header';
import Home from '../../features/frontend/home/Home';
const Login = lazy(() => import('../../features/frontend/login/Login'));

const Black = () => {
    return ( <>
    
    <Header/>
     <Switch>
         <Route path="/" exact>
            <Home/>
         </Route>

         <Route path="/login" component={Login} />


     </Switch>
    </>)
}
 export default Black;