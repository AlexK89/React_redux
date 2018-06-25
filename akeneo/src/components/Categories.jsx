import React from 'react';

export class Categories extends React.Component {

    showCategoryItems(category = {}) {
        this.props.updateCategory(category);
    }

    render() {
        return (
            <ul className="categories">
                {
                    this.props.categories.items
                        ?
                        (this.props.categories.items).map((item, key) => {
                            return (
                                <li
                                    className={'categories__item'}
                                    key={key}
                                    onClick={() => this.showCategoryItems(item)}>
                                    {item.code}
                                </li>
                            )
                        })
                        : ''
                }
            </ul>
        )
    }
}