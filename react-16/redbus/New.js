import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';

class New extends Component {
    constructor(){
        super();
        this.state = {
            date: new Date(),
        }
    }
 

  onChange=(date)=>{
  this.setState({ date:date })
  }

  render() {
    return (
      <div>
        <DateTimePicker
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default New