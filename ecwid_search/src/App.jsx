import React from 'react';
import './App.css';
import {productQuery, categoriesQuery} from './components/Query.js';
import {RangeSlider} from './components/Slider.jsx';
import {KeywordSearch} from './components/KeywordSearch.jsx';
import {Categories} from './components/Categories.jsx';
import {Products} from './components/Products.jsx';

// Reset params for App object
const resetParams = {
    priceLimits: {
        min: 0,
        max: 0
    },
    selectedPriceLimits: {
        min: 0,
        max: 0
    },
    selectedCategory: null,
    products: null,
};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...resetParams,
            keyword: '',
            categories: {}
        }
    }

    getCategories() {
        categoriesQuery(this.state.priceLimits, this.state.keyword, this.state.selectedCategory)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    categories: json
                })
            })
    }

    getProducts(selectedCategory = this.state.selectedCategory, keyWord = this.state.keyword, priceLimits = this.state.selectedPriceLimits) {
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

    resetQuery() {
        this.setState({
            ...resetParams,
        });
        this.getProducts(null, null, null);
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
        this.getProducts(this.state.selectedCategory, this.state.keyword, priceLimits);
    }

    updateKeyword(keyword) {
        this.setState({
            ...resetParams,
            keyword
        });
        this.getProducts(null, keyword, null);
    }

    sortedPrices(priceArray = [0,0]) {
        priceArray = priceArray.sort((a, b) => (a - b));
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
                    <button onClick={() => this.resetQuery()}>Get Data</button>
                    <button onClick={this.previousPage}>Previous</button>
                    <button onClick={this.nextPage}>Next</button>
                </div>
                <KeywordSearch updateKeyword={this.updateKeyword.bind(this)}/>
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