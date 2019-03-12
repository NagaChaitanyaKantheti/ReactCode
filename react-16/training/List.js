import React,{Component} from 'react';

class List extends Component{

    componentWillMount(){
        console.log('will mount')
    }

    componentDidMount(){
        console.log('did mount')
    }

    componentWillReceiveProps(){
        console.log('will receive props')
    }

    shouldComponentUpdate(){
        console.log('should component update');
        return true
    }

    componentWillUpdate(){
        console.log('will update')
    }

    componentDidUpdate(){
        console.log('did update')
    }

    componentWillUnmount(){
        console.log('unmount')
    }



    render(){
        return(
            <div>
                <p>
                    {this.props.displaydata}
                </p>
            </div>
        );
    }
}

export default List;
