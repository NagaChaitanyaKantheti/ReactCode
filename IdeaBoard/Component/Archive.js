import React,{Component} from 'react';
import {connect} from 'react-redux';
import hoc from './hoc';
import {withRouter} from 'react-router';

class Archive extends Component{
    componentWillReceiveProps(nextProps){
        if(nextProps.ecsFlag!==this.props.escFlag){
            let path='/'
            this.props.router.push(path)
        }    
        else{
                alert('Please fill the details')
            }  
        
    }

    render(){
        const archiveList=this.props.archiveList
        return(
            <div>
                {archiveList.length>0? 
                    <div style={{ width: '560px', height: '560px', border: '1px solid black' }}>
                    {archiveList.map((entry, i) => {
                        return <div style={{ float: 'left', border: '2px solid green', width: '100px', margin: '10px 0 0 10px',position:'relative' }} key={entry.id}>
                        {entry.date ? <img onClick={this.handleClock} src="https://image.flaticon.com/icons/svg/148/148934.svg" width="15px" height="15px" alt="Alarm clock free icon" title="Alarm clock free icon" style={{ position: 'absolute', top: 0, right: 0 }} /> : null}
                        {entry.pinned? <img onClick={this.handlePin}  src="https://image.flaticon.com/icons/svg/237/237512.svg" width="15px" height="15px" alt="Push pin free icon" title="Push pin free icon" style={{position:'absolute',top:'22px',right:0}} /> : null}
                        <h4>{entry.title}</h4>
                        <p>{entry.description.substring(0,6)+'...'}</p>
                        {entry.priority === 'P0' ? <div style={{ backgroundColor: 'red', width:"20px" ,height:"20px",position:'absolute',top:'44px',right:0}}><p>{entry.priority}</p></div> : null}
                        {entry.priority === 'P1' ? <div style={{ backgroundColor: 'orange', width:"20px" ,height:"20px",position:'absolute',top:'44px',right:0}}><p>{entry.priority}</p></div> : null}
                        {entry.priority === 'P2' ? <div style={{ backgroundColor: 'yellow', width:"20px" ,height:"20px",position:'absolute',top:'44px',right:0}}><p>{entry.priority}</p></div> : null}
                    </div>
                    })}
                </div>  
                    : <h4>No records found</h4>}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        archiveList:state.data.archiveList
    }
}

export default withRouter(connect(mapStateToProps)(hoc(Archive)));