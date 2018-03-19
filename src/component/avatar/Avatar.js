import React from 'react'

import './Avatar.css'

const IMG = [
    {
        src: require("./../../images/hot.png"),
        alt: "hotImg"
    }, {
        src: require("./../../images/meCollect.png"),
        alt: "meCollectImg"
    }, {
        src: require("./../../images/collectMe.png"),
        alt: "collectMeImg"
    }
]
class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.IMG = IMG;
    }

    render() {
        var items = [];
        // this.props.insterest.map((item,index)=>{     items.push(item) })
        return (
            <div className="avatar-container">
                <div className="avatar-div">
                    <img src={this.props.userInfo.avatar.src} alt="this.props.avatar.src" className="avatar-img"></img>
                </div>
                <div className="nickName-div">
                    <div>{this.props.userInfo.nickName}</div>
                </div>
                <div className="property-div">
                    <div><img src={IMG[0].src} alt={IMG[0].alt}/>热度:{this.props.userInfo.hot}</div>
                    <div><img src={IMG[1].src} alt={IMG[1].alt}/>人脉:{this.props.userInfo.meCollect}</div>
                    <div><img src={IMG[2].src} alt={IMG[2].alt}/>人缘:{this.props.userInfo.collectMe}</div>
                </div>
                <div className="intesest-div">
                    {this.props.userInfo.insterest.map((item, key) => (
                        <div key={key} style={{ backgroundColor: this.randomColor()}} className="intesest-text">
                            {item}
                        </div>
                    ))
                    }
                </div>
            </div>
        )
    };
    randomColor() {
        let randomArr = [
            "#FFE3B5",
            "#FFC6B2",
            "#D3E4C3",
            "#B0DFEB",
            "#C2EFB4",
            "#D1C0FF",
            "#9CDBCA",
            "#F4D5EB"
        ];
        return randomArr[parseInt(Math.random() * 7)];
    }
}

export default Avatar;