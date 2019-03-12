import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
class MyApp extends Component {
    constructor(){
        super();
        this.state={
            date:new Date()
        }
        this.onChange=this.onChange.bind(this)
    }
  
 
    onChange(date) {
        this.setState({
            date:date
        })
    } 
 
    render() {
        return (
            <div>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        );
    }
}

export default MyApp;