import React, { Component } from 'react';
// import MyContext from '../context';

// function TodoForm({addItem}) {
//     return <div>
//         <input type="text" />
//         <button onClick={addItem}>添加</button>
//     </div>
// }

class TodoForm extends Component{
    constructor(){
        super(),
        this.state = {
            keyword:''
        },
        this.addParentItem = this.addParentItem.bind(this);
        this.handleKeyup = this.handleKeyup.bind(this);
    }
    //input:value指得改动必须用到事件处理函数
    //事件处理函数默认没有this，因此用bind()改变this指向
    changKeyword(e){//默认的
        // console.log(e.currentTarget);
        this.setState({
            keyword:e.target.value
        })

    }
    // 获取焦点并清空输入框
    addParentItem(){
        this.props.addItem(this.state.keyword);
        this.setState({
            keyword:''
        }),
        this.refs.keyword.focus()
    }
    handleKeyup(e){
        if(e.keyCode === 13){
            this.addParentItem();
        }
    }
    render(){
        // console.log("获取传入的context",this.context);
        
        return <div>
            <input type="text" ref="keyword" value={this.state.keyword} onKeyUp={this.handleKeyup} onChange={this.changKeyword.bind(this)}/>
            <button onClick={this.addParentItem}>添加</button>
        </div>
    }
}

// TodoForm.contextType = MyContext
export default TodoForm;