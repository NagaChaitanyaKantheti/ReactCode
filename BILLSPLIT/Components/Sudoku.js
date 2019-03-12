import React,{Component} from 'react'
import './Sudoku.css';

class Sudoku extends Component{
    constructor(){
        super();
        this.state={
            array:[...Array(9).keys()],
            array2:[[1,2,3],[4,5,6],[7,8,9]],
            input:null,
            sudoku:[[0,0,0],[0,0,0],[0,0,0]],
            winCount:9
        }
    }

    handleInput=(event)=>{
        this.setState({
            input:event.target.value
        })
    }

    handleOutput = (row, column) => {
        let { sudoku, input, winCount } = this.state
        let count = 0
        if (input) {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (input === sudoku[i][j]) {
                        count = count + 1
                        console.log(count)
                    }
                }
            }
            if (count === 0) {
                sudoku[row][column] = input
                winCount = winCount - 1
                this.setState({
                    sudoku: sudoku,
                    input: null,
                    winCount: winCount
                })
            }
            else {
                alert('wrong move')
                this.setState({
                    input: null
                })
            }
            if (winCount === 0) {
                alert('You won')
            }
        }
    }


    render(){
        return(
            <div>
                <div>
                    {this.state.array2.map((val,i)=>{
                       return <div key={i}>{
                           val.map((val2,j)=>{
                               return <input type='number' key={i+j} onChange={this.handleInput}
                                onMouseLeave={()=>{this.handleOutput(i,j)}}></input> })
                        }</div>
                    })}
                </div>
            </div>
        );
    }
}

export default Sudoku;