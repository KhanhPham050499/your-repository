import React, { Component } from 'react';
import './App.css';
import TaskFormMonHoc from './components/TaskFormMonHoc'
import TaskListMonHoc from './components/TaskListMonHoc'

class MonHoc extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks :[],
            isDisplaySideBar : false,
            
        }
    }
    

    onBar = () => {
       this.setState({
           isDisplaySideBar : !this.state.isDisplaySideBar
       })
    }
    
   

    

    onCloseForm = () =>{
        this.setState({
            isDisplayForm : !this.state.isDisplayForm
        })
    }
   
    /* LocalStorage  */
    componentDidMount() {
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            });
        }
    }

   onReset = () => {
       var tasks = [
           
       ]
       this.setState({
           tasks : tasks
       })
       localStorage.setItem('tasks', JSON.stringify(tasks));
   }
    
    

    s4() {
        return Math.floor(1+Math.random() * 0x10000).toString(16).substring(1);
    }  

    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' 
              + this.s4() + this.s4() + this.s4();
    }
    

    onSubmit = (data) => {
        console.log(data);
        var {tasks } = this.state;
        data.id = this.generateID();
        if(data.hoten !==''){
            tasks.push(data);
        }
        this.setState({
            tasks : tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    


    findIndex = (id) => {
        var { tasks } = this.state;
        var result = -1;
        tasks.forEach((task,index) => {
            if(task.id === id){
                
                result = index;
            }
         });
         return result;
    }

    onDeleteMonHoc = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if(index !== -1 ){
            tasks.splice(index, 1);
            this.setState({
                tasks : tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        this.onCloseForm();
    }
        render(){

            var  { isDisplaySideBar , isDisplayForm ,tasks } = this.state;
            
            // onCloseForm = {this.onCloseForm}
            // onSubmit = {this.onSubmit}
        // /> 
            // : ""
        return (
            <div>
                <input type='checkbox' id='check'/>
                <label htmlFor="check">
                    <i className= "fas fa-bars" id= "btn" onClick = {this.onBar}></i>
                    <i className="fas fa-times" id="cancel" onClick = {this.onCancel} ></i>
                </label>
                <div className='sidebar'>
                    <header>Menu</header>
                    <ul>
                        <li><a>Trang chủ</a></li>
                        <li><a>Quản lý giáo viên</a></li>
                        <li><a>Quản lý học sinh</a></li>
                        <li><a>Quản lý môn học</a></li>
                    </ul>
                </div>
                
                <div className='Form-app'>
                            <div className="container abc">
                                
                            <h1>Quản lý môn học</h1>
                                
                                
                                <div className="row">
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 mt-50">
                                            { /* Form Add Teacher */ }
                                        <TaskFormMonHoc onCloseForm = {this.onCloseForm}
                                                        onSubmit = {this.onSubmit}
                                                        onClearAdd ={this.onClearAdd}/>
                                        
                                    </div>
                                    
                                    <div className=  "col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-50" 
                                                
                                        //  className = {isDisplaySideBar === false 
                                        //         ? "col-xs-8 col-sm-8 col-md-8 col-lg-8 abcd mt-50" 
                                        //         : "col-xs-10 col-sm-10 col-md-10 col-lg-10 abcd mt-50"}
                                         >
                                            
                                            
                                            <div className="panel panel-primary">
                                                  <div className="panel-heading">
                                                        <h3 className="panel-title">Danh sách môn học</h3>
                                                  </div>
                                                  <div className="panel-body">
                                                        {/* Task List*/}
                                            <TaskListMonHoc  tasks = {tasks}
                                                           
                                                           onDeleteMonHoc = {this.onDeleteMonHoc}/>
                                                  </div>
                                            </div>
                                            
                                           
                                          
                                            
                                
                                </div>
                                </div>
                                
                                
                                
                            
                            </div>

                    
                </div>
            </div>       
                
            
        );
    }
}



export default MonHoc;