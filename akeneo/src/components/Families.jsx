import React from 'react';

export class Families extends React.Component {

    showFamilyItems(family = {}) {
        this.props.updateFamily(family);
    }

    render() {
        return (
            <ul className="categories">
                {
                    this.props.families.items
                        ?
                        (this.props.families.items).map((item, key) => {
                            return (
                                <li
                                    className={'categories__item'}
                                    key={key}
                                    onClick={() => this.showFamilyItems(item)}>
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