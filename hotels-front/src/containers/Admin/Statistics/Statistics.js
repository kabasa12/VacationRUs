import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

import { Grid } from '@material-ui/core'
import Graphs from '../../../components/Admin/Graphs/Graphs';

class Statistics extends Component {

    componentDidMount(){
        //check auth
    } 

    render(){
        return(
            <div className='home-p'>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '50vh' }}
                >
                    <Graphs type='pie'/>
                    <Graphs type='column'/>
                    <Graphs type='line'/>
                </Grid>
             </div>
        );
    }
}


export default withRouter(Statistics);
