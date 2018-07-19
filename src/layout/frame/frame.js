/*Created by SmallFour on 2018/7/17*/
import React from 'react';
import ReactDOM from 'react-dom'
import { Route, Redirect } from 'react-router-dom'
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
    myInfoHandle(resData) { // 父组件定义方法 - 传递给子组件
        this.setState({
            myInfo: resData // 把子组件传递上来的数据，更新到myInfo上，然后再传递给Nav兄弟组件
        })
    }
    render() {
        let { myInfoHandle } = this;
        let { myInfo } = this.state;

        return (
            <div className={S.layout}>
                <Nav {...{ myInfo }}/> {/*传递给兄弟组件Nav*/}
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/sign_in' render={
                    (props) => (
                        myInfo && !myInfo.code ? <Redirect to='/' /> : <SignIn {...{ myInfoHandle }} />)
                }
                ></Route>
                <Route exact path='/sign_up' component={SignUp}></Route>
            </div>
        )
    }
}