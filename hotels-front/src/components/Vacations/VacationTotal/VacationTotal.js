import React,{Component} from 'react';
import { withRouter} from 'react-router-dom';
import {GiPadlock} from 'react-icons/gi';

import './VacationTotal.css'

class VacationTotal extends Component  {

    state = {vacation:[{}]}
    
    componentDidMount(){
        this.setState({vacation : [...this.props.vac]})
    }

    cancleHandle = () => {
        this.props.updateGoTotal();
    }

    render(){
        let vac = []
        vac = this.state.vacation[0];
        return(
            <div className="container">
                <div className="row totalHeader">
                    <div className="col-md-12 totalHeadWrap">
                        <span className="totalLable"><GiPadlock/></span>
                        <div className="totalHeadTbl"> 
                            <span className="totalH">Book now to get this fantastic price</span>
                            <span className="totalSubH">If you book later,ther's a chance the price will go up</span>    
                        </div>
                    </div>

                    <div className="col-md-4">
                        <img className="totalImg" src={vac.image} alt={vac.name}/>
                    </div>
                </div>
                <div className="btn btn-danger" onClick={this.cancleHandle}>Back</div>
            </div>
        )
    }
    
    
    
}

export default withRouter(VacationTotal);