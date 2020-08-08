import React, { Component } from 'react';


class TaskFormStudents extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : '',
            hoten : '',
            DM: null,
            D15: null,
            D60: null,
            DT: null,
            
            isInputValid: true,
            errorMessageHT: '' ,
            errorMessageDM: ''
        }
    }
    
    componentWillMount() {
        if(this.props.task){
            this.setState({
                id : this.props.task.id,
                hoten : this.props.task.hoten,
                DM : this.props.task.DM,
                D15 : this.props.task.D15,
                D60 : this.props.task.D60,
                DT : this.props.task.DT
            })
        }
    }


    onChange = (event) =>{
        
        var target = event.target;
        var name = target.name;
        var value = target.value
        
        
            this.setState({
                [name]: value
            })
        
        
    }
    
    // ValidationHT = (event) => {
    //     if(this.state.hoten ===''){
    //         this.setState({
    //             isInputValid : !this.state.isInputValid,
    //             errorMessage : 'Vui lòng nhập trường này'
    //         })
    //     }else {
    //         this.setState({
    //             isInputValid : this.state.isInputValid,
    //             errorMessage : ''
    //         })
    //     }
    // }

    
   

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }
        render(){
        
           
        return (
            <div className="panel panel-danger">
            <div className="panel-heading">
                  <h3 className="panel-title">Chỉnh sửa điểm
                  <i className ="fa fa-times-circle text-right"
                     onClick = {this.onCloseForm}></i></h3>
            </div>
            <div className="panel-body">
                   {/* Form input*/ }
                   
                   <form onSubmit = {this.onSubmit}>
                       <div className="form-group invalid text-center mb-10">
                       <label>{this.props.task.hoten}</label>
                        
                       </div>
                       <div className="form-group">
                           <label>Nhập điểm miệng:</label>
                           <input className="form-control"
                           name = 'DM'
                           value = {this.state.DM}
                           onChange = {this.onChange}
                           onBlur = {this.ValidationDM}/>
                            {this.state.DM ? <span style = {{color : 'red'}}>           
                               {this.state.errorMessageDM}
                            </span> : null }
                       </div>
                       <div className="form-group">
                           <label >Nhập điểm 15p:</label>
                           <input  className="form-control" 
                           name = 'D15'
                           value = {this.state.D15}
                           onChange = {this.onChange}
                           onBlur = {this.Validation}/>
                            
                       </div>
                       <div className="form-group">
                           <label >Nhập điểm 1 tiết:</label>
                           <input  className="form-control"
                           name = 'D60'
                           value = {this.state.D60}
                           onChange = {this.onChange}/>
                       </div>
                       <div className="form-group">
                           <label >Nhập điểm thi:</label>
                           <input  className="form-control"
                           name = 'DT'
                           value = {this.state.DT}
                           onChange = {this.onChange}/>
                       </div>
                       
                   
                       
                   <div className="text-center">
                       <button type="submit" className="btn btn-warning">
                            <i className ="fa fa-plus mr-5"></i>Lưu</button>&nbsp;
                       <button type="button" className="btn btn-danger"  onClick = {this.onCloseForm}>
                            <i className="fas fa-times mr-5"></i>Hủy bỏ</button>
                   </div>
                   </form>
                   
            </div>
      </div>
                
            
        );
    }
}



export default TaskFormStudents;