/*Created by SmallFour on 2018/7/20*/
import React from 'react'
import Aside from '../../components/my-page/aside'
import AuthorInfo from '../../components/my-page/author-info'
export default class MyPage extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        let { notebooks, previewsName } = this.props
        return (
            <div className="ui container grid">
                <div className="twelve wide column">
                    <AuthorInfo />
                    <div className="ui secondary pointing menu">
                        <span className="active item">
                            {/*{previewsName}*/}
                            { previewsName }
                        </span>
                    </div>
                    {/*<PreviewList*/}
                        {/*{...{*/}
                            {/*previews: myPagePreviews*/}
                        {/*}}*/}
                    {/*/>*/}
                    previewList
                </div>
                <div className="four wide column">
                    <Aside {...{notebooks}} />
                </div>
            </div>
        );

    }
}