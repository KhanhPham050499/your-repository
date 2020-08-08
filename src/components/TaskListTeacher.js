import React, { Component } from 'react';
import TaskItemTeacher from './TaskItemTeacher'


class TaskListTeacher extends Component {
    

        render(){
        var {tasks} = this.props
        var elmTasks = tasks.map((task, index) =>{
                return <TaskItemTeacher  key ={index} index = {index}  task = {task}/>
        })
           
        return (
               <div>
                    <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className = "text-center">STT</th>
                            <th className = "text-center">Họ tên</th>
                            <th className = "text-center">Môn dạy</th>
                            <th className = "text-center">Ngày sinh</th>
                            <th className = "text-center">Điện thoại</th>
                            <th className = "text-center">Nơi cư trú</th>
                            <th className = "text-center">Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        { elmTasks}
                        
                    </tbody>
                    </table>
                    </div>      
                
            
        );
    }
}



export default TaskListTeacher;