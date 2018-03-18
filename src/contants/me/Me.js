import React from 'react';
import './Me.css';
import Slider from './../../component/slider/Slider'
import Avatar from './../../component/avatar/Avatar'

import ScanSrc from './../../images/scanIcon.png'
import CodeSrc from './../../images/codeIcon.png'
import MsgSrc from './../../images/msgIcon.png'
import SetSrc from './../../images/set.png'

const IMAGE_DATA = [
    {
        src: require('./../../images/1.jpg'),
        alt: "images-1"
    }, {
        src: require('./../../images/2.jpg'),
        alt: "images-2"
    }, {
        src: require('./../../images/3.jpg'),
        alt: "images-3"
    }
]
let avatar = {
    src: require('./../../images/avatar.jpg'),
    alt: "avatar"
};

let nickName = "嘿嘿嘿";

class Me extends React.Component {
    render() {
        return (
            <div>
                <div className="nav">
                    <div className="navIcon">
                        <img src={ScanSrc}></img>
                        <div>扫描</div>
                    </div>
                    <div className="navIcon">
                        <img src={CodeSrc}></img>
                        <div>二维码</div>
                    </div>
                    <div className="navIcon">
                        <img src={MsgSrc}></img>
                        <div>消息</div>
                    </div>

                    <div className="navIcon">
                        <img src={SetSrc}></img>
                        <div>设置</div>
                    </div>
                </div>
                <Slider items={IMAGE_DATA} speed={1.2} delay={2.1} pause={true} autoplay={true} dots={true} arrows={true}/>
                <Avatar className="" avatar={avatar} nickName={nickName}/>
            </div>
        )
    }
}

export default Me;