import React,{Component} from 'react';
import {Link} from 'react-router';
import About from './About';

class RouterDemo extends Component{  
    render(){
        return(
            <div>
                    <Link to='/About'>AboutUs</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/Contact'>ContactUs</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/TodoList'>TodoList</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/Organization'>Organization</Link>
                {this.props.children}
                
            </div>
        );
    }
}
export default RouterDemo;