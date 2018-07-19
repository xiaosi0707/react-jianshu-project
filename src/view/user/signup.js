/*Created by SmallFour on 2018/7/18*/
import React from 'react'
import SignUpPanel from '../../components/user/signup-panel';
import EntryPanel from '../../components/user/panel';
import config from '../../common/config'

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            myInfo: '',
            signUp: ''
        })
        this.signUpAjax = this.signUpAjax.bind(this)

    }

    signUpAjax(reqData) {
        let { signUpState } = this.state
        $.post(`${config.url}/register`, reqData)
            .done((res) => {
                this.setState({
                    signUp: res
                })
            })
    }
/*{"code":0,"msg":"注册成功","data":{"id":520,"username":"11111","user_intro":"","avatar":"/initPic/initAvatar.jpg"}}*/
    render(){
        let { signUp } = this.state
        // console.log(myInfo)
        let { signUpAjax } = this
        return (
            <EntryPanel >
                <SignUpPanel {...{signUpAjax, signUp}}/>
            </EntryPanel>
        );
    }
}