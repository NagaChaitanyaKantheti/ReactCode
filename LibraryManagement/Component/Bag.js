import React,{Component} from 'react';
import hoc from './hoc';
import {withRouter} from 'react-router';
import {connect} from 'react-redux'
import { removeFromBag } from '../Action/LibraryActions';

class Bag extends Component{
    constructor(){
        super();
        this.state={
            flag:false,
            days:null,
            amount:'',
        }
        this.handleRemove=this.handleRemove.bind(this);
        this.handleCheckOut=this.handleCheckOut.bind(this);
        this.setData=this.setData.bind(this);
    }

    setData(event){
        this.setState({
            days:event.target.value
        })
    }

    handleCheckOut(){
        let days=this.state.days
        let bagList=this.props.bagList
        if(days===null){
            alert('Please specify the days')
        }
        else{
            let amount = bagList.length * 10 * this.state.days
            this.setState({
                flag: true,
                amount: amount
        })
        }
        
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.enterFlag!==this.props.enterFlag){
                //this.handleSubmit();
                let path='/Library'
                this.props.router.push(path)
        }
        if(nextProps.escFlag!==this.props.escFlag){
            let path='/Library'
            this.props.router.push(path)
        }
    }

    handleRemove(id){
        this.props.dispatch(removeFromBag(id))
    }

    render(){
        let bagList=this.props.bagList
        const style={
            border: '1px solid #ddd',padding: '8px',width:'300px',paddingTop:'12px',paddingBottom:'12px',textAlign:'left',backgroundColor:'#008080',color: 'white'
        }
        const style2={
            border: '1px solid #ddd',padding: '8px',width:'100px',paddingTop:'12px',paddingBottom:'12px',textAlign:'left',backgroundColor:'#008080',color: 'white'

        }
        const style3={
            border: '1px solid #ddd',padding: '8px',width:'300px'
        }
        const style4={
            border: '1px solid #ddd',padding: '8px',width:'100px'
        }
        console.log('Here im rendering>>'+bagList.length)
        return(
              <div>
                {bagList.length>0? <table style={{ fontFamily: "Trebuchet MS, Arial, Helvetica,sansSerif",borderCollapse:'collapse',width:'auto'}}><tbody><tr>
                    <th style={style}>Title</th>
                    <th style={style}>Authors</th>
                    <th style={style2}>Category</th>
                    <th style={style2}>Options</th>
                    </tr>
                     {bagList.map((val)=>
                       {return <tr key={val.id}>
                       <td style={style3}>{val.volumeInfo.title}</td>
                        <td style={style3}>{val.volumeInfo.authors}</td>
                        <td style={{border: '1px solid #ddd',padding: '8px',width:'150px'}}>{val.volumeInfo.categories}</td>
                        <td style={style4}><button onClick={()=>this.handleRemove(val.id)}>Remove</button></td>
                   </tr> 
                    })
                }
                <br/>
                <input type='text' name='days' placeholder='Days?' onChange={this.setData} value={this.state.days} style={{position:'absolute',top:'auto',right:'250px'}}/>
                <button style={{position:'absolute',top:'auto',right:'140px'}} onClick={this.handleCheckOut}>CheckOut</button>
                </tbody></table> :<h3>Your bag is empty</h3>}
                <br/><br/>
                
                {this.state.flag?<div style={{position:'absolute',top:'relative',right:'140px'}} >
                    <h4>A book per day cost:Rs.10</h4>
                    <h4>Total Cost for your bag items:<strong>{this.state.amount}</strong></h4>
                </div>:null}
            </div>
        );
    }
}
function mapStateToProps(state){
    //console.log('mapbaglength>>>'+state.data.bagList.length)
    return{
        bagList:state.data.bagList
    }
}

export default withRouter(connect(mapStateToProps)(hoc(Bag)))
