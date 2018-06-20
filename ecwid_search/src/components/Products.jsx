import React from 'react';
import {token} from '../token';

export class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCategory: {},
            products: []
        }
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        if (this.state.selectedCategory !== this.props.category) {
            const test = this.props.category;

            this.setState({
                selectedCategory: test
            });

            this.getItems(test);
        }
    }

    getItems(categoryName) {
        const url = `${token.url}products?category=${categoryName.id}&withSubcategories=true&${token.key}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
            .then(response => response.json())
            .then(json => {
                console.log(`Category id: ${categoryName.id} json: ${json.items}`);
                this.setState({
                    products: json.items
                })
            })
    }

    render() {
        return (
            <div className={"products"}>
                {
                    this.state.products.map((product, key) => {
                        console.log(product);
                        return (
                            <div key={key}>
                                <p><strong>Product name:</strong></p>
                                <p>{product.name}</p>
                                <p><strong>Description:</strong></p>
                                <div dangerouslySetInnerHTML={{ __html: product.description}} />
                                
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}