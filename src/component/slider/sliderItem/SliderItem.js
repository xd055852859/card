import React from 'react'
import './SliderItem.css'

class SliderItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        /*count 轮播项总数目,item 图片属性*/ 
        let {count,item} = this.props;
        let width = 100 / count + '%';
        return(
            <li className="slider-item" style={{width:width}}>
                <img src={item.src} alt={item.alt} />
            </li>
        );
    }
}
 export default SliderItem;