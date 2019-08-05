import React, { Component } from 'react'

export default class Lists extends Component {
    constructor(){
        super();
        this.state = {
            lists:[
                {
                    name:'home',
                    path:'Home',
                    title:'首页',
                    Component:'Home'
                },{
                    name:'goods',
                    path:'Goods',
                    title:'商品',
                    Component:'Goods'
                },{
                    name:'cats',
                    path:'Cats',
                    title:'购物车',
                    Component:'Cats'
                },{
                    name:'mine',
                    path:'Mine',
                    title:'我的',
                    Component:'Mine'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                {/* <ul>
                    <li>
                        <Navlick></Navlick>
                    </li>
                </ul> */}
                <Route path="/home" Component={Home}/>>
                <Route path="/goods" Component={Goods}/>>
                <Route path="/cats" Component={Cats}/>>
                <Route path="/mine" Component={Mine}/>>
            </div>
        )
    }
}
