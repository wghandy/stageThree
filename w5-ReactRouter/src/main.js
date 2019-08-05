import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import {HashRouter,Route} from 'react-router-dom'


ReactDOM.render(
    <HashRouter>
        {/* <Route component={App}/> */}
        <App></App>
    </HashRouter>
    ,
    document.getElementById('app')
)
