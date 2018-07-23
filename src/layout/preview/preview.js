/*Created by SmallFour on 2018/7/17*/
import { Link, withRouter } from 'react-router-dom'
import S from './preview.scss'
import React from 'react'
function Preview(props) {
    // console.log(props)
    let {
        createdAt,
        article_title,
        preview,
        avatar,
        user_id,
        user_name,
        initMyPage,
        history
    } = props
    return (
        <div className={`${S.note}`}>
            <div className="ui divider hidden"></div>
            <div className={`${S.content}`}>
                <div className={`${S.author}`}>
                    <Link to= ''
                          className="avatar"
                          onClick={(ev) => {
                              ev.preventDefault();
                              ev.stopPropagation();
                              history.push({
                                  pathname: '/my_page',
                                  state: {
                                      name: '123'
                                  }
                              });
                              initMyPage(user_id, {user_id}, '所有文章')
                          }}
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

export default withRouter(Preview);
