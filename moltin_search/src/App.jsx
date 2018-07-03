import React from 'react';
import {gateway as MoltinGateway} from '@moltin/sdk'
import './App.css';

const Moltin = MoltinGateway({
    client_id: 'nkwIbpJD7aegsLyRdnw7ny7Mo1BuvpDIFto08ZOSTd'
});

Moltin.Authenticate();

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            pagination: 2,
            pageNumber: 0
        }
    }

    componentDidMount() {
        console.log('hello');
        this.pagination(0);

    }

    fetchData = () => {
        Moltin.Products.Limit().Offset().All()
            .then(products => {
                console.log('Products: ', products);
                this.setState({
                    data: products.data,
                    pagination: 2,
                    pageNumber: -2,
                });
            });
    };

    pagination = (step) => {
        const pageNumber = this.state.pageNumber + step;

        Moltin.Products.Limit(this.state.pagination).Offset(pageNumber)
            .All()
            .then(products => {
                if ((products.data).length && pageNumber >= 0) {
                    console.log(products.data);
                    console.log(pageNumber);
                    this.setState({
                        data: products.data,
                        pageNumber
                    });
                }
            })
    };

    nextPage = () => {
        this.pagination(2);
    };

    previousPage = () => {
        this.pagination(-2);
    };

    render() {
        let data = this.state.data;

        return (
            <div>
                <div className="buttons">
                    <button onClick={this.fetchData}>Get Data</button>
                    <button onClick={this.previousPage}>Previous</button>
                    <button onClick={this.nextPage}>Next</button>
                </div>
                <div className="items">
                    {
                        data
                            ?
                            data.map((item, key) => {
                                return (
                                    <div className={'item'} key={key}>
                                        <p>Name: {item.name}</p>
                                        <p>Description: {item.description}</p>
                                        <p>SKU: {item.sku}</p>
                                    </div>
                                )
                            })
                            :
                            ''
                    }
                </div>
            </div>
        )
    }
}

export default App;
