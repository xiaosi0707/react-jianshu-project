/*Created by SmallFour on 2018/7/17*/
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Frame from './layout/frame/frame'

// 自动登录请求头设置
$.ajaxSetup({
    xhrFields: {
        withCredentials: true
    }
})

ReactDOM.render(
    <Router>
        <Route path='/' component={Frame}></Route>
    </Router>,
    document.getElementById('root')
)