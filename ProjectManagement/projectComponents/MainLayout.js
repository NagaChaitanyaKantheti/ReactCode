import React,{Component} from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

MainLayout.contextType={
    router:PropTypes.object.isRequired
}

class MainLayout extends Component{
    render(){
        return(
            <div>
                <p><strong>Welcome TO ProjectTemplate</strong></p>
                <Link to='/ProjectList'>Show Projects</Link>
            </div>
        );
    }
}

export default MainLayout;