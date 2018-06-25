import React from 'react';

export class SortBy extends React.Component {

    sortBy(option) {
        this.props.sortBy(option);
    }

    render() {
        return (
            <div className="sort_by">
                <select
                    onChange={(event) => this.sortBy(event.target.value)}
                    name="sortby"
                    id="sortBy">
                    <option value="RELEVANCE">Best match</option>
                    <option value="ADDED_TIME_DESC">Date(desc)</option>
                    <option value="ADDED_TIME_ASC">Date(asc)</option>
                    <option value="PRICE_DESC">Price(desc)</option>
                    <option value="PRICE_ASC">Price(asc)</option>
                </select>
            </div>
        )
    }
}