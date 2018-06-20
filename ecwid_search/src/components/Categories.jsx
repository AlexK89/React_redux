import React from 'react';
import {token} from '../token';

export class Categories extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: {},
        }
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories() {
        const url = `${token.url}categories?${token.key}`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    categories: json
                })
            })
    }

    // Pass selected category to parent
    showCategoryItems(category = {}) {
        this.props.updateCategory(category);
    }

    render() {
        return (
            <ul className="categories">
                {
                    this.state.categories.items
                        ?
                        (this.state.categories.items).map((item, key) => {
                            return (
                                <li
                                    className={'categories__item'}
                                    key={key}
                                    onClick={() => this.showCategoryItems(item)}>
                                    {item.name}
                                </li>
                            )
                        })
                        : ''
                }
            </ul>
        )
    }
}