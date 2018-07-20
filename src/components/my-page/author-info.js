/*Created by SmallFour on 2018/7/20*/
import React from 'react'
import { Link } from 'react-router-dom'
import M from './my-page.scss'
export default function AuthorInfo() {
    return (
        <div className={M.author_info}>
            <Link
                to="/my_page"
            >
                <img src="" alt=""/>
            </Link>

            <div className={M.title}>
                <Link
                    to="/my_page"
                    className={M.name}
                >
                    用户名
                </Link>
            </div>

        </div>
    )
}