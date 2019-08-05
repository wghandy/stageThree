import React, { Component } from 'react';
import MyContext from '../context/index.js';

function TodoContent(props) {
    // console.log(props);
    return  <table>
        <tbody>
                {
                    props.data.map((item,idx)=>{
                        return <tr key={item.id}>
                            <th>{idx+1}</th>
                            <td>{item.content}</td>
                            <td>{item.date}</td>
                            <td>
                                <MyContext.Consumer>  
                                    {
                                        value=>{
                                            console.log(TodoContent.bind(this),11);
                                            
                                            return <div>
                                                <button>完成</button>
                                                {/* <button onClick={()=>{value.removeItem(item.id)}}>删除</button> */}
                                                <button onClick={value.removeItem.bind(this,item.id)}>删除</button>
                                            </div>
                                        }
                                        
                                    }
                                </MyContext.Consumer>
                            </td>
                        </tr>
                    })
                }
        </tbody>
    </table>

}

export default TodoContent;