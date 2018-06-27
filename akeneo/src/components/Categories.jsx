import React from 'react';

export class Categories extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            category: null,
            structure: null
        }
    }

    showCategoryItems(category = {}) {
        console.log(category);
        this.props.updateCategory(category);
    }

    test(categories) {
        return (
            <ul>
                {
                    Object.keys(categories).length
                    ?
                        categories.map((category, key) =>(
                            <li key={key}>
                                <span onClick={() => {this.showCategoryItems(category)}}>
                                    { category.code }
                                </span>
                                { category.children.length > 0 && this.test(category.children) }
                            </li>
                        ))
                    :
                        ""
                }
            </ul>
        )
    }

    render() {
        const data = this.props.categories;

        return ((Object.keys(data).length) ? this.test(data) : <div></div>)
    }
}