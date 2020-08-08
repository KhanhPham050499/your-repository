import React, { Component } from 'react';
import './App.css';
import TaskFormTeacher from './components/TaskFormTeacher'
import TaskListTeacher from './components/TaskListTeacher'

class Teacher extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks :[],
            isDisplaySideBar : false,
            isDisplayForm : false
        }
    }
    

    onBar = () => {
       this.setState({
           isDisplaySideBar : !this.state.isDisplaySideBar
       })
    }
    
    onCancel = () => {
        this.setState({
            isDisplaySideBar : !this.state.isDisplaySideBar
        })
    }

    onToggleForm = () => {
        
        this.setState({
            isDisplayForm : !this.state.isDisplayForm
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
       var tasks = []
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
        if(data.hoten !=='' && data.monday !== ''){
            tasks.push(data);
        }
        this.setState({
            tasks : tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    
        render(){

            var  { isDisplaySideBar , isDisplayForm ,tasks } = this.state;
            var elmTaskFromTeacher = isDisplayForm 
            ? <TaskFormTeacher 
            onCloseForm = {this.onCloseForm}
            onSubmit = {this.onSubmit}
        /> 
            : ""
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
                                
                            <h1>Danh sách giáo viên giảng dạy</h1>
                                
                                
                                <div className="row">
                                    <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4 mt-50" : ""}>
                                            { /* Form Add Teacher */ }
                                        { elmTaskFromTeacher}
                                        
                                    </div>
                                    
                                    <div className= {isDisplayForm
                                                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8 mt-50" 
                                                : "col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-50"}
                                        //  className = {isDisplaySideBar === false 
                                        //         ? "col-xs-8 col-sm-8 col-md-8 col-lg-8 abcd mt-50" 
                                        //         : "col-xs-10 col-sm-10 col-md-10 col-lg-10 abcd mt-50"}
                                         >
                                            
                                            <button type="button" 
                                                    className="btn btn-primary mb-5 "
                                                    onClick = {this.onToggleForm}>
                                                 <i className="fas fa-plus mr-5"></i>
                                                Thêm giáo viên
                                            </button>&nbsp;
                                            
                                            <button type="button" 
                                                    className="btn btn-danger mb-5 "
                                                    onClick = {this.onReset}>
                                                 
                                                Reset All
                                            </button>

                                            {/* Task List*/}
                                            <TaskListTeacher  tasks = {tasks}/>
                                
                                </div>
                                </div>
                                
                                
                                
                            
                            </div>

                    
                </div>
            </div>       
                
            
        );
    }
}



export default Teacher;