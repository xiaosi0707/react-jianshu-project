/*Created by SmallFour on 2018/7/17*/
import { Link } from 'react-router-dom'
import Preview from './preview'
import React from 'react'
import config from '../../common/config'
import S from './preview.scss'

export default function PreviewList(props) {
    let { previews, initMyPage, myPagePreviews } = props;
    previews = previews.map((item, i) => {
        let {
           id,
            article_title,
           createdAt,
           preview,
           collection_name,
            user_id,
            collection_id,
            user
       } = item;


       let {
           avatar, user_name, user_intro
       } = user;

       avatar = config.url + '/' + avatar;

        return (
            <Preview key={id} {...{
                id,
                article_title,
                createdAt,
                preview,
                collection_name,
                user_id,
                collection_id,
                avatar,
                user_name,
                initMyPage
            }}/>
        )
    })
    return (
        <div>
            {previews}
        </div>
    );

}