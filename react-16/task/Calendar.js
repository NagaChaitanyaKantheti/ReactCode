import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
class CalendarApp extends Component {
    constructor(){
        super();
        this.state={
            date:new Date(),
            dateIndex:'',
            formFlag:false,
            eventInfo:'',
            eventsList:[],
            hoursArray:[...Array(24).keys()],
            textFlag:false,
            time:'',
        }
    }
 
    setDate=(date)=> {
        const day=date.getDate()
        const month=date.getMonth()+1
        const year=date.getFullYear()
        let dateIndex=day+"-"+month+"-"+year
        let {eventsList}=this.state
        if (eventsList.length>0) {
            for (let i in eventsList) {
                if (eventsList[i].dateIndex === dateIndex) {
                    this.setState({
                        formFlag:false,
                    })
                    alert('This day has been alotted for an event. Please choose another day')
                }
                else {
                    this.setState({
                        date: date,
                        dateIndex: dateIndex,
                        formFlag: true,
                    })
                }
            }
        }
        else {
            this.setState({
                date: date,
                dateIndex: dateIndex,
                formFlag: true,
            })
        }  
    } 

    storeData=()=>{
        let {eventInfo,eventsList,dateIndex,time}=this.state
        let object={'dateIndex':dateIndex,'eventInfo':eventInfo,'time':time}
        eventsList.push(object)
        if(eventInfo.trim().length>0 ){
            this.setState({
                textFlag:false,
                eventsList:eventsList,
                eventInfo:'',
            })
        }
        else{
            alert('Please enter your task')
        } 
    }

    endDay=()=>{
        this.setState({
            formFlag:false
        })
    }

    deleteEvent=(index)=>{
        let{eventsList}=this.state
        eventsList.splice(index,1)
        this.setState({
            eventsList:eventsList
        })
    }


    
    setData=(event)=>{
        this.setState({
            eventInfo:event.target.value,  
        })
    }
 

    handleButton=(i)=>{
        let {eventsList}=this.state
        if(eventsList.length>0){
            for(let j in eventsList){
                if(eventsList[j].time===i){
                    this.setState({
                        textFlag:false
                    })
                    alert('This hour has been appointed. Please choose another hour')
                }
                else{
                    this.setState({
                        textFlag:true,
                        time:i
                    })
                }
            }
        }
        else{
            this.setState({
                textFlag:true,
                time:i
            })
        } 
    }


  

    render() {
        let today=new Date()
        return (
            <div>
                <Calendar minDate={today}
                    onChange={this.setDate}
                    value={this.state.date}
                /><br></br>

                {this.state.formFlag ?
                    <div className='Row'> 
                        <strong>Select an hour to make appointment</strong><br/><br/>
                        {this.state.hoursArray.map((i)=> { 
                            if(this.state.date.getDate()===today.getDate()){
                                if(today.getHours()<i){ 
                                    return <button className='row' onClick={()=>this.handleButton(i) }>{i}</button>}
                                }
                            else{
                                return <button className='row' onClick={()=>this.handleButton(i) }>{i}</button>
                            }
                            }
                            )}
                        <button onClick={this.endDay}>SaveEntireDay</button>
                    </div>
                    : null}
                   
                {this.state.textFlag?
                     <div>
                         <input type='text' name='eventInfo' placeholder='Please Enter your event'
                            value={this.state.eventInfo} onChange={this.setData}></input><span>
                            <button onClick={this.storeData} >Save</button></span>
                    </div>: null}


                <div>
                    {this.state.eventsList.length > 0 ? 
                        <table><tbody>
                            <tr style={{text:'center'}}><h4>EventsList</h4></tr>
                            <tr>
                                <td style={{width:'100px'}}><strong>Date</strong></td>
                                <td style={{width:'100px'}}><strong>Time</strong></td>
                                <td style={{width:'100px'}}><strong>Event</strong></td>
                            </tr>
                        {this.state.eventsList.map((entry, i) =>
                            <tr>
                                <td style={{width:'100px'}}>{entry.dateIndex}</td>
                                <td style={{width:'100px'}}>{entry.time}</td>
                                <td style={{width:'100px'}}>{entry.eventInfo}</td>
                                <td style={{width:'100px'}} onClick={()=>this.deleteEvent(i)} key={i}><button>DeleteEvent</button></td>
                            </tr>)}</tbody></table>


                        : null
                    }
                </div> 

            </div>
        );
    }
}

export default CalendarApp;