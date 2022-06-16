import { connect, useDispatch, useSelector } from 'react-redux';
import React from 'react'
import back from '@/assets/back.jpg'
import { useEffect } from 'react'
import { getArticle } from '../store/actions/Article';
import { RootState } from '../types/store';
function Article() {
    const dispatch = useDispatch()
    const {active} = useSelector((state:RootState)=>state.channelReducer)
    const {results} = useSelector((state: RootState)=> state.articleReducer)
    useEffect(() => {
        dispatch(getArticle(active,Date.now()))
    },[dispatch,active])
    return (
        <div className='list'>
            {
                results.map(item=>(
                    <div key={item.art_id} className='article_item'>
                    <h3 className='van-ellipsis'>{item.title}</h3>
                    <div className='img_box'>
                        <img src={item.cover.images?item.cover.images[0]:back} className='w100' />
                    </div>
                    <div className='info_box'>
                        <span>13552285417</span>
                        <span>{item.comm_count}评论</span>
                        <span>{item.pubdate}</span>
                    </div>
                </div>
                ))
            } 
           
        </div>
    )
}
// articleReducer
const mapStateToProps =  (state: any) => ({a: state.articleReducer.a})


const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(Article)