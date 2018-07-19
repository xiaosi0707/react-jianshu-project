/*Created by SmallFour on 2018/7/17*/
import {Link} from 'react-router-dom';
import S from './style.scss';
import React from 'react'
import Author from './author';

export default function Recommend(props) {
    // console.log(props)
    let {authors} = props;
    return (
        <div className={S.recommend}>
            <div className={S.title}>
                <span>作者列表</span>
            </div>
            <div className="ui items">
                {
                    authors.map((item, i) => {
                        return (
                            <Author key={i} {...{
                                user: item
                            }}/>
                        )
                    })
                }
            </div>
        </div>
    )
}


