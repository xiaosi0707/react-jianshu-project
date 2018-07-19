/*Created by SmallFour on 2018/7/17*/
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import N from './nav.scss'
import config from '../../common/config'

export default function Nav(props) {
    console.log(props)
    let { myInfo } = props; // 接收父组件传递过来的数据
    let userLink = null;
    // 判断myInfo是否有值
    if(!myInfo) {
        userLink = [(
            <NavLink key='1' to="/sign_in"
                     className={`item`}
                     activeClassName="active"
            >登录</NavLink>),(
            <NavLink key='2' to="/sign_up"
                     className={`item`}
                     activeClassName="active"
            >注册</NavLink>
        )]
    } else {
        myInfo.data.avatar = config.url + `/${myInfo.data.avatar}`
        userLink = (
            <NavLink
                to="/my_page"
                className={`${N.avatar} item`}
                activeClassName="active"
            >
                <img
                    src={myInfo.data.avatar}
                    className="ui image avatar"
                    alt=""
                />
                <div className={N.dropDown}>
                    <p>注销</p>
                </div>
            </NavLink>
        )
    }
    return (
        <div className={`ui fixed secondary pointing menu ${N.nav}`}>
            <div className="ui container">

                <Link to="/"
                      className={`header item`}
                >Noods</Link>

                <NavLink exact to="/"
                         className={`item`}
                         activeClassName="active"
                >首页</NavLink>

                <div className="menu right">
                    {userLink}
                    <NavLink to="/write"
                             className={`item`}
                             activeClassName="active"
                    >写文章</NavLink>
                </div>
            </div>
        </div>

    )
}