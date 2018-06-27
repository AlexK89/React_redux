import React from 'react';
import './App.css';
import {productQuery, categoriesQuery} from './components/Query.js';
import {convertToTree} from './components/convertToTree.js';
import {RangeSlider} from './components/Slider.jsx';
import {KeywordSearch} from './components/KeywordSearch.jsx';
import {SortBy} from './components/SortBy.jsx';
import {Categories} from './components/Categories.jsx';
import {Products} from './components/Products.jsx';

// Reset params for App object
const resetParams = {
    priceLimits: {
        min: 0,
        max: 3000,
        currency: "GBP"
    },
    selectedPriceLimits: {
        min: 0,
        max: 3000,
        currency: "GBP"
    },
    selectedCategory: null,
    selectedFamily: null,
    products: null,
    pageNumber: 1,
    productsPerPage: 2,
    productsAmount: 0,
    sortBy: 'RELEVANCE'
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
        categoriesQuery()
            .then(response => response.json())
            .then(json => {
                let categoriesTree = convertToTree(json._embedded.items);
                this.setState({
                    categories: categoriesTree
                })
            })
    }

    getProducts(selectedCategory = this.state.selectedCategory,
                keyWord = this.state.keyword,
                selectedPriceLimits = this.state.selectedPriceLimits,
                offset = this.state.pageNumber,
                productsPerPage = this.state.productsPerPage,
                sortBy = this.state.sortBy) {
        productQuery(selectedCategory, keyWord, selectedPriceLimits, offset, productsPerPage, sortBy)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    products: json._embedded,
                    productsAmount: json.length
                });
                // this.extractPrices();
            });
    }
    //
    // // Extracting prices
    // sortedPrices(priceArray = [0,0]) {
    //     priceArray = priceArray.sort((a, b) => (a - b));
    //     return {
    //         min: priceArray.shift(),
    //         max: priceArray.pop()
    //     };
    // }
    //
    // extractPrices() {
    //     if (this.state.products) {
    //         let prices = this.state.products.items.map(item => item.price);
    //         let extrems = this.sortedPrices(prices);
    //
    //         // if(!this.state.priceLimits.max) {
    //         //     this.setState({
    //         //         priceLimits: extrems
    //         //     });
    //         // }
    //
    //         if (!this.state.selectedPriceLimits.min) {
    //             this.setState({
    //                 selectedPriceLimits: {
    //                     min: extrems.min
    //                 }
    //             });
    //         }
    //
    //         if (!this.state.selectedPriceLimits.max) {
    //             this.setState({
    //                 selectedPriceLimits: {
    //                     max: extrems.max
    //                 }
    //             });
    //         }
    //     }
    // }
    //
    //Reset query
    resetQuery() {
        this.setState({
            ...resetParams,
            keyword: ''
        }, () => {
            this.getProducts();
        });
    }

    updateSelectedCategory(selectedCategory) {
        this.setState({
            selectedCategory,
            offset: 0,
        }, () => {
            this.getProducts();
        });
    }

    updatePriceRange(priceLimits) {
        this.setState({
            selectedPriceLimits: priceLimits,
            offset: 0,
        }, () => {
            this.getProducts();
        });
    }

    updateKeyword(keyword) {
        this.setState({
            ...resetParams,
            offset: 0,
            keyword
        }, () => {
            this.getProducts();
        });
    }

    updateSortBy(option) {
        this.setState({
            sortBy: option
        }, () => {
            console.log(option);
            this.getProducts();
        });
    }

    componentDidMount() {
        this.getCategories();
        this.getProducts();
    }

    // Navigation
    previousPage() {
        if ((this.state.pageNumber - 1) > 0) {
            this.setState({
                pageNumber: this.state.pageNumber - 1
            }, () => {
                this.getProducts();
            });
        }
    }

    nextPage() {
        if (Object.keys(this.state.products.items).length) {
            this.setState({
                pageNumber: this.state.pageNumber + 1
            }, () => {
                this.getProducts();
            });
        }
    }

    render() {
        // console.log(this.state.products);
        return (
            <div>
                <div className="buttons">
                    <button onClick={() => this.resetQuery()}>Get Data</button>
                    <button onClick={() => this.previousPage()}>Previous</button>
                    <button onClick={() => this.nextPage()}>Next</button>
                </div>
                <KeywordSearch updateKeyword={this.updateKeyword.bind(this)}/>
                <div className="slider">
                    <RangeSlider limits={this.state.priceLimits}
                                 selectedPriceRange={this.state.selectedPriceLimits}
                                 updatePriceRange={this.updatePriceRange.bind(this)}/>
                    <SortBy sortBy={this.updateSortBy.bind(this)}/>
                </div>
                {
                    (this.state.keyword) && (
                        <p>Search phrase: {this.state.keyword}</p>
                    )
                }
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