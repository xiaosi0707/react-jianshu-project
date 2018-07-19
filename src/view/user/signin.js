/*Created by SmallFour on 2018/7/18*/
import React from 'react'
import SignInPanel from '../../components/user/signin-panel';
import EntryPanel from '../../components/user/panel';
import config from '../../common/config'


export default class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            signIn: null
        }
        this.signInAjax = this.signInAjax.bind(this)
    }
    // 登录API请求
    signInAjax(reqData) {
        let { myInfoHandle } = this.props;
        $.post(`${config.url}/login`, reqData)
            .done((res) => {
                this.setState({
                    signIn: res
                })
                // 通过参数传递数据到父组件
                myInfoHandle(res);
            })
    }
    render(){
        let { signInAjax } = this;
        let { signIn } = this.state;
        let { myInfo } = this.props;
        // console.log(myInfo)
        return (
            <EntryPanel >
                <SignInPanel {...{signInAjax, signIn}} />
            </EntryPanel>
        );
    }
}