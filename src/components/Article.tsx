import { connect } from 'http2'
import React from 'react'
import avatar from '../assets/back.jpg'
export default function Article() {
    return (
        <div className='list'>
            <div className='article_item'>
                <h3 className='van-ellipsis'>python数据预处理 ：数据标准化</h3>
                <div className='img_box'>
                    <img src={avatar} className='w100' alt='' />
                </div>
                <div className='info_box'>
                    <span>13552285417</span>
                    <span>0评论</span>
                    <span>2018-11-29T17:02:09</span>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = {

}
const mapDispatchToProps = {

}
// export default connect(mapStateToProps,mapDispatchToProps)(Article)