/*Created by SmallFour on 2018/7/20*/
import React from 'react'
import M from './my-page.scss'
export default class Aside extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={M.aside}>

                <div className="introduce">
                    <div className="title">
                        个人介绍
                        <div className="ui divider hidden"></div>

                        <p>个人介绍的信息</p>

                    </div>
                </div>

                <div className="ui divider hidden"></div>

                <div className={M.volume}>
                    <div className={M.title}>
                        我的文集
                    </div>
                    <div className="ui list">

                    </div>
                </div>

            </div>
        )
    }
}