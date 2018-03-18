import React from 'react'

import './Slider.css'

import SliderItem from './sliderItem/SliderItem';
import SliderDots from './sliderDots/SliderDots';
import SliderArrows from './sliderArrows/SliderArrows';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowLocal: 0
        }
    };

    render() {
        let count = this.props.items.length;
        let itemNodes = this.props.items.map((item, idx) => {
            return <SliderItem item={item} count={count} key={'item' + idx}/>
        })
        let arrowsNode = <SliderArrows turn={this.turn.bind(this)}/>;
        let dotsNode = <SliderDots turn={this.turn.bind(this)} count={count} nowLocal={this.state.nowLocal}/>
        return (
            <div
                className="slider"
                onMouseOver={this.props.pause ? this.pausePlay.bind(this) : null}
                onMouseOut={this.props.pause ? this.goPlay.bind(this) : null}>
                <ul
                    style={{
                    left: -100 *this.state.nowLocal + "%",
                    transitionDuration: this.props.speed + "%",
                    width: this.props.items.length*100 + "%"
                }}>
                    {itemNodes}
                </ul>
                {/*{this.props.arrows ? arrowsNode : null}*/}
                {/*{this.props.dots ? dotsNode : null}*/}
            </div>
        )
    }
    //向前向后多少
    turn(n) {
        let _n = this.state.nowLocal + n;
        //第一张跳至末尾
        if (_n < 0) {
            _n = _n + this.props.items.length;
        }
        //最后一张跳至首位
        if (_n >= this.props.items.length) {
            _n = _n - this.props.items.length;
        }
        this.setState({nowLocal: _n});
    }

    //开始自动轮播
    goPlay() {
        console.log("启动")
        if (this.props.autoplay) {
            this.autoPlayFlag = setInterval(() => {
                this.turn(1);
            }, this.props.delay * 1000);
        }
    }

    //暂停自动播放
    pausePlay() {
        console.log("暂停")
        clearInterval(this.autoPlayFlag);
    }

    componentDidMount() {
        this.goPlay();
    }
}
Slider.defaultProps = {
    speed: 1.2,
    delay: 2.1, //时间间隔
    pause: true,
    autoPlay: true,
    dots: true,
    arrows: true,
    items: []
};

Slider.autoPlayFlag = null;
export default Slider