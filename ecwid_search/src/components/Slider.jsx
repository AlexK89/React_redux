import 'rc-slider/assets/index.css';
import React from 'react';
import Slider from 'rc-slider';

export class RangeSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            max: null,
            min: null,
            selectedRange: {
                min: 0,
                max: 0
            }
        }
    }
    render() {
        const createSliderWithTooltip = Slider.createSliderWithTooltip;
        const Range = createSliderWithTooltip(Slider.Range);

        return (
            <div>
                <p>Range with custom handle</p>
                <Range min={0} max={100} defaultValue={[0, 100]} tipFormatter={value => `£${value}`} />
            </div>
        )
    }
}