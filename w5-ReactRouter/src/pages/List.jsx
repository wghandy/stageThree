import React, { Component } from 'react';
import {HashRouter,Route,Redirect,Switch,NavLink,withRouter} from 'react-router-dom'

export default class List extends Component {
    constructor(){
        super();
        this.state = {
            data:[
                {
                    name:'哈哈哈'
                }
            ],
            nav:[
                {
                    name:'QQ',
                    path:'/qq',
                    title:'111'
                },{
                    name:'LL',
                    path:'/ll',
                    title:'222'
                },{
                    name:'CC',
                    path:'/cc',
                    title:'333'
                },{
                    name:'MM',
                    path:'/mm',
                    title:'444'
                }
            ]
        }
    }
    render() {
        // console.log(this.props);
        let {path,url} = this.props.match;
        
        
        // console.log(path,url);
        return (
            <div>
                <ul>
                    {
                        this.state.nav.map((item,idx)=>{
                            return <NavLink to={url + item.path} key={idx} style={{margin:"0 20px",border:"1px solid #ccc",}} activeStyle={{color:"pink",fontWeight:"500"}}>
                                    {item.title}
                            </NavLink>
                            
                        })
                    }
                </ul>
                <Switch>
                    <Route path={path + "/qq"} render={()=>{
                        return <div style={{marginLeft:"50px"}}>
                            number1
                        </div>
                    }}/>
                    <Route path={path + "/ll"} render={()=>{
                        return <div style={{marginLeft:"50px"}}>
                            number2
                        </div>
                    }}/>
                    <Route path={path + "/cc"} render={()=>{
                        return <div style={{marginLeft:"50px"}}>
                            number3
                        </div>
                    }}/>
                    <Route path={path + "/mm"} render={()=>{
                        return <div style={{marginLeft:"50px"}}>
                            number4
                        </div>
                    }}/>
                </Switch>
            </div>
        )
    }
}
