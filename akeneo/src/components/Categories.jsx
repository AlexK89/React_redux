import React from 'react';

export class Categories extends React.Component {

    showCategoryItems(category = {}) {
        console.log(category);
        this.props.updateCategory(category);
    }



    render() {
        const data = this.props.categories;

        return (
            <ul>
                {
                    Object.keys(data).length
                    ?
                        data.map((category, key) =>(
                                <li key={key}>
                                    <span onClick={() => {this.showCategoryItems(category)}}>{ category.code }</span>
                                    { category.children.length > 0 &&
                                    <Categories categories={category.children} />
                                    }
                                </li>
                            )
                        )
                    :
                        ""

                }
            </ul>
        )
    }
}