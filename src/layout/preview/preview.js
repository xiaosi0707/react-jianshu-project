/*Created by SmallFour on 2018/7/17*/
import { Link } from 'react-router-dom'
import S from './preview.scss'
import React from 'react'
export default function Preview(props) {
    //console.log(props)
    let {
        createdAt,
        article_title,
        preview,
        avatar,
        user_name
    } = props
    return (
        <div className={`${S.note}`}>
            <div className="ui divider hidden"></div>
            <div className={`${S.content}`}>
                <div className={`${S.author}`}>
                    <Link to="/"
                          className="avatar"
                    >
                        <img src={avatar} alt="" className="ui avatar image"/>
                    </Link>
                    <div className=''>
                        <Link to="/">{user_name}</Link>
                        <span className="time">{createdAt}</span>
                    </div>
                </div>
                <Link to="/" className=''>{article_title}</Link>
                <p className={S.abstract}>
                    {preview}
                </p>
                <div className={S.meta}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
