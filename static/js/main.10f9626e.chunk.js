(this["webpackJsonpyour-repository"]=this["webpackJsonpyour-repository"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(8),r=a.n(s),c=(a(14),a(1)),o=a(2),i=a(4),m=a(3),u=(a(6),a(5)),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(u.a)({},a,l))},n.ValidationHT=function(e){""===n.state.hoten?n.setState({isInputValid:!n.state.isInputValid,errorMessage:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}):n.setState({isInputValid:n.state.isInputValid,errorMessage:""})},n.ValidationMonDay=function(e){""===n.state.monday?n.setState({isInputValid:!n.state.isInputValid,errorMessageMonDay:"Vui l\xf2ng nh\u1eadp tr\u01b0\u1eddng n\xe0y"}):n.setState({isInputValid:n.state.isInputValid,errorMessageMonDay:""})},n.onSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state)},n.onCloseForm=function(){n.props.onCloseForm()},n.state={hoten:"",monday:"",ngaysinh:"",dienthoai:"",noicutru:"",isInputValid:!0,errorMessageHT:"",errorMessageMonDay:""},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"panel panel-danger"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",{className:"panel-title"},"Th\xeam gi\xe1o vi\xean",l.a.createElement("i",{className:"fa fa-times-circle text-right",onClick:this.onCloseForm}))),l.a.createElement("div",{className:"panel-body"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group invalid"},l.a.createElement("label",null,"H\u1ecd t\xean:"),l.a.createElement("input",{type:"text",className:"form-control",name:"hoten",value:this.state.hoten,onChange:this.onChange,onBlur:this.ValidationHT}),""===this.state.hoten?l.a.createElement("span",{style:{color:"red"}},this.state.errorMessage):null),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"M\xf4n d\u1ea1y:"),l.a.createElement("input",{type:"text",className:"form-control",name:"monday",value:this.state.monday,onChange:this.onChange,onBlur:this.ValidationMonDay}),""===this.state.monday?l.a.createElement("span",{style:{color:"red"}},this.state.errorMessageMonDay):null),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Ng\xe0y sinh:"),l.a.createElement("input",{type:"text",className:"form-control",name:"ngaysinh",value:this.state.ngaysinh,onChange:this.onChange,onBlur:this.Validation})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"\u0110i\u1ec7n tho\u1ea1i:"),l.a.createElement("input",{type:"text",className:"form-control",name:"dienthoai",value:this.state.dienthoai,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"N\u01a1i c\u01b0 tr\xfa:"),l.a.createElement("input",{type:"text",className:"form-control",name:"noicutru",value:this.state.noicutru,onChange:this.onChange})),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{type:"submit",className:"btn btn-warning"},l.a.createElement("i",{className:"fa fa-plus mr-5"}),"L\u01b0u"),"\xa0",l.a.createElement("button",{type:"button",className:"btn btn-danger"},l.a.createElement("i",{className:"fas fa-times mr-5"}),"H\u1ee7y b\u1ecf")))))}}]),a}(n.Component),d=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.task,a=e.index;return l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center"},a+1),l.a.createElement("td",{className:"text-center"},t.hoten),l.a.createElement("td",{className:"text-center"},t.monday),l.a.createElement("td",{className:"text-center"},t.ngaysinh),l.a.createElement("td",{className:"text-center"},t.dienthoai),l.a.createElement("td",{className:"text-center"},t.noicutru),l.a.createElement("td",{className:"text-center"},l.a.createElement("button",{type:"button",className:"btn btn-warning"},l.a.createElement("i",{className:"fas fa-pencil-alt mr-5"}),"S\u1eeda"),"\xa0",l.a.createElement("button",{type:"button",className:"btn btn-danger"},l.a.createElement("i",{className:"fas fa-trash mr-5"}),"X\xf3a")))}}]),a}(n.Component),p=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.tasks.map((function(e,t){return l.a.createElement(d,{key:t,index:t,task:e})}));return l.a.createElement("div",null,l.a.createElement("table",{className:"table table-bordered table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"text-center"},"STT"),l.a.createElement("th",{className:"text-center"},"H\u1ecd t\xean"),l.a.createElement("th",{className:"text-center"},"M\xf4n d\u1ea1y"),l.a.createElement("th",{className:"text-center"},"Ng\xe0y sinh"),l.a.createElement("th",{className:"text-center"},"\u0110i\u1ec7n tho\u1ea1i"),l.a.createElement("th",{className:"text-center"},"N\u01a1i c\u01b0 tr\xfa"),l.a.createElement("th",{className:"text-center"},"Ch\u1ee9c n\u0103ng"))),l.a.createElement("tbody",null,e)))}}]),a}(n.Component),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onBar=function(){n.setState({isDisplaySideBar:!n.state.isDisplaySideBar})},n.onCancel=function(){n.setState({isDisplaySideBar:!n.state.isDisplaySideBar})},n.onToggleForm=function(){n.setState({isDisplayForm:!n.state.isDisplayForm})},n.onCloseForm=function(){n.setState({isDisplayForm:!n.state.isDisplayForm})},n.onReset=function(){var e=[];n.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e))},n.onSubmit=function(e){console.log(e);var t=n.state.tasks;e.id=n.generateID(),""!==e.hoten&&""!==e.monday&&t.push(e),n.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t))},n.state={tasks:[],isDisplaySideBar:!1,isDisplayForm:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){if(localStorage&&localStorage.getItem("tasks")){var e=JSON.parse(localStorage.getItem("tasks"));this.setState({tasks:e})}}},{key:"s4",value:function(){return Math.floor(1+65536*Math.random()).toString(16).substring(1)}},{key:"generateID",value:function(){return this.s4()+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+this.s4()+this.s4()}},{key:"render",value:function(){var e=this.state,t=(e.isDisplaySideBar,e.isDisplayForm),a=e.tasks,n=t?l.a.createElement(h,{onCloseForm:this.onCloseForm,onSubmit:this.onSubmit}):"";return l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",id:"check"}),l.a.createElement("label",{htmlFor:"check"},l.a.createElement("i",{className:"fas fa-bars",id:"btn",onClick:this.onBar}),l.a.createElement("i",{className:"fas fa-times",id:"cancel",onClick:this.onCancel})),l.a.createElement("div",{className:"sidebar"},l.a.createElement("header",null,"Menu"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",null,"Trang ch\u1ee7")),l.a.createElement("li",null,l.a.createElement("a",null,"Qu\u1ea3n l\xfd gi\xe1o vi\xean")),l.a.createElement("li",null,l.a.createElement("a",null,"Qu\u1ea3n l\xfd h\u1ecdc sinh")),l.a.createElement("li",null,l.a.createElement("a",null,"Qu\u1ea3n l\xfd m\xf4n h\u1ecdc")))),l.a.createElement("div",{className:"Form-app"},l.a.createElement("div",{className:"container abc"},l.a.createElement("h1",null,"Danh s\xe1ch gi\xe1o vi\xean gi\u1ea3ng d\u1ea1y"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:t?"col-xs-4 col-sm-4 col-md-4 col-lg-4 mt-50":""},n),l.a.createElement("div",{className:t?"col-xs-8 col-sm-8 col-md-8 col-lg-8 mt-50":"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-50"},l.a.createElement("button",{type:"button",className:"btn btn-primary mb-5 ",onClick:this.onToggleForm},l.a.createElement("i",{className:"fas fa-plus mr-5"}),"Th\xeam gi\xe1o vi\xean"),"\xa0",l.a.createElement("button",{type:"button",className:"btn btn-danger mb-5 ",onClick:this.onReset},"Reset All"),l.a.createElement(p,{tasks:a}))))))}}]),a}(n.Component);n.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(u.a)({},a,l))},n.onSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state)},n.onCloseForm=function(){n.props.onCloseForm()},n.state={id:"",hoten:"",DM:null,D15:null,D60:null,DT:null,isInputValid:!0,errorMessageHT:"",errorMessageDM:""},n}return Object(o.a)(a,[{key:"componentWillMount",value:function(){this.props.task&&this.setState({id:this.props.task.id,hoten:this.props.task.hoten,DM:this.props.task.DM,D15:this.props.task.D15,D60:this.props.task.D60,DT:this.props.task.DT})}},{key:"render",value:function(){return l.a.createElement("div",{className:"panel panel-danger"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",{className:"panel-title"},"Ch\u1ec9nh s\u1eeda \u0111i\u1ec3m",l.a.createElement("i",{className:"fa fa-times-circle text-right",onClick:this.onCloseForm}))),l.a.createElement("div",{className:"panel-body"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group invalid text-center mb-10"},l.a.createElement("label",null,this.props.task.hoten)),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Nh\u1eadp \u0111i\u1ec3m mi\u1ec7ng:"),l.a.createElement("input",{className:"form-control",name:"DM",value:this.state.DM,onChange:this.onChange,onBlur:this.ValidationDM}),this.state.DM?l.a.createElement("span",{style:{color:"red"}},this.state.errorMessageDM):null),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Nh\u1eadp \u0111i\u1ec3m 15p:"),l.a.createElement("input",{className:"form-control",name:"D15",value:this.state.D15,onChange:this.onChange,onBlur:this.Validation})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Nh\u1eadp \u0111i\u1ec3m 1 ti\u1ebft:"),l.a.createElement("input",{className:"form-control",name:"D60",value:this.state.D60,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Nh\u1eadp \u0111i\u1ec3m thi:"),l.a.createElement("input",{className:"form-control",name:"DT",value:this.state.DT,onChange:this.onChange})),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{type:"submit",className:"btn btn-warning"},l.a.createElement("i",{className:"fa fa-plus mr-5"}),"L\u01b0u"),"\xa0",l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.onCloseForm},l.a.createElement("i",{className:"fas fa-times mr-5"}),"H\u1ee7y b\u1ecf")))))}}]),a}(n.Component),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).onUpdate=function(){e.props.onUpdate(e.props.task.id)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.task,a=e.index,n=(parseFloat(t.DM)+parseFloat(t.D15)+2*parseFloat(t.D60)+3*parseFloat(t.DT))/7,s=Math.round(10*n)/10,r=null===t.DM||null===t.D15||null===t.D60||null===t.DT?null===s:s;return l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center"},a+1),l.a.createElement("td",{className:"text-center"},t.hoten),l.a.createElement("td",{className:"text-center"},t.DM),l.a.createElement("td",{className:"text-center"},t.D15),l.a.createElement("td",{className:"text-center"},t.D60),l.a.createElement("td",{className:"text-center"},t.DT),l.a.createElement("td",{className:"text-center"},r),l.a.createElement("td",{className:"text-center"},l.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:this.onUpdate},l.a.createElement("i",{className:"fas fa-pencil-alt mr-5"}),"S\u1eeda \u0111i\u1ec3m"),"\xa0"))}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.tasks.map((function(t,a){return l.a.createElement(f,{key:a,index:a,task:t,onUpdate:e.props.onUpdate})}));return l.a.createElement("div",null,l.a.createElement("table",{className:"table table-bordered table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"text-center"},"STT"),l.a.createElement("th",{className:"text-center"},"H\u1ecd t\xean"),l.a.createElement("th",{className:"text-center"},"\u0110i\u1ec3m mi\u1ec7ng"),l.a.createElement("th",{className:"text-center"},"\u0110i\u1ec3m 15p"),l.a.createElement("th",{className:"text-center"},"\u0110i\u1ec3m  1 ti\u1ebft"),l.a.createElement("th",{className:"text-center"},"\u0110i\u1ec3m thi"),l.a.createElement("th",{className:"text-center"},"\u0110i\u1ec3m trung b\xecnh"),l.a.createElement("th",{className:"text-center"}))),l.a.createElement("tbody",null,t)))}}]),a}(n.Component),v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onBar=function(){n.setState({isDisplaySideBar:!n.state.isDisplaySideBar})},n.onCancel=function(){n.setState({isDisplaySideBar:!n.state.isDisplaySideBar})},n.onCloseForm=function(){n.setState({isDisplayForm:!n.state.isDisplayForm})},n.onShowForm=function(){n.setState({isDisplayForm:!0})},n.onReset=function(){var e=[{id:n.generateID(),hoten:"H\xe0 Lan",DM:null,D15:null,D60:null,DT:null,Tong:null},{id:n.generateID(),hoten:"Tr\u1ea7n \u0110\u1ee9c Bo",DM:null,D15:null,D60:null,DT:null,Tong:null},{id:n.generateID(),hoten:"Anh Ng\u1ea1n",DM:null,D15:null,D60:null,DT:null,Tong:null},{id:n.generateID(),hoten:"H\u1ed3 Th\xfay lan",DM:null,D15:null,D60:null,DT:null,Tong:null},{id:n.generateID(),hoten:"Phan T\u1ea5n Trung",DM:null,D15:null,D60:null,DT:null,Tong:null}];n.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e))},n.onSubmit=function(e){var t=n.state.tasks;""===e.id?e.id=n.generateID():""!==e.hoten&&(t[n.findIndex(e.id)]=e);n.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t)),""!==e.hoten&&n.onCloseForm()},n.findIndex=function(e){var t=n.state.tasks,a=-1;return t.forEach((function(t,n){t.id===e&&(a=n)})),a},n.onDelete=function(e){var t=n.state.tasks,a=n.findIndex(e);-1!==a&&(t.splice(a,1),n.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t)))},n.onUpdate=function(e){var t=n.state.tasks[n.findIndex(e)];n.setState({taskEditing:t}),n.onShowForm()},n.state={tasks:[],isDisplaySideBar:!1,isDisplayForm:!1,taskEditing:null},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){if(localStorage&&localStorage.getItem("tasks")){var e=JSON.parse(localStorage.getItem("tasks"));this.setState({tasks:e})}}},{key:"sinhdiem",value:function(){return Math.round(10*Math.random()*10)/10}},{key:"s4",value:function(){return Math.floor(1+65536*Math.random()).toString(16).substring(1)}},{key:"generateID",value:function(){return this.s4()+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+this.s4()+this.s4()}},{key:"render",value:function(){var e=this.state,t=(e.isDisplaySideBar,e.isDisplayForm),a=e.tasks,n=e.taskEditing,s=t?l.a.createElement(b,{onCloseForm:this.onCloseForm,onSubmit:this.onSubmit,task:n}):"";return l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",id:"check"}),l.a.createElement("label",{htmlFor:"check"},l.a.createElement("i",{className:"fas fa-bars",id:"btn",onClick:this.onBar}),l.a.createElement("i",{className:"fas fa-times",id:"cancel",onClick:this.onCancel})),l.a.createElement("div",{className:"sidebar"},l.a.createElement("header",null,"Menu"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",null,"Trang ch\u1ee7")),l.a.createElement("li",null,l.a.createElement("a",null,"Qu\u1ea3n l\xfd gi\xe1o vi\xean")),l.a.createElement("li",null,l.a.createElement("a",null,"Qu\u1ea3n l\xfd h\u1ecdc sinh")),l.a.createElement("li",null,l.a.createElement("a",null,"Qu\u1ea3n l\xfd m\xf4n h\u1ecdc")))),l.a.createElement("div",{className:"Form-app"},l.a.createElement("div",{className:"container abc"},l.a.createElement("h1",null,"Qu\u1ea3n l\xfd \u0111i\u1ec3m m\xf4n To\xe1n l\u1edbp 10A1"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:t?"col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-50":""},s),l.a.createElement("div",{className:t?"col-xs-9 col-sm-9 col-md-9 col-lg-9 mt-50":"col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-50"},l.a.createElement("button",{type:"button",className:"btn btn-danger mb-5 ",onClick:this.onReset},"L\xe0m m\u1edbi \u0111i\u1ec3m"),l.a.createElement("h3",null,"Gi\xe1o vi\xean: H\u1ed3 Lan"),l.a.createElement(g,{tasks:a,onDelete:this.onDelete,onUpdate:this.onUpdate}))))))}}]),a}(n.Component),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=e.target,a=t.name,l=t.value;n.onClear(),n.setState(Object(u.a)({},a,l))},n.ValidationHT=function(e){""===n.state.hoten?n.setState({isInputValid:!n.state.isInputValid,errorMessage:"Vui l\xf2ng nh\u1eadp m\xf4n h\u1ecdc"}):n.setState({isInputValid:n.state.isInputValid,errorMessage:""})},n.onSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state)},n.onClear=function(){n.setState({hoten:""})},n.state={hoten:"",isInputValid:!0,errorMessageHT:"",errorMessageMonDay:""},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"panel panel-danger"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",{className:"panel-title"},"Th\xeam m\xf4n h\u1ecdc")),l.a.createElement("div",{className:"panel-body"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group invalid"},l.a.createElement("input",{type:"text",className:"form-control mt-10",placeholder:"T\xean m\xf4n h\u1ecdc",name:"hoten",value:this.state.hoten,onChange:this.onChange,onBlur:this.ValidationHT}),""===this.state.hoten?l.a.createElement("span",{style:{color:"red"}},this.state.errorMessage):null),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{type:"submit",className:"btn btn-warning"},l.a.createElement("i",{className:"fa fa-plus mr-5"}),"L\u01b0u"),"\xa0",l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.onClear},l.a.createElement("i",{className:"fas fa-times mr-5"}),"X\xf3a")))))}}]),a}(n.Component),y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).onDeleteMonHoc=function(){e.props.onDeleteMonHoc(e.props.task.id)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.task,a=e.index;return l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center"},a+1),l.a.createElement("td",{className:"text-center"},t.hoten),l.a.createElement("td",{className:"text-center"},l.a.createElement("button",{type:"button",className:"btn btn-warning"},l.a.createElement("i",{className:"fas fa-pencil-alt mr-5"}),"S\u1eeda"),"\xa0",l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.onDeleteMonHoc},l.a.createElement("i",{className:"fas fa-trash mr-5"}),"X\xf3a")))}}]),a}(n.Component),D=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.tasks.map((function(t,a){return l.a.createElement(y,{key:a,index:a,task:t,onDeleteMonHoc:e.props.onDeleteMonHoc})}));return l.a.createElement("div",null,l.a.createElement("table",{className:"table table-bordered table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"text-center"},"STT"),l.a.createElement("th",{className:"text-center"},"M\xf4n h\u1ecdc"),l.a.createElement("th",null))),l.a.createElement("tbody",null,t)))}}]),a}(n.Component),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onBar=function(){n.setState({isDisplaySideBar:!n.state.isDisplaySideBar})},n.onCloseForm=function(){n.setState({isDisplayForm:!n.state.isDisplayForm})},n.onReset=function(){var e=[];n.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e))},n.onSubmit=function(e){console.log(e);var t=n.state.tasks;e.id=n.generateID(),""!==e.hoten&&t.push(e),n.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t))},n.findIndex=function(e){var t=n.state.tasks,a=-1;return t.forEach((function(t,n){t.id===e&&(a=n)})),a},n.onDeleteMonHoc=function(e){var t=n.state.tasks,a=n.findIndex(e);-1!==a&&(t.splice(a,1),n.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t))),n.onCloseForm()},n.state={tasks:[],isDisplaySideBar:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){if(localStorage&&localStorage.getItem("tasks")){var e=JSON.parse(localStorage.getItem("tasks"));this.setState({tasks:e})}}},{key:"s4",value:function(){return Math.floor(1+65536*Math.random()).toString(16).substring(1)}},{key:"generateID",value:function(){return this.s4()+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+this.s4()+this.s4()}},{key:"render",value:function(){var e=this.state,t=(e.isDisplaySideBar,e.isDisplayForm,e.tasks);return l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",id:"check"}),l.a.createElement("label",{htmlFor:"check"},l.a.createElement("i",{className:"fas fa-bars",id:"btn",onClick:this.onBar}),l.a.createElement("i",{className:"fas fa-times",id:"cancel",onClick:this.onCancel})),l.a.createElement("div",{className:"sidebar"},l.a.createElement("header",null,"Menu"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",null,"Trang ch\u1ee7")),l.a.createElement("li",null,l.a.createElement("a",null,"Qu\u1ea3n l\xfd gi\xe1o vi\xean")),l.a.createElement("li",null,l.a.createElement("a",null,"Qu\u1ea3n l\xfd h\u1ecdc sinh")),l.a.createElement("li",null,l.a.createElement("a",null,"Qu\u1ea3n l\xfd m\xf4n h\u1ecdc")))),l.a.createElement("div",{className:"Form-app"},l.a.createElement("div",{className:"container abc"},l.a.createElement("h1",null,"Qu\u1ea3n l\xfd m\xf4n h\u1ecdc"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-4 col-sm-4 col-md-4 col-lg-4 mt-50"},l.a.createElement(N,{onCloseForm:this.onCloseForm,onSubmit:this.onSubmit,onClearAdd:this.onClearAdd})),l.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-50"},l.a.createElement("div",{className:"panel panel-primary"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",{className:"panel-title"},"Danh s\xe1ch m\xf4n h\u1ecdc")),l.a.createElement("div",{className:"panel-body"},l.a.createElement(D,{tasks:t,onDeleteMonHoc:this.onDeleteMonHoc}))))))))}}]),a}(n.Component);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null),l.a.createElement(v,null),l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.10f9626e.chunk.js.map