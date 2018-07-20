/*Created by SmallFour on 2018/7/17*/
import React from 'react'
import PreviewList from '../../layout/preview/preview-list';
import Recommend from '../../components/home/recommend';
import config from '../../common/config'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            previews: [],
            authors: []
        }
    }
    componentDidMount() {
        $.post(`${config.url}/getPreview`)
            .done(res => {
                if(res.code === 0) {
                    this.setState({
                        previews: res.data
                    })
                }
            })
        // 作者
        $.post(`${config.url}/getAuthor`)
            .done((res) => {
                if (res.code === 0) {
                    this.setState({
                        authors: res.data
                    })
                }
            })
    }
    render() {
        let { previews, authors } = this.state;
        let { initMyPage } = this.props;
        return (
            <div className="ui container grid">
                <div className="column twelve wide">
                    <PreviewList {...{previews, initMyPage}}/>
                </div>
                <div className="column four wide">
                    <Recommend {...{authors}}/>
                </div>
            </div>
        )
    }
}

