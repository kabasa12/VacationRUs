import React , {Component} from 'react';
import Moment from 'moment';
import './Vacation.css';
import Aux from '../../hoc/Aux';
import { FaHotel } from 'react-icons/fa';

class Vacations extends Component {
    
    constructor(props){
        super(props);
        this.followBtnRef = React.createRef();
    }

    state = {
        vacation:[]
    }

    static getDerivedStateFromProps(props,state){
        state.vacation = props.vacations;
        return state;
    }

    render(){
        Moment.locale('en');
        let Varr = this.state.vacation;
        console.log(Varr);
        let vacationOut = null;
        let fromDate = Moment(Varr.from_date).format('MMMM DD, YYYY');
        let toDate = Moment(Varr.to_date).format('MMMM DD, YYYY');
        

        if (this.state.vacation.id !== undefined) {
            vacationOut = <Aux>
                            <div className="vacationDiv col-md-3">
                                <div className="row vacationHeader">
                                    <div className="col-md-5">{Varr.name}</div>
                                    <div className="col-md-5">{Varr.destination}</div>
                                    <div className={ Varr.follow ? ["col-md-2","vacationBtnCheck"].join(' ') : ["col-md-2","vacationBtn"].join(' ')}
                                         onClick={() => this.props.updateFollowers(Varr.id,Varr.num_of_followers)}
                                         ref={this.followBtnRef}><FaHotel/></div>
                                </div>
                                <div className="row">
                                    <img className="vacationImage" src={Varr.image} alt={Varr.destination}/>
                                </div>
                                <div className="row vacationMiddle">
                                    <div className="col-md-6">{fromDate}</div>
                                    <div className="col-md-6">{toDate}</div>
                                </div>
                                <div className="row vacationFooter">
                                    <div className="col-md-6">Price: {Varr.price} $</div>
                                    <div className="col-md-6">Followers: {Varr.num_of_followers}</div>
                                </div>
                            </div>
                          </Aux>

        }
        return(vacationOut);
    }
}

export default Vacations;