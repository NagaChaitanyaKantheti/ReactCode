import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './CreateBill.css';
import { updateData, editFlag } from '../Actions/BillSplitActions';


class BillSplit extends Component{
    constructor(){
        super();
        this.state={
            index:'',
            billFlag:false,
            billType:'',
            amount:null,
            leftPercentage:100,
            percentageEntered:'',
            resultArray:[],
        }
    }


    handlePercentage=(event)=>{
        this.setState({
            percentageEntered: event.target.value
        })
    }

    handleSubmit=()=>{
        let {leftPercentage,index,percentageEntered,resultArray}=this.state
        if(percentageEntered){
            let {data}=this.props
            let array=data[index].percentageArray
            let cal=((percentageEntered/100)*data[index].amount).toFixed(2)
            resultArray.push(cal)
            array.push(percentageEntered)
            leftPercentage=leftPercentage-percentageEntered
            
            data[index].percentageArray=array
            this.props.dispatch(updateData(data))
            this.setState({
                leftPercentage:leftPercentage,
                percentageEntered:'',
                resultArray:resultArray
            })
        }
    }

    handleEdit=()=>{
       this.props.dispatch(editFlag())
    }


    handleReset=()=>{
        this.setState({
            resultArray:[],
            leftPercentage:100,
            percentageEntered:''
        })

    }

    handleClick=(i)=>{
        this.setState({
            index:i,
            billFlag:true
        })
    }

    handleCloseBill=()=>{
        this.setState({
            billFlag:false
        })
    }

    handleFilter=(event)=>{
        let billType=event.target.value
        let i=this.state.index
        let data=this.props.data
        //console.log('>>'+billType)
        switch(billType){
            case 'Equal':{
                let amount=(data[i].amount/data[i].noOfMem).toFixed(2)
                this.setState({
                   amount:amount,
                   billType:event.target.value
                })
            }
            break;
            case 'Percentage':{
                this.setState({
                    billType:event.target.value
                })
            }
            break;
            default: return null 
        }
    }

    render(){
        let data=this.props.data
        let i=this.state.index
        return(
            <div className='main'>
                <h2 style={{color:'burlywood'}}>Welcome to BillSplitting App</h2>
                <Link to='/CreateBill'><button onClick={this.handleBill}>Add a Bill</button></Link><br/><br/>
                {this.props.data.length>0?
                <div className='billsList'>
                        <table className='table table-style'>
                            <tr><th>Bills</th><th>PaidBy</th><th>Date</th><th>Edit</th></tr>
                            {this.props.data.map((val, i) => {let path='/CreateBill/'+i
                                return <tr onClick={()=>this.handleClick(i)}><td>{val.billType}</td>
                                    <td>{val.paidBy}</td>
                                    <td>{val.time}</td>
                                    <td><Link to={path}><button onClick={this.handleEdit}>Edit</button></Link></td>
                                </tr>
                            })}
                        </table>
                </div>:null}
                <br/><br/>
                {this.state.billFlag ?
                    <div className='billform' style={{position:'relative'}}>
                        <h3 style={{ color: 'red'}}>{data[i].billType} bill</h3>
                        <table className='table'>
                            <tr>
                                <th style={{style:'none'}}>PaidBy:</th>
                                <td>{data[i].paidBy}</td>
                            </tr>
                            <tr>
                                <th className='summary'>TotalAmount:</th>
                                <td>{data[i].amount}</td>
                            </tr>
                            <tr>
                                <th className='summary'>Members:</th>
                                <td>{data[i].members.map((j) => { return <tr>{j + '  ' }</tr>})}</td>
                            </tr>
                        </table>
                        <select name='billType' value={this.state.billType} onChange={this.handleFilter} placeholder='Billtype'>
                            <option>Split By</option>
                            <option value='Equal'>Equal</option>
                            <option value='Percentage'>Percentage</option>
                            <option value='Shares'>Shares</option>
                        </select>
                        {this.state.billType==='Equal'?
                            <div>
                                {data[i].members.map((j)=>{return <p><strong>{j}:</strong>{this.state.amount}</p>})}
                            </div>
                        :null}

                        {this.state.billType==='Percentage'?
                            <div>
                                
                                {data[i].members.map((val,j)=>{return <p><strong>{val+':'}</strong><input key={j} onChange={this.handlePercentage} onMouseLeave={this.handleSubmit} placeholder='%'/>  {this.state.resultArray[j]!==undefined? this.state.resultArray[j] :null}</p>})}
                                <p>{this.state.leftPercentage}%left</p>
                                <button onClick={this.handleReset}>Reset</button>
                            </div>
                        :null}

                        <img onClick={this.handleCloseBill} style={{position:'absolute',top:'0px',right:'0px'}} src="https://image.flaticon.com/icons/svg/148/148766.svg" width="20px" height="20px"/>
                    </div>
                    : null}


                {/* <HashRouter>
                 <Route path='/CreateBill' exact component={CreateBill}/>
                </HashRouter> */}

                 {/* <HashRouter>
                     <Route path='/CreateBill/:index' component={CreateBill}/>
                 </HashRouter> */}
                
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        data:state.bill.data
    }
}

export default connect(mapStateToProps)(BillSplit);