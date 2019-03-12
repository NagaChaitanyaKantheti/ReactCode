import React,{Component} from 'react';
import {Draggable,Droppable} from 'react-drag-and-drop';

class DragDrop extends Component{
    constructor(){
        super();
        this.state = {        
            tasks: [{name:"Learn Angular",
                     category:"wip", 
                     bgcolor: "yellow"},  
                  
                    {name:"React", 
                     category:"wip", 
                     bgcolor:"pink"},  
                  
                    {name:"Vue", 
                     category:"complete", 
                     bgcolor:"skyblue"}          
              ]}

    }
   

    onDrop(data) {
        console.log(data)
        // => banana 
    }

    render(){
        return(
            <div>
            <ul>
                <Draggable type="fruit" data="banana"><li>Banana</li></Draggable>
                <Draggable type="fruit" data="apple"><li>Apple</li></Draggable>
                <Draggable type="metal" data="silver"><li>Silver</li></Draggable>
            </ul>
            <Droppable
                types={['fruit']}
                onDrop={this.onDrop}
                >
            <ul className="Smoothie"></ul>
            </Droppable>
            <h2>Hello</h2>
        </div>
        );
    }    
}
export default DragDrop;