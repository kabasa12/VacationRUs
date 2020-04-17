import React from 'react';
import Layout from './components/Layout/Layout';
import VacationSelector from './containers/VacationSelector/VacationSelector';
import CreateVacation from './containers/Admin/CreateVacation/CreateVacation';
import EditVacations from './containers/Admin/EditVacations/EditVacations';
import { Switch, Route } from "react-router-dom";

const app = (props) => {
  
  return (
      <div>
        <Layout>
          <Switch>
            <Route path="/newVacation" render={(props) => <CreateVacation  history={props.history}/>}/>
            <Route path="/editVacations" render={(props) => <EditVacations history={props.history}/>}/>
            <Route path="/" render={(props) => <VacationSelector history={props.history}/>}/>
          </Switch>
          {/* <div className="parallax"></div> */}
        </Layout>
      </div>
    );
}

export default app;
