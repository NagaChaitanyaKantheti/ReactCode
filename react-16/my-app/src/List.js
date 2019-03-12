import React from 'react';
import App from './App';
import BackgroundImage from './Flower.jpg';
class List extends React.Component{
    state = {
        message:[
        {
            "id" : 1,
            "name":"Foo",
            "age":"20"
        }, 
        ],
        message2:[
            {
                "id":3,
                "name":"Baz",
                "age":"40"
            }
        ],
        number:53
    };
    render(){
        return(
            <div>
               <App data={this.state.message} />
               <img src={BackgroundImage} alt=""/>
               <App data={this.state.message2} />
               <table>
                   <tr>{this.state.number}</tr>
               </table>
            </div>
        );
    }
}
export default List;