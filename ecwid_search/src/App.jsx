import React from 'react';
import './App.css';
import { Categories } from './components/Categories.jsx';
import { Products } from './components/Products.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            pagination: 2,
            pageNumber: 0,
            selectedCategory: {
                name: ''
            },
        }
    }

    updateSelectedCategory(selectedCategory) {
        this.setState({
            selectedCategory
        })
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }
    fetchData = () => {

    };

    pagination = (step) => {

    };

    nextPage = () => {

    };

    previousPage = () => {

    };

    render() {
        return (
            <div>
                <div className="buttons">
                    <button onClick={this.fetchData}>Get Data</button>
                    <button onClick={this.previousPage}>Previous</button>
                    <button onClick={this.nextPage}>Next</button>
                </div>
                <div className="content">
                    <Categories updateCategory = {this.updateSelectedCategory.bind(this)}/>
                    {
                        (this.state.selectedCategory)
                        ?
                            <Products category={this.state.selectedCategory}/>
                        :
                            ''
                    }
                </div>
            </div>
        )
    }
}

export default App;