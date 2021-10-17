import React, {lazy} from 'react';
import {Route, Switch} from 'react-router-dom';

import '../assets/dependencies';

import Login from '@pages/Login';
import PrivateRoute from '@components/router/privateRoute';
import WaitingComponent from '@components/waiting';



const privateRoutes = lazy(() => import('./privateRoutes'));

export default function Routes(props) {

    return (
        <div>
            <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute path="/" component={WaitingComponent(privateRoutes)} />

            </Switch>
        </div>
    );
}
