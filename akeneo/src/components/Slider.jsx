import 'rc-slider/assets/index.css';
import React from 'react';
import Slider from 'rc-slider';

export class RangeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRange: {
                min: 0,
                max: 0
            }
        }
    }

    handleChange = (priceLimits) => {
        const limits = {
            min: priceLimits[0],
            max: priceLimits[1],
        };
        this.props.updatePriceRange(limits);
    };

    render() {
        const createSliderWithTooltip = Slider.createSliderWithTooltip;
        const Range = createSliderWithTooltip(Slider.Range);
        const minLimit = (this.props.limits.min !== undefined) ? this.props.limits.min : 0;
        const maxLimit = (this.props.limits.max !== undefined) ? this.props.limits.max : 0;
        const minSelectedLimit = (this.props.selectedPriceRange.min !== undefined) ? this.props.selectedPriceRange.min : 0;
        const maxSelectedLimit = (this.props.selectedPriceRange.max !== undefined) ? this.props.selectedPriceRange.max : 0;

        return (
            <div>
                <p>Range with custom handle</p>
                <Range min={minLimit}
                       max={maxLimit}
                       defaultValue={[minSelectedLimit, maxSelectedLimit]}
                       tipFormatter={value => `£${value}`}
                       onAfterChange={this.handleChange}/>
            </div>
        )
    }
}