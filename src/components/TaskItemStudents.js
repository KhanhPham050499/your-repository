import React, { Component } from 'react';



class TaskItemStudents extends Component {
   
    
    onUpdate = () => {
        this.props.onUpdate(this.props.task.id);
        
    }

        render(){
        var {task,index } = this.props;
        var DM = parseFloat(task.DM);
        var D15 = parseFloat(task.D15);
        var D60 = parseFloat(task.D60);
        var DT = parseFloat(task.DT);
        var tong = (DM + D15 + D60*2 + DT*3)/7;
        var result = Math.round(tong *10)/10;
       var kq = (task.DM === null || task.D15 === null || task.D60 === null || task.DT === null) ? result === null : result

        
        return (
                    <tr>
                            
                            <td className = "text-center">{index + 1}</td>
                            <td className = "text-center">{task.hoten}</td>
                            <td className = "text-center">{task.DM}</td>
                            <td className = "text-center">{task.D15}</td>
                            <td className = "text-center">{task.D60}</td>
                            <td className = "text-center">{task.DT}</td>
                            <td className = "text-center">{ kq}</td>
                            
                            <td className ="text-center">
                                
                                <button type="button" className="btn btn-warning" onClick = {this.onUpdate}>
                                    <i className="fas fa-pencil-alt mr-5"></i>
                                    Sửa điểm</button>&nbsp;
                                
                            </td>
                    </tr>
                         
                
            
        );
    }
}



export default TaskItemStudents;