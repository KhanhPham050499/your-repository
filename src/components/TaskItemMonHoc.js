import React, { Component } from 'react';



class TaskItemMonHoc extends Component {
     
   
    onDeleteMonHoc = () => {
        this.props.onDeleteMonHoc(this.props.task.id);
    }
        render(){
        var {task,index } = this.props;
        return (
                    <tr>
                            
                            <td className = "text-center">{index + 1}</td>
                            <td className = "text-center">{task.hoten}</td>
                            
                            
                            <td className ="text-center">
                                
                                <button type="button" className="btn btn-warning">
                                    <i className="fas fa-pencil-alt mr-5"></i>
                                    Sửa</button>&nbsp;
                                <button type="button" className="btn btn-danger" onClick = {this.onDeleteMonHoc}>
                                    <i className="fas fa-trash mr-5"></i> 
                                    Xóa</button>
                            </td>
                    </tr>
                         
                
            
        );
    }
}



export default TaskItemMonHoc;