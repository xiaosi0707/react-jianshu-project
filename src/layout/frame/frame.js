/*Created by SmallFour on 2018/7/17*/
import React from 'react';
import ReactDOM from 'react-dom'
import { Route, Redirect } from 'react-router-dom'
import S from './frame.scss'
import Nav from '../nav/nav.js'
import Home from '../../view/home/home'
import SignIn from '../../view/user/signin'
import SignUp from '../../view/user/signup'
import MyPage from '../../view/user/my-page'
import config from '../../common/config'
export default class Frame extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            myInfo: null,
            myPagePreviews: [],
            notebooks: [],
            previewsName: '所有文章'
        }
        this.myInfoHandle = this.myInfoHandle.bind(this);
        this.logout = this.logout.bind(this)
        this.getPreview = this.getPreview.bind(this)
        this.initMyPage = this.initMyPage.bind(this)
    }
    myInfoHandle(resData) { // 父组件定义方法 - 传递给子组件
        this.setState({
            myInfo: resData // 把子组件传递上来的数据，更新到myInfo上，然后再传递给Nav兄弟组件
        })
    }
    // 自动登录
    componentDidMount() {
        let { myInfoHandle } = this;
        $.post(`${config.url}/autologin`)
            .done((res) => {
                this.setState({
                    signIn: res
                })
                myInfoHandle(res);
            })
    }
    // 注销
    logout() {
        let { myInfoHandle } = this;
        $.post(`${ config.url }/logout`)
            .done((res) => {
                if (res.code === 0) {
                    this.setState({
                        myInfo: null
                    })
                }
            })
    }
    getPreview(data) {
        $.post(`${config.url}/getPreview`, data)
            .done((res) => {
                if(res.code === 0) {
                    this.setState({
                        myPagePreviews: res
                    })
                }
            })
    }
    // previewName 就是用户页头像下显示的那几个字
    initMyPage(user_id, previewName){
        // console.log(user_id)
        //this.getPreview(previewsData);

        $.post(`${config.url}/getCollection`,{
            user_id
        })
            .done((res)=>{
                if(res.code===0){
                    this.setState({
                        notebooks: res.data,
                        previewsName
                    });
                }
            });

    }
    render() {
        let { myInfoHandle, logout, initMyPage } = this;
        let { myInfo, notebooks, previewsName } = this.state;
        return (
            <div className={S.layout}>
                <Nav {...{ myInfo, logout }}/> {/*传递给兄弟组件Nav*/}
                <Route exact path='/' render={
                    (props) => (
                        <Home {...{ initMyPage }}/>
                        )}
                ></Route>
                <Route exact path='/sign_in' render={
                    (props) => (
                        myInfo && !myInfo.code ? <Redirect to='/' /> : <SignIn {...{ myInfoHandle }} />)
                }
                ></Route>
                <Route exact path='/sign_up' component={SignUp}></Route>
                <Route exact path='/my_page' render={
                    (props) => (
                        <MyPage {...{ notebooks, previewsName }}/>
                    )
                }></Route>
            </div>
        )
    }
}