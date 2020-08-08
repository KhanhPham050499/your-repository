import React, { Component } from 'react';


class TaskFormTeacher extends Component {
    constructor(props){
        super(props);
        this.state = {
            hoten : '',
            monday: '',
            ngaysinh: '',
            dienthoai: '',
            noicutru: '',
            isInputValid: true,
            errorMessageHT: '' ,
            errorMessageMonDay: ''
        }
    }
    
    onChange = (event) =>{
        
        var target = event.target;
        var name = target.name;
        var value = target.value
        this.setState({
            [name] : value
        })
    }
    
    ValidationHT = (event) => {
        if(this.state.hoten ===''){
            this.setState({
                isInputValid : !this.state.isInputValid,
                errorMessage : 'Vui lòng nhập trường này'
            })
        }else {
            this.setState({
                isInputValid : this.state.isInputValid,
                errorMessage : ''
            })
        }
    }

    ValidationMonDay = (event) => {
        if(this.state.monday ===''){
            this.setState({
                isInputValid : !this.state.isInputValid,
                errorMessageMonDay : 'Vui lòng nhập trường này'
            })
        }else {
            this.setState({
                isInputValid : this.state.isInputValid,
                errorMessageMonDay : ''
            })
        }
    }
   

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
                  <h3 className="panel-title">Thêm giáo viên
                  <i className ="fa fa-times-circle text-right"
                     onClick = {this.onCloseForm}></i></h3>
            </div>
            <div className="panel-body">
                   {/* Form input*/ }
                   
                   <form onSubmit = {this.onSubmit}>
                       <div className="form-group invalid">
                           <label>Họ tên:</label>
                           <input type="text" className="form-control"
                           name ='hoten'
                           value = {this.state.hoten}
                           onChange = {this.onChange}
                           onBlur = {this.ValidationHT}
                          />
                            {this.state.hoten === '' ? <span style = {{color : 'red'}}>           
                               {this.state.errorMessage}
                            </span> : null }
                       </div>
                       <div className="form-group">
                           <label>Môn dạy:</label>
                           <input type="text" className="form-control"
                           name = 'monday'
                           value = {this.state.monday}
                           onChange = {this.onChange}
                           onBlur = {this.ValidationMonDay}/>
                            {this.state.monday === '' ? <span style = {{color : 'red'}}>           
                               {this.state.errorMessageMonDay}
                            </span> : null }
                       </div>
                       <div className="form-group">
                           <label >Ngày sinh:</label>
                           <input type="text" className="form-control"
                           name = 'ngaysinh'
                           value = {this.state.ngaysinh}
                           onChange = {this.onChange}
                           onBlur = {this.Validation}/>
                            
                       </div>
                       <div className="form-group">
                           <label >Điện thoại:</label>
                           <input type="text" className="form-control"
                           name = 'dienthoai'
                           value = {this.state.dienthoai}
                           onChange = {this.onChange}/>
                       </div>
                       <div className="form-group">
                           <label >Nơi cư trú:</label>
                           <input type="text" className="form-control"
                           name = 'noicutru'
                           value = {this.state.noicutru}
                           onChange = {this.onChange}/>
                       </div>
                   
                       
                   <div className="text-center">
                       <button type="submit" className="btn btn-warning">
                            <i className ="fa fa-plus mr-5"></i>Lưu</button>&nbsp;
                       <button type="button" className="btn btn-danger">
                            <i className="fas fa-times mr-5"></i>Hủy bỏ</button>
                   </div>
                   </form>
                   
            </div>
      </div>
                
            
        );
    }
}



export default TaskFormTeacher;