import React, { Component } from 'react'
import './Sudoku.css';

class Sudoku3 extends Component {
    constructor() {
        super();
        this.state = {
            array: [...Array(9).keys()],
            array2: [[[...Array(9).keys()].map(x => x + 1), [...Array(9).keys()].map(x => x + 9),
            [...Array(9).keys()].map(x => x + 18)], [[...Array(9).keys()].map(x => x + 27), [...Array(9).keys()].map(x => x + 36),
            [...Array(9).keys()].map(x => x + 45)], [[...Array(9).keys()].map(x => x + 54), [...Array(9).keys()].map(x => x + 63),
            [...Array(9).keys()].map(x => x + 72)]],

            winCount: 51,
            sudoku: [[['5', '3', '', '6', '', '', '', '9', '8'], ['', '7', '', '1', '9', '5', '', '', ''], ['', '', '', '', '', '', '', '6', '']],
            [['8', '', '', '4', '', '', '7', '', ''], ['', '6', '', '8', '', '3', '', '2', ''], ['', '', '3', '', '', '1', '', '', '6']], [['', '6', '', '', '', '', '', '', ''],
            ['', '', '', '4', '1', '9', '', '8', ''], ['2', '8', '', '', '', '5', '', '7', '9']]],
            history:[
                [[['5', '3', '', '6', '', '', '', '9', '8'], ['', '7', '', '1', '9', '5', '', '', ''], ['', '', '', '', '', '', '', '6', '']],
                [['8', '', '', '4', '', '', '7', '', ''], ['', '6', '', '8', '', '3', '', '2', ''], ['', '', '3', '', '', '1', '', '', '6']], [['', '6', '', '', '', '', '', '', ''],
                ['', '', '', '4', '1', '9', '', '8', ''], ['2', '8', '', '', '', '5', '', '7', '9']]],
            ],
            index: 0
        }
    }

    componentDidMount() {
        let { index, sudoku } = this.state
        let hist = this.state.history
        hist[index] = sudoku
        //console.log(history)
        this.setState({
            history: hist
        })
    }


    handleOutput = (page, row, column, input) => {
        let starting = 0
        let ending = 0
        if (column >= 0 && column <= 2) {
            starting = 0
            ending = 3
        }
        else if (column >= 3 && column <= 5) {
            starting = 3
            ending = 6
        }
        else {
            starting = 6
            ending = 9
        }
        let set = []
        if (column === 0 || column === 3 || column === 6) {
            set = [0, 3, 6]
        }
        else if (column === 1 || column === 4 || column === 7) {
            set = [1, 4, 7]
        }
        else {
            set = [2, 5, 8]
        }
        let count = 0
        let { sudoku, winCount, index } = this.state
        let hist = this.state.history
        let block = sudoku[page][row]
        if (block.indexOf(input) === -1) {
            for (let i = 0; i < 3; i++) {
                if (sudoku[page][i].slice(starting, ending).indexOf(input) === -1) {
                    count = count + 1;
                }
                else {
                    alert('wrong move')
                }
            }
            let counter = 0
            if (count > 2) {
                for (let i = 0; i < 3; i++) {
                    let data = sudoku[i][row]
                    for (let j = 0; j < 3; j++) {
                        if (data[set[j]] !== input) {
                            counter = counter + 1
                        }
                        else {
                            alert('wrong move')
                            return null
                        }
                    }
                }
            }
            if (counter > 0) {
                sudoku[page][row][column] = input
                winCount = winCount - 1
                index = index + 1
                console.log(hist[index])
                hist[index] = sudoku
                console.log(hist[index])
                this.setState({
                    sudoku: sudoku,
                    winCount: winCount,
                    history: hist,
                    index: index
                })
            }
            if (winCount === 0) {
                alert('You have won')
            }
        }
        else alert('wrong move')
    }

    handleInput = (page, row, column, event) => {
        let input = event.target.value
        this.handleOutput(page, row, column, input)

    }


    handleUndo = () => {
        let { sudoku, index } = this.state
        let hist = this.state.history
        hist.splice(index, 1)
        sudoku = hist[index - 1]
        index = index - 1
        this.setState({
            sudoku: sudoku,
            history: hist,
            index: index
        })
    }

    handleClear = () => {
        let { history, sudoku, index } = this.state
        sudoku = history[0]
        history = history[0]
        index = 0
        this.setState({
            sudoku: sudoku,
            history: history,
            index: index
        })
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.array2.map((val, i) => {
                        return <div id='sudoku' key={i}>{
                            val.map((val2, j) => {
                                return <div id='block' key={j}>{
                                    val2.map((val3, k) => {
                                        return <input style={{ color: 'red' }} type='number' key={i + j + k} onChange={(event) => this.handleInput(i, j, k, event)}
                                            value={this.state.sudoku[i][j][k]}></input>
                                    })
                                }</div>
                            })}
                        </div>
                    })}
                </div>
                <br />
                <div style={{ border: '1px' }}>
                    <button id='bstyle' onClick={this.handleUndo} disabled={this.state.index > 0 ? false : true}>Undo</button>
                    <button id='bstyle2' onClick={this.handleClear} disabled={this.state.index > 0 ? false : true}>Clear</button>
                </div>
            </div>
        );
    }
}


export default Sudoku3;