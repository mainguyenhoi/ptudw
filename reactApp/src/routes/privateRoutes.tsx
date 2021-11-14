import $ from 'jquery';
import React, {Component, lazy} from 'react';
import {Route, Switch} from 'react-router-dom';
import Progress from '@components/progress';
import Navigation from '@containers/Navigation';
import TopHeader from '@components/topHeader';
import Footer from '@components/footer';
import {correctHeight, detectBody} from '@helpers/theme';
import WaitingComponent from '@components/waiting';
import DateOffForms from '@containers/DateOffForms'
import WorkingForm from '@containers/Working-Forms/working-forms'
import { Provider } from 'react-redux';
import store from '@redux/store';
import adminDateOff from '@containers/Admintrator/DataOff';

const Dashboard = lazy(() => import('@containers/DashBoard'));

export default class AppRoutes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            match: props.match,
        };
    }

    componentDidMount() {
        $(window).bind('load resize', () => {
            correctHeight();
            detectBody();
        });
    }

    render() {
        return (
            <div id="wrapper" className="app">
                <Progress />
                <Navigation match={location.pathname} />
                <div id="page-wrapper" className="gray-bg">
                    <TopHeader />
                    <Switch>
                        <Route path="/" exact component={WaitingComponent(Dashboard)} />
                        <Route path="/date-off-forms" component={DateOffForms}/>
                        <Route path="/working-forms" component={WorkingForm}/>
                        <Route path="/administrator/date-off-forms" component={adminDateOff}/>
                    </Switch>
                    <Footer />
                </div>
            </div>
        );
    }
}

