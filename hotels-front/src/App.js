import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import Layout from './components/Layout/Layout';
import VacationSelector from './containers/VacationSelector/VacationSelector';
import CreateVacation from './containers/Admin/CreateVacation/CreateVacation';
import EditVacations from './containers/Admin/EditVacations/EditVacations';
import Statistics from './containers/Admin/Statistics/Statistics'
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

import * as actions from './store/actions/index';

class App extends Component{
  
  componentDidMount () {
    this.props.onTryAutoSignup();
  }
  
  render(){
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={VacationSelector} />
        <Redirect to="/" />
      </Switch>
    );

    if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route path="/newVacation" render={(props) => <CreateVacation  history={this.props.history}/>}/>
          <Route path="/editVacations" render={(props) => <EditVacations history={props.history}/>}/>
          <Route path="/statistics" render={(props) => <Statistics history={props.history}/>}/>
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={VacationSelector} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
