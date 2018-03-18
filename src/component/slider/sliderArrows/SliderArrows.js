import React from 'react'
import './SliderArrows.css'

class SliderArrows extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="slider-arriws-wrap">
                <span
                    className="slider-arrow slider-arrow-left"
                    onClick={this.handleArrowClick.bind(this,-1)}>
                    &lt;
                </span>
                <span
                    className="slider-arrow slider-arrow-right"
                    onClick={this.handleArrowClick.bind(this,1)}>
                    &gt;
                </span>
            </div>
        )
    }

    handleArrowClick(option){
        this.props.turn(option);
    }
}

export default SliderArrows