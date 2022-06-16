import { connect } from 'react-redux'
import React from 'react'
import { useEffect } from 'react'
import avatar from '../assets/back.jpg'
// import { getChannels } from '../utils/index';
function Article() {
    // const dispatch = useDispatch()
    useEffect(() => {
    (async()=>{
        // const {data} = await getChannels()
        // dispatch({type: 'add',data})
    })()
      
    },[])
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
// articleReducer
const mapStateToProps =  (state: any) => ({a: state.articleReducer.a})


const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(Article)