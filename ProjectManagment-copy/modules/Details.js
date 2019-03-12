import React,{Component} from 'react';

class Details extends Component{
    constructor(){
        super()
        this.state={
            details:{}
        };
    }
    
    componentDidMount(){
        const id=this.props.params.unique_id;
        fetch("http://172.26.102.81:8000/organizations/"+id+'/')
            .then(res=>res.json())
            .then(
                (result)=>{
                    console.log(result)
                    this.setState({
                        details:result
                    })
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
        console.log(this.props.params.unique_id)
        console.log("at details",this.state.details.name)
        return(
            <div><table><tbody><tr>
                <td>{this.state.details.name}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                <td>{this.state.details.org_id}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>{this.state.details.phone}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </tr></tbody></table>
            </div>
        );
    }
}


export default Details;