/*Created by SmallFour on 2018/7/17*/
import {Link} from 'react-router-dom';
import React from 'react'
import config from '../../common/config'

export default function Author({user}) {
    let { avatar, user_name } = user
    avatar = config.url + '/' + avatar
    return (
        <div className="item">
            <Link
                to="/"
                className="ui mini avatar image"
            >
                <img src={avatar} alt=""/>
            </Link>
            <div className="content">
                <div className="header">
                    {user_name}
                </div>
            </div>
        </div>
    )
}