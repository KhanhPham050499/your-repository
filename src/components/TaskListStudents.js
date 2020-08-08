import React, { Component } from 'react';
import TaskItemStudents from './TaskItemStudents'


class TaskListStudents extends Component {
    

        render(){
        var {tasks} = this.props
        var elmTasks = tasks.map((task, index) =>{
                return <TaskItemStudents  key ={index} index = {index}  task = {task}
                                          
                                          onUpdate = {this.props.onUpdate}/>
        })
           
        return (
               <div>
                    <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className = "text-center">STT</th>
                            <th className = "text-center">Họ tên</th>
                            <th className = "text-center">Điểm miệng</th>
                            <th className = "text-center">Điểm 15p</th>
                            <th className = "text-center">Điểm  1 tiết</th>
                            <th className = "text-center">Điểm thi</th>
                            <th className = "text-center">Điểm trung bình</th>
                            <th className = "text-center"></th>
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



export default TaskListStudents;