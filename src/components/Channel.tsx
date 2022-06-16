import { useEffect } from 'react';
import { getChannels } from '@/store/actions/Channel';
import { connect,useDispatch,useSelector } from 'react-redux';
import { RootState } from '../types/store';
import { changeActive } from '../store/actions/Channel';
function Channel() {
    const {channels,active} = useSelector((state: RootState)=>state.channelReducer)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getChannels())
    },[dispatch])
    const handlerClick = (id: number) => {
        // 改变高亮效果 
        dispatch(changeActive(id))
    }
    return (
        <ul className='catagtory'>
            {
                channels.map((item)=>(
                    <li key={item.id} onClick={()=>handlerClick(item.id)} className={item.id===active?'select':''}>{item.name}</li>
                ))
            }
        </ul>
    )
}
const mapStateToProps = (state:any) =>  state
const mapDispatchToProps = {
    getChannels
}
export default connect(mapStateToProps,mapDispatchToProps)(Channel)