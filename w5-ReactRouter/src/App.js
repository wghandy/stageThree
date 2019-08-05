import React, { Component } from 'react'
import {HashRouter,Route,Redirect,Switch,NavLink,withRouter} from 'react-router-dom'

import Home from './pages/Home.jsx';
import List from './pages/List.jsx';
import Cats from './pages/Cats.jsx';
import Mine from './pages/Mine.jsx';
import Goods from './pages/Goods/index';

class App extends Component {
    constructor(){
        super();
        this.state = {
            navs:[
                {
                    name:'Home',
                    path:'/home',
                    title:'首页'
                },{
                    name:'List',
                    path:'/list',
                    title:'菜单'
                },{
                    name:'Cats',
                    path:'/cats',
                    title:'购物车'
                },{
                    name:'Mine',
                    path:'/mine',
                    title:'我的'
                }
            ]
        }
        // 改变this指向
        this.goto = this.goto.bind(this)
    }
    goto(path){
        // 1.history要经过route渲染才能获取，因此要在main设置router渲染跳转
        // 2.通过高阶组件获取
        let {history} = this.props;
        // console.log("goto",this.props);
        
        history.push(path);
    }
    render() {
        // console.log('app',this.props)
        // console.log("path",path)
        return (
            <div>
                {/* <HashRouter> */}
                    <ul>
                        {
                            this.state.navs.map((item)=>{
                                return <li key={item.name} onClick={this.goto.bind(this,item.path)}>
                                    {/* <NavLink activeStyle={{color:'$f00',fontWeight:600}} to={item.path}>
                                        {item.title}
                                    </NavLink> */}
                                    {item.title}
                                </li>
                            })
                        }
                    </ul>
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/list" component={List}/>
                        <Route path="/cats" component={Cats}/>
                        <Route path="/mine" component={Mine}/>
                        <Route path="/goods/:id" component={Goods}/>
                        {/* <Route path="/goods/:id" render={()=><div>动态路由</div>}/> */}
                        
                        <Route path="/404" render={()=><div>404 地址不存在哦</div>}/>
                        <Redirect from="/" to="/home" exact/>
                        <Redirect from="/*" to="/404" />
                    </Switch>
                {/* </HashRouter> */}
            </div>
        )
    }
}

App = withRouter(App)

export default App