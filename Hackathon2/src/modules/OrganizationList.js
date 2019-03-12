import React,{Component} from 'react';
import { connect } from 'react-redux';
import {fetchData} from '../Action/TodoListActionCreaters';
import {Link} from 'react-router';
class OrganizationList extends Component{
    
    componentDidMount(){
        fetch("http://172.26.102.81:8000/organizations/serviceprovider/2016101819336/activepartners/?start_value=0&range=8&_=1533118878526")
            .then(res=>res.json())
            .then(
                (result)=>{
                    this.props.dispatch(fetchData(result.response))
                },
                (error)=>{
                    this.setState({
                        isTimeZoneLoaded:true,
                        error
                    });
                }
            )
    }

    render(){
        return(
            <div><table>
                {this.props.organizationList.map((entry,i)=>{
                    let path="/Details/"+entry.unique_id 
                    return <tr key={i}>
                    
                    <td><Link to={path}>{entry.name}</Link></td>
                    </tr>
                }) }</table>
                
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        organizationList:state.data.organizationList
    }
}
export default connect(mapStateToProps)(OrganizationList);