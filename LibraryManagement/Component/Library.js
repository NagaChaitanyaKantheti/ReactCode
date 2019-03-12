import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link,withRouter} from 'react-router';
import { addToBag, apiData } from '../Action/LibraryActions';

class Library extends Component{
    constructor(){
        super();
        this.state={
            checkedList:[],
            search:'',
            id:null,
            filter:false,
            filterValue:'select'
        }
        this.handleCheckBox=this.handleCheckBox.bind(this)
        this.handleSearch=this.handleSearch.bind(this);
        this.handleFilter=this.handleFilter.bind(this);
        this.handleAdd=this.handleAdd.bind(this);
        this.handleLogOut=this.handleLogOut.bind(this);
       
    }

    componentDidMount(){
        fetch("https://www.googleapis.com/books/v1/volumes?q={search%20terms}")
            .then(res=>res.json())
            .then(
                (result)=>{
                    this.props.dispatch(apiData(result.items))
                },
                (error)=>{
                    this.setState({
                        isTimeZoneLoaded:true,
                        error
                    });
                }
            )
    }
    

    handleLogOut(){
        this.props.router.push('/')
    }

    handleCheckBox(id){
        let {checkedList}=this.state
        if(checkedList.indexOf(id)===-1){
            checkedList.push(id)
            console.log('adding>>'+checkedList)
            this.setState({
                checkedList:checkedList
            })
        }
        else if(checkedList.indexOf(id)>=0){
            let index=checkedList.indexOf(id)
            checkedList.splice(index,1)
            console.log('splicing>>'+checkedList)
            this.setState({
                checkedList:checkedList
            })
        }
    }

    handleSearch(event){
        this.setState({
            search:event.target.value
        })
    }

    handleFilter(event){
        this.setState({
            filter:!this.state.filter,
            filterValue:event.target.value
        })
    }

    handleAdd(){
        let {checkedList}=this.state
        console.log('add>>'+checkedList)
        if(checkedList.length>0){
            this.props.dispatch(addToBag(checkedList))
            alert('Added successfully')
        }
        else{
            alert('Please select the books')
        }
    }

    render(){
        console.log('filtervalue>>'+this.state.filterValue)
        let booksList=this.props.booksList
        const style={
            border: '1px solid #ddd',padding: '8px',width:'300px',paddingTop:'12px',paddingBottom:'12px',textAlign:'left',backgroundColor:'#008080',color: 'white'
        }
        const style2={
            border: '1px solid #ddd',padding: '8px',width:'100px',paddingTop:'12px',paddingBottom:'12px',textAlign:'left',backgroundColor:'#008080',color: 'white'

        }
        const style3={
            border: '1px solid #ddd',padding: '8px',width:'300px'
        }
        const style4={
            border: '1px solid #ddd',padding: '8px',width:'100px'
        }

      
        return(
            <div>
                <h3>Welcome to LibraryManagement</h3><br/><br/>
                <div>
                <img src="https://image.flaticon.com/icons/svg/166/166246.svg" width="20px" height="20px" style={{position:'absolute',top:'67px',left:'100px'}} />
                <p style={{position:'absolute',top:'67px',left:'130px'}}>Hello <strong>{this.props.uname}</strong></p>
                <button style={{position:'absolute',top:'67px',left:'230px'}} onClick={this.handleLogOut} >LogOut</button>
                    <input type="text" value={this.state.search} onChange={this.handleSearch} style={{width:'150px', position:'absolute',top:'67px',right:'200px'}} placeholder='Search...'></input>
                <img onClick={this.handleFilter}src="https://image.flaticon.com/icons/svg/1077/1077913.svg" width="20px" height="20px" style={{position:'absolute',top:'67px',right:'150px'}}/>
                {this.state.filter? <select onChange={this.handleFilter} value={this.state.filterValue} style={{position:'absolute',top:'87px',right:'150px',width:'80px'}}>
                    <option>Select</option>
                    <option value='Computer'>Computer</option>
                    <option value='Law'>Law</option>
                    <option value='Fiction'>Fiction</option>
                </select>:false}
                    
                <Link to='/Bag'><img src="https://image.flaticon.com/icons/svg/252/252118.svg" width="20px" height="20px" style={{position:'absolute',top:'67px',right:'100px'}}/></Link>
                </div>
                <table style={{ fontFamily: "Trebuchet MS, Arial, Helvetica,sansSerif",borderCollapse:'collapse',width:'auto'}}><tbody><tr>
                    <th style={style}>Title</th>
                    <th style={style}>Authors</th>
                    <th style={style2}>Category</th>
                    <th style={style2}>Available</th>
                    <th style={style2}>Select</th>
                    </tr>
                    {booksList.length>0? booksList.map((val,i)=>{
                        if (val.volumeInfo.title.toLowerCase().startsWith(this.state.search.toLowerCase())) {
                            return <tr key={val.id}>
                                <td style={style3}>{val.volumeInfo.title}</td>
                                <td style={style3}>{val.volumeInfo.authors}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px', width: '150px' }}>{val.volumeInfo.categories}</td>
                                <td style={style4}>{val.count}</td>
                                <td style={style4}><input type='checkbox' onChange={() => this.handleCheckBox(val.id)}></input></td>
                                
                            </tr>
                        }                       
                    })
                        : null}
                </tbody></table>
                <br/>
                <button onClick={this.handleAdd}style={{float:'right',position:'absolute',right:'85px',width:'100px'}} >AddToBag</button>
               

            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        booksList:state.data.booksList,
        bagList:state.data.bagList,
        uname:state.data.uname
    }
}


export default withRouter(connect(mapStateToProps)(Library))