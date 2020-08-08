import React, { Component } from 'react';


class TaskFormMonHoc extends Component {
    constructor(props){
        super(props);
        this.state = {
            hoten: '',
            isInputValid: true,
            errorMessageHT: '' ,
            errorMessageMonDay: ''
        }
    }
    
    onChange = (event) =>{
        
        var target = event.target;
        var name = target.name;
        var value = target.value
        this.onClear();
        this.setState({
            [name] : value
        })
    }
    
    ValidationHT = (event) => {
        if(this.state.hoten ===''){
            this.setState({
                isInputValid : !this.state.isInputValid,
                errorMessage : 'Vui lòng nhập môn học'
            })
        }else {
            this.setState({
                isInputValid : this.state.isInputValid,
                errorMessage : ''
            })
        }
    }

    
   

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        
    }

    onClear = () =>  {
          this.setState({
              hoten : ''
          })
    }
    
  
        render(){
        
           
        return (
            <div className="panel panel-danger">
            <div className="panel-heading">
                  <h3 className="panel-title">Thêm môn học
                  </h3>
            </div>
            <div className="panel-body">
                   {/* Form input*/ }
                   
                   <form onSubmit = {this.onSubmit}>
                       <div className="form-group invalid">
                           
                           <input type="text" className="form-control mt-10" placeholder ='Tên môn học'
                           name ='hoten'
                           value = {this.state.hoten}
                           onChange = {this.onChange}
                           onBlur = {this.ValidationHT}
                          />
                            {this.state.hoten === '' ? <span style = {{color : 'red'}}>           
                               {this.state.errorMessage}
                            </span> : null }
                       </div>
                       
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                    <i className ="fa fa-plus mr-5"></i>Lưu</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick = {this.onClear}>
                                    <i className="fas fa-times mr-5"></i>Xóa</button>
                        </div>
                   </form>
                   
            </div>
      </div>
                
            
        );
    }
}



export default TaskFormMonHoc;