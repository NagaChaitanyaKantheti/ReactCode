import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
 
class New extends React.Component {
  constructor(){
    super();
    this.state={
      value:'',
      copied:false
    }
  }

  render() {
    return (
      <div>
        <input value={this.state.value}
          onChange={({target: {value}}) => this.setState({value, copied: false})} />
 
        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>

        <input></input>
 
        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
      </div>
    );
  }
}

export default New;
 