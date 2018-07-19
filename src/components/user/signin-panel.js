/*Created by SmallFour on 2018/7/18*/
import React from 'react'
import S from './user.scss'
import validator from '../../common/util/validation'
export default class SignInPanel extends React.Component{

    constructor(props){
        // console.log(props)
        super(props);
        // 初始化状态
        this.state = {
            userName: '',
            passWord: '',
            nameErr: '',
            passErr: ''
        }
        // this指向
        this.userNameChange = this.userNameChange.bind(this);
        this.passWordChange = this.passWordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.validator = new validator(); // new一个验证
        // 验证用户名
        this.validator.addByValue('userName', [
            {strategy: 'isEmpty', errorMsg: '用户名不能为空'},
            {strategy: 'hasSpace', errorMsg: '用户名不能有空格'},
            {strategy: 'maxLength:6', errorMsg: '用户名最长为6个汉字'},
        ])
        // 验证密码
        this.validator.addByValue('passWord', [
            {strategy: 'isEmpty', errorMsg: '密码不能为空'},
            {strategy: 'hasSpace', errorMsg: '密码不能有空格'},
            {strategy: 'maxLength:6', errorMsg: '密码最长为6个字符'},
        ])

    }
    // 用户名
    userNameChange(ev) {
        let msg = this.validator.valiOneByValue('userName', ev.target.value)
        this.setState({
            userName: ev.target.value,
            nameErr: msg
        })
    }
    // 密码
    passWordChange(ev) {
        let msg = this.validator.valiOneByValue('passWord', ev.target.value)
        this.setState({
            passWord: ev.target.value,
            passErr: msg
        })
    }
    // 登录
    onSubmit(ev) {

        ev.preventDefault();
        ev.stopPropagation();
        let { nameDom, passDom } = this.refs;
        let { validator } = this;

        // 点击登录校验
        let nameError = validator.valiOneByValue('userName', nameDom.value)
        let passWordError = validator.valiOneByValue('passWord', passDom.value)

        // 更改状态 - 渲染不同组件
        this.setState({
            nameErr: nameError,
            passErr: passWordError
        })
        // 用户名、密码，校验通过，发送ajax请求
        if (!nameError && !passWordError) {
            this.props.signInAjax({
                username: nameDom.value,
                passw: passDom.value
            });
        }

    }
    render(){

        let { onSubmit } = this;
        let { userName, passWord, nameErr, passErr } = this.state;
        let { userNameChange, passWordChange } = this;
        let { signIn } = this.props // props取值 - 父组件

        let nameErrMsg = nameErr ? (
            <p className={S.err}>{nameErr}</p>
        ) : '';
        let passErrMsg = passErr ? (
            <p className={S.err}>{passErr}</p>
        ) : '';

        // 根据props取到的值，进行提示
        let resInfo = '';
        if(signIn && signIn.code !== 0) {
            resInfo = (
                <div className="ui message error">
                    <p>{signIn.msg}</p>
                </div>
            )
        }

        return (

            <div className={S.sign_panel}>
                { resInfo }
                <form
                    className="ui form"
                    onSubmit={onSubmit}
                >
                    <div className={`field ${nameErr ? 'error' : ''}`}>
                        <input
                            type="text"
                            placeholder="用户名"
                            ref="nameDom"
                            value={userName}
                            onChange={userNameChange}
                        />
                        {nameErrMsg}
                    </div>

                    <div className={`field ${passErr ? 'error' : ''}`}>
                        <input
                            type="text"
                            placeholder="密码"
                            ref="passDom"
                            value={passWord}
                            onChange={passWordChange}
                        />
                        {passErrMsg}
                    </div>

                    <div className="field">
                        <button type="submit"
                                className="ui button fluid primary"
                        >登录</button>
                    </div>
                </form>
            </div>
        );
    }
}
