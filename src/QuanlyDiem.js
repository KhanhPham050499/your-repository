import React, { Component } from 'react';
import './App.css';
import TaskFormStudents from './components/TaskFormStudents'
import TaskListStudents from './components/TaskListStudents'

class Diem extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks :[],
            isDisplaySideBar : false,
            isDisplayForm : false,
            taskEditing: null
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

  

    onCloseForm = () =>{
        this.setState({
            isDisplayForm : !this.state.isDisplayForm
        })
    }
    onShowForm = () => {
        this.setState({
            isDisplayForm : true
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
           
           {
            id: this.generateID(), 
            hoten: 'Hà Lan',
            DM : null,
            D15 : null,
            D60 : null,
            DT : null,
            Tong: null

        },
        {   
            id : this.generateID(),
            hoten: 'Trần Đức Bo',
            DM : null,
            D15 : null,
            D60 : null,
            DT : null,
            Tong: null

        },
        {   
            id : this.generateID(),
            hoten: 'Anh Ngạn',
            DM : null,
            D15 : null,
            D60 : null,
            DT : null,
            Tong: null

        },
        {   
            id : this.generateID(),
            hoten: 'Hồ Thúy lan',
            DM : null,
            D15 : null,
            D60 : null,
            DT : null,
            Tong: null

        },
        {   
            id : this.generateID(),
            hoten: 'Phan Tấn Trung',
            DM : null,
            D15 : null,
            D60 : null,
            DT : null,
            Tong: null

        }
       ]
       this.setState({
           tasks : tasks
       })
       localStorage.setItem('tasks', JSON.stringify(tasks));
   }
    sinhdiem() {
        return Math.round((Math.random()*10)*10)/10;
    } 
    

    s4() {
        return Math.floor(1+Math.random() * 0x10000).toString(16).substring(1);
    }  

    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' 
              + this.s4() + this.s4() + this.s4();
    }
    

    onSubmit = (data) => {
        
        var {tasks } = this.state;
        if(data.id ===''){
            data.id = this.generateID();
            // if(data.hoten !==''){
            //     tasks.push(data);
            // }
            
        }else {
            //Editing
            if(data.hoten !==''){
                var index = this.findIndex(data.id);
                tasks[index] = data;
            }
            
         }
        this.setState({
            tasks : tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));
        if(data.hoten !==''){
        this.onCloseForm(); }
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

    onDelete = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if(index !== -1 ){
            tasks.splice(index, 1);
            this.setState({
                tasks : tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        
    }
    
    onUpdate = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        var taskEditing = tasks[index];
        this.setState({
            taskEditing : taskEditing
        })
        this.onShowForm();
    }

        render(){

            var  { isDisplaySideBar , isDisplayForm ,tasks, taskEditing } = this.state;
            var elmTaskFromTeacher = isDisplayForm 
            ? <TaskFormStudents 
            onCloseForm = {this.onCloseForm}
            onSubmit = {this.onSubmit}
            task = {taskEditing}
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
                                
                            <h1>Quản lý điểm môn Toán lớp 10A1</h1>
                                
                                
                                <div className="row">
                                    <div className={isDisplayForm ? "col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-50" : ""}>
                                            { /* Form Add Teacher */ }
                                        { elmTaskFromTeacher}
                                        
                                    </div>
                                    
                                    <div className= {isDisplayForm
                                                ? "col-xs-9 col-sm-9 col-md-9 col-lg-9 mt-50" 
                                                : "col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-50"}
                                        //  className = {isDisplaySideBar === false 
                                        //         ? "col-xs-8 col-sm-8 col-md-8 col-lg-8 abcd mt-50" 
                                        //         : "col-xs-10 col-sm-10 col-md-10 col-lg-10 abcd mt-50"}
                                         >
                                            
                                            {/* <button type="button" 
                                                    className="btn btn-primary mb-5 "
                                                    onClick = {this.onToggleForm}>
                                                 <i className="fas fa-plus mr-5"></i>
                                                Thêm học sinh
                                            </button>&nbsp; */}
                                            
                                            <button type="button" 
                                                    className="btn btn-danger mb-5 "
                                                    onClick = {this.onReset}>
                                                 
                                                Làm mới điểm
                                            </button>
                                            
                                            <h3>Giáo viên: Hồ Lan</h3>
                                            {/* Task List*/}
                                            <TaskListStudents  tasks = {tasks}
                                            onDelete = {this.onDelete}
                                            onUpdate = {this.onUpdate}/>
                                
                                </div>
                                </div>
                                
                                
                                
                            
                            </div>

                    
                </div>
            </div>       
                
            
        );
    }
}



export default Diem;