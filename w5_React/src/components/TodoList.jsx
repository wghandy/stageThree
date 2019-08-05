import React,{Component} from 'react';
import axios from 'axios';
import TodoForm from './TodoForm.jsx';   
import TodoContent from './TodoContent.jsx';   
import MyContext from '../context/index.js';

class TodoList extends Component{
    constructor(){//初始化
        super(),
        // 状态
        this.state = {
            data:[
                {
                    id:1,
                    content:'完成React项目',
                    date:'2019-7-28',
                    done:false
                },
                {
                    id:2,
                    content:'面试',
                    date:'2019-8-18',
                    done:true
                }
            ]
        }
        // 初始化的时候改变事件函数处理的this的指向
        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.completeItem = this.completeItem.bind(this)
    }
    // 添加
    addItem(content){
        let data = this.state.data;
        let newContent = {
            id:Date.now(),
            content,
            done:false,
            date:`2019-7-17`
        };
        this.setState({
            data:[newContent,...data]
        })
        // console.log(123);
        
    }
    //删除
    removeItem(id){
        console.log(111);
        
        let data = this.state.data;
        data = data.filter(item=>item.id != id)
        this.setState({
            data
        });

    }
    //完成
    completeItem(id){
        let data = this.state.data;
        data.map((item)=>{
            if(item.id == id){
                item.done = true;
            }
            return item
        });
        this.setState({
            data
        })
    }
    render(){
        return <div>
            <MyContext.Provider value={{removeItem:this.removeItem}}>
                <TodoForm addItem={this.addItem}></TodoForm>
                <TodoContent data={this.state.data}></TodoContent>
            </MyContext.Provider>
        </div>
    }
}

export default TodoList;