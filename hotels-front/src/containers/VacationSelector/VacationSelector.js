import React, { Component } from 'react';
import { connect } from 'react-redux';

import {withRouter} from 'react-router-dom';
import Aux from '../../components/Layout/hoc/_Aux';

import VacationCard from '../../components/Vacations/VacationCard/VacationCard';
import * as actions from '../../store/actions/index';
import * as axios from 'axios';

class VacationSelector extends Component {

    state = {
        vacations: [{}],
    };

    componentDidMount() {
        this.getVacations();
        //this.props.onInitVacations();
    }

    async getVacations() {
        try {
            await axios.get(`http://www.localhost:4000/getVacations`).then(response => {
                this.setState({ vacations: response.data })
            })
        } catch (e) {
            console.log(e);
        }
    }

    addUserVacation = async (vacation_id) => {
        //Need To Get UserId By Login
        let userId = 4;
        let index = this.state.vacations.findIndex(vac => vac.id === vacation_id);

        try {
            await axios.post(`http://www.localhost:4000/insertUserVacation/?user_id=${userId}&vacation_id=${vacation_id}`).then(response => {
                let _vacations = [ ...this.state.vacations ];
                _vacations[index].follow = 1;
                ++_vacations[index].num_of_followers;
                this.setState({ vacations: _vacations });
            })
        } catch (e) {
            console.log(e);
        }
    }

    removeUserVacation = async (vacation_id) => {
        let userId = 4;
        let index = this.state.vacations.findIndex(vac => vac.id === vacation_id);

        try {
            await axios.delete(`http://www.localhost:4000/deleteUserVacation/?user_id=${userId}&vacation_id=${vacation_id}`).then(response => {
                let _vacations = [ ...this.state.vacations ];
                _vacations[index].follow = 0;
                --_vacations[index].num_of_followers;
                this.setState({ vacations: _vacations });
            })
        } catch (e) {
            console.log(e);
        }

    }

    async getVacationById(id) {
        try {
            await axios.get(`http://www.localhost:4000/getVacationById/?id=${id}`).then(response => {
                this.setState({ vacations: response.data })
            })
        } catch (e) {
            console.log(e);
        }
    }

    updateFollowers = async (id, numOfFollowers) => {

        let updatedNumOfFollow = numOfFollowers;
        let index = this.state.vacations.findIndex(vac => vac.id === id);
        //if follow is true then call remove method
        this.state.vacations[index].follow ? --updatedNumOfFollow : ++updatedNumOfFollow;

        try {
            await axios.put(`http://www.localhost:4000/updateFolowersVacationByid/?id=${id}&num_of_followers=${updatedNumOfFollow}`).then(response => {
                if (response.data.affectedRows && index !== -1) {
                    if (this.state.vacations[index].follow) {
                        this.removeUserVacation(id);
                    } else {
                        this.addUserVacation(id);
                    }
                }
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        let vacationsArr = [ ...this.state.vacations ];
        let vacationComponents;

        if (vacationsArr.length > 0) {
            vacationComponents = vacationsArr.map((vac, index) => {
                return <VacationCard vacations={vac}
                    key={index}
                    updateFollowers={this.updateFollowers}/>
                }
            )
        }
        return (
            <Aux>
                <div className="container-fluid">
                    <div className="row">
                        {vacationComponents}
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        //vacations: state.vacations.vacations,
        error: state.vacations.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitVacations: () => dispatch(actions.initVacations()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(VacationSelector));