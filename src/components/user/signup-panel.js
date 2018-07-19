/*Created by SmallFour on 2018/7/18*/
import React from 'react'
import S from './user.scss'
import validator from "../../common/util/validation";
export default class SignUpPanel extends React.Component{

    constructor(props){
        super(props);
        // 初始值（初始状态）
        this.state = {
            userName: '',
            passWord: '',
            cfPassWord: '',
            nameErr: '',
            passErr: '',
            cfPassErr: ''
        }
        // 改变this指向
        this.userNameChange = this.userNameChange.bind(this);
        this.passWordChange = this.passWordChange.bind(this);
        this.cfPassWordChange = this.cfPassWordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // 实例化验证new
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
    // 用户名实时校验
    userNameChange(ev) {
        let msg = this.validator.valiOneByValue('userName', ev.target.value)
        this.setState({
            userName: ev.target.value,
            nameErr: msg
        })
    }
    // 密码实时校验
    passWordChange(ev) {
        let msg = this.validator.valiOneByValue('passWord', ev.target.value)
        this.setState({
            passWord: ev.target.value,
            passErr: msg
        })
        let { cfPassErr } = this.state
        // 如果先输入的"确认密码"，然后再输入"密码"，就重新执行cfPassWordChange()方法
        if(cfPassErr) {
            this.cfPassWordChange()
        }
    }
    // 确认密码实时校验
    cfPassWordChange() {
        let { passDom, cfPassDom } = this.refs;
        let cfPassErr = passDom.value === cfPassDom.value ? '' : '密码不一致'
        this.setState({
            cfPassWord: cfPassDom.value,
            cfPassErr
        })
    }
    // 注册
    onSubmit(ev) {
        let { nameDom, passDom, cfPassDom  } = this.refs
        // let { myInfo } = this.props

        ev.preventDefault();
        ev.stopPropagation();

        let { validator } = this;
        let nameError = validator.valiOneByValue('userName', nameDom.value)
        let passError = this.validator.valiOneByValue('passWord', passDom.value)
        let cfPassError = passDom.value === cfPassDom.value ? '' : '密码不一致'
        this.setState({
            nameErr: nameError,
            passErr: passError,
            cfPassErr: cfPassError
        })
        if(!nameError && !passError && !cfPassError) {
            this.props.signUpAjax({
                username: nameDom.value,
                passw: passDom.value,
                cfPassw: cfPassDom.value
            })
        }
    }
    render(){
        // 注册成功传递过来的signUp对象
        let { signUp } = this.props;

        // 解构出状态值
        let { userName, passWord, nameErr, passErr, cfPassWord, cfPassErr } = this.state;
        // 解构方法
        let { userNameChange, passWordChange, cfPassWordChange, onSubmit } = this;

        // 根据错误结果显示不同的组件
        let nameErrMsg = nameErr ? (
            <p className={S.err}>{nameErr}</p>
        ) : '';
        let passErrMsg = passErr ? (
            <p className={S.err}>{passErr}</p>
        ) : '';
        let cfPassErrMsg = cfPassErr ? (
            <p className={S.err}>{cfPassErr}</p>
        ) : '';
        // 根据请求API返回且传递过来的数据进行判断
        let resInfo = null
        if(signUp) {
            if(signUp.code === 0) {
                resInfo = (
                    <div className="ui message positive">
                        <p>{signUp.msg}</p>
                        <p>马上帮你登录</p>
                    </div>
                );
            } else{
                resInfo = (
                    <div className="ui message error">
                        <p>{signUp.msg}</p>
                    </div>
                );
            }
        }
        // DOM结构
        return (
            <div className={S.sign_panel}>
                {resInfo} {/*注册提示信息*/}
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
                    <div className={`field ${cfPassErr ? 'error' : ''}`}>
                        <input
                            type="text"
                            placeholder="确认密码"
                            ref="cfPassDom"
                            value={cfPassWord}
                            onChange={cfPassWordChange}
                        />
                        {cfPassErrMsg}
                    </div>
                    <div className="field">
                        <button type="submit"
                                className="ui button fluid primary"
                        >注册</button>
                    </div>
                </form>
            </div>
        );
    }
}
