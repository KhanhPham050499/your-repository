import React, { Component } from 'react';
import TaskItemMonHoc from './TaskItemMonHoc'


class TaskListMonHoc extends Component {
    

        render(){
        var {tasks} = this.props
        var elmTasks = tasks.map((task, index) =>{
                return <TaskItemMonHoc  key ={index} index = {index}  task = {task}
                
                             onDeleteMonHoc = {this.props.onDeleteMonHoc}/>
        })
           
        return (
               <div>
                    <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className = 'text-center'>STT</th>
                            <th className = 'text-center'>Môn học</th>
                            <th></th>
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



export default TaskListMonHoc;