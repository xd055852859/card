import React from 'react'
import './SliderDots.css'

class SliderDots extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let dotNodes = [];
        /*count 轮播项总数目 nowLocal 当前轮播项*/
        let {count, nowLocal} = this.props;
        for (let i = 0; i < count; i++) {
            dotNodes[i] = (
                <span
                    key={'dot' + i}
                    className={"slider-dot" + (i === this.props.nowLocal ? " slider-dot-selected" : "")}
                    onClick={this.handleDotClick.bind(this, i)}></span>
            );
        }
        return (
            <div className="slider-dots-wrap">
                {dotNodes}
            </div>
        )
    }

    handleDotClick(i) {
        var option = i - this.props.nowLocal;
        /*点击dot回调函数*/
        this.props.turn(option);
    }
}

export default SliderDots