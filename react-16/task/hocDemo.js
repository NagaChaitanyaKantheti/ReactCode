import React,{Component} from 'react';

const colorChange=(Demo)=>{
    return class Change extends Component{
        constructor(){
            super();
            this.state={
                msg:'hello'
            }
        }
        render(){
            const chaitu={
                name:this.state.msg,
                msgg:"hai"
            }
            console.log(chaitu.msgg);
            return( 
                  <Demo {...this.props} {...chaitu}/>
            );
        }
    }
}

export default colorChange;