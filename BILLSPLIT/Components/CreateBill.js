import React,{Component} from 'react';
import './CreateBill.css';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { addData, editData } from '../Actions/BillSplitActions';

class CreateBill extends Component{
    constructor(){
        super();
        this.state={
            owner:'',
            members:'',
            store:[],
            billType:'',
            amount:''
        }
    }


    componentDidMount(){
        if(this.props.match.params.index>=0){
            let i=this.props.match.params.index
            let data=this.props.data
            this.setState({
                owner:data[i].paidBy,
                members:data[i].members.toString(),
                billType:data[i].billType,
                amount:data[i].amount
            })
        }
       
    }

    handleInput=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleCreate=()=>{
        let {owner,members,billType,amount}=this.state
        let date=new Date()
        members=members.split(',')
        members.push(owner)
        let noOfMem=members.length+1
        let time=date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear()
        if(owner && members && amount && billType){
            let object = { paidBy: owner, members: members, billType: billType,time:time,noOfMem:noOfMem,amount:amount,percentageArray:[]}
            if(this.props.editFlag){
                this.props.dispatch(editData(object,this.props.match.params.index))
                alert('Bill is Updated')
                this.props.history.push('/')
            }
            else{
                this.props.dispatch(addData(object))
                alert('Bill is Created')
                this.props.history.push('/')
            }
            
           
        }
        else{
            alert('Please fill the details')
        }
    }

    render(){
        return(
            <div className='form'>
                <input className='field'name='owner' value={this.state.owner} placeholder='Owned by' onChange={this.handleInput}/><br/>
                <textarea className='field' name='members' value={this.state.members} placeholder='Add members' onChange={this.handleInput}/><br/>
                <select className='field' name='billType' value={this.state.billType} onChange={this.handleInput} placeholder='Billtype'>
                    <option>BillType</option>
                    <option value='House'>House</option>
                    <option value='Restaurant'>Restaurent</option>
                    <option value='Movie'>Movie</option>
                    <option value='Tours'>Tours</option>
                </select>
                <br/>
                <input  className='field'type='number' name='amount' value={this.state.amount} placeholder='Amount in Rs' onChange={this.handleInput}/><br/>
                {this.props.editFlag?<button className='field' onClick={this.handleCreate} >UpdateBill</button>
                    :<button className='field' onClick={this.handleCreate} >CreateBill</button>}



            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        data:state.bill.data,
        editFlag:state.bill.editFlag
    }
}


export default withRouter(connect(mapStateToProps)(CreateBill))