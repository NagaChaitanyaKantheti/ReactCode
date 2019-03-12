import React,{Component} from 'react';
import {connect} from 'react-redux';
import './CreateBill.css';
//import {Switch,Route} from 'react-router-dom';

class BillForm extends Component{
    componentDidMount(){
        console.log(this.props.match.params.index)
    }
    render(){
        let i=this.props.match.params.index
        let data=this.props.data
        return(
            <div className='billform'>
                <h5>Owner:{data[i].owner}</h5>
                <h5>Members:{data[i].members}</h5>
            </div>
        );
    }
}

 /* <Switch>
                    <Route path={this.props.match.path} exact component={BillForm} />
                    <Route path={`${this.props.match.path}/:index`} component={BillForm} />
                </Switch> */



function mapStateToProps(state){
    return{
        data:state.bill.data
    }
}

export default connect(mapStateToProps)(BillForm);