/*Created by SmallFour on 2018/7/20*/
import React from 'react'
import Aside from '../../components/my-page/aside'
import AuthorInfo from '../../components/my-page/author-info'
import PreviewList from '../../layout/preview/preview-list'
export default class MyPage extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {

        let { notebooks, myPagePreviews, previewsName, location } = this.props
        console.log(this)
        return (
            <div className="ui container grid">
                <div className="twelve wide column">
                    <AuthorInfo />
                    <div className="ui secondary pointing menu">
                        <span className="active item">
                            { previewsName }
                        </span>
                    </div>
<PreviewList {...{ previews: myPagePreviews }} />
                </div>
                <div className="four wide column">
                    <Aside {...{notebooks}} />
                </div>
            </div>
        );

    }
}