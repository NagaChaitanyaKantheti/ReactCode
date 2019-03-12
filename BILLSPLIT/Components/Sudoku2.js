import React,{Component} from 'react'
import './Sudoku.css';

class Sudoku2 extends Component{
    constructor(){
        super();
        this.state={
            array:[...Array(9).keys()],
            array2:[[1,2,3],[4,5,6],[7,8,9]],
            sudoku:[['','','2'],['','6',''],['3','','']],
            winCount:6
        }
    }  

    handleInput = (row, column,event) => {
        let input=event.target.value
        let { sudoku, winCount } = this.state
        let count = 0
        if (input) {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (input === sudoku[i][j]) {
                        count = count + 1
                    }
                }
            }
            if (count === 0) {
                sudoku[row][column] = input
                winCount = winCount - 1
                this.setState({
                    sudoku: sudoku,
                    winCount: winCount
                })
            }
            else {
                alert('wrong move')
            }
            if (winCount === 0) {
                alert('You won')
            }
        }
    }


    render(){
        return(
            <div>
                <div id='sudoku'>
                    {this.state.array2.map((val,i)=>{
                       return <div key={i}>{
                           val.map((val2,j)=>{
                               return <input type='number' key={i+j} onChange={(event)=>this.handleInput(i,j,event)}
                                 value={this.state.sudoku[i][j]}></input> })
                        }</div>
                    })}
                </div>
            </div>
        );
    }
}

export default Sudoku2;