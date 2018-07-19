/*Created by SmallFour on 2018/7/17*/
import React from 'react';
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import S from './frame.scss'
import Nav from '../nav/nav.js'
import Home from '../../view/home/home'
import SignIn from '../../view/user/signin'
import SignUp from '../../view/user/signup'
export default class Frame extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            myInfo: null
        }
        this.myInfoHandle = this.myInfoHandle.bind(this);
    }
    myInfoHandle(resData) {
        this.setState({
            myInfo: resData
        })
    }
    render() {
        let { myInfoHandle } = this;
        let { myInfo } = this.state;

        return (
            <div className={S.layout}>
                <Nav {...{ myInfo }}/>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/sign_in' render={
                    (props) => (<SignIn {...{ myInfoHandle }} />)
                }
                ></Route>
                <Route exact path='/sign_up' component={SignUp}></Route>
            </div>
        )
    }
}