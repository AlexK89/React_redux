import React from 'react';

export class Products extends React.Component {
    render() {
        return (
            <div className={"products"}>
                {
                    this.props.products
                    ?
                        this.props.products.map((product, key) => {
                            return (
                                <div key={key} className={"products__product"}>
                                    <p><strong>Product name:</strong></p>
                                    <p>{product.name}</p>
                                    <p><strong>Price:</strong> {product.defaultDisplayedPriceFormatted}</p>
                                    <p><strong>Description:</strong></p>
                                    <div dangerouslySetInnerHTML={{ __html: product.description}} />

                                </div>
                            )
                        })
                    :
                        ''
                }
            </div>
        )
    }
}