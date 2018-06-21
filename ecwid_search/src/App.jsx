import React from 'react';
import './App.css';
import {productQuery, categoriesQuery} from './components/Query.js';
import {Categories} from './components/Categories.jsx';
import {Products} from './components/Products.jsx';
import {RangeSlider} from './components/Slider.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            priceLimits: {
                min: 0,
                max: 0
            },
            selectedPriceLimits: {
                min: 0,
                max: 0
            },
            keyWord: '',
            selectedCategory: null,
            products: null,
            categories: {}
        }
    }

    getCategories() {
        categoriesQuery(this.state.priceLimits, this.state.keyWord, this.state.selectedCategory)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    categories: json
                })
            })
    }

    getProducts(selectedCategory = this.state.selectedCategory, keyWord = this.state.keyWord, priceLimits = this.state.selectedPriceLimits) {
        productQuery(selectedCategory, keyWord, priceLimits)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    products: json
                });
                this.extractPrices();
            });
    }

    extractPrices() {
        if (this.state.products) {
            let prices = this.state.products.items.map(item => item.price);
            let extrems = this.sortedPrices(prices);

            if(!this.state.priceLimits.max) {
                this.setState({
                    priceLimits: extrems
                });
            }


            if (!this.state.selectedPriceLimits.min) {
                this.setState({
                    selectedPriceLimits: {
                        min: extrems.min
                    }
                });
            }

            if (!this.state.selectedPriceLimits.max) {
                this.setState({
                    selectedPriceLimits: {
                        max: extrems.max
                    }
                });
            }
        }
    }

    updateSelectedCategory(selectedCategory) {
        this.setState({
            selectedCategory
        });
        this.getProducts(selectedCategory);
    }

    updatePriceRange(priceLimits) {
        this.setState({
            selectedPriceLimits: priceLimits
        });

        this.getProducts(this.state.selectedCategory, this.state.keyWord, priceLimits);
    }

    sortedPrices(priceArray = [4, 5, 2, 8, 123, 35, 37, 5653, 2, 44]) {
        priceArray = priceArray.sort((a, b) => {
            return a - b
        });
        return {
            min: priceArray.shift(),
            max: priceArray.pop()
        };
    }

    componentDidMount() {
        this.getCategories();
        this.getProducts();
    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div>
                <div className="buttons">
                    <button onClick={this.fetchData}>Get Data</button>
                    <button onClick={this.previousPage}>Previous</button>
                    <button onClick={this.nextPage}>Next</button>
                </div>
                <div className="slider">
                    <RangeSlider limits={this.state.priceLimits}
                                 selectedPriceRange={this.state.selectedPriceLimits}
                                 updatePriceRange={this.updatePriceRange.bind(this)}/>
                </div>
                <div className="content">
                    <Categories
                        categories={this.state.categories}
                        updateCategory={this.updateSelectedCategory.bind(this)}/>
                    {
                        (this.state.products)
                            ?

                            <Products
                                products={this.state.products.items}
                            />
                            :
                            ''
                    }
                </div>
            </div>
        )
    }
}

export default App;