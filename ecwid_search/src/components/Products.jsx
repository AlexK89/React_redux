import React from 'react';

export class Products extends React.Component {

    render() {
        return (
            <div className={"products"}>
                {
                    this.props.products
                    ?
                        this.props.products.map((product, key) => {
                            const image = (product.galleryImages[0]) ? product.galleryImages[0].url : '';
                            return (
                                <div key={key} className={"products__product"}>
                                    <p><strong>Product name:</strong></p>
                                    <p>{product.name}</p>
                                    <div className="products__product__image">
                                        {
                                            image
                                            ?
                                                <img src={image} alt={product.name}/>
                                            :
                                                ''
                                        }

                                    </div>
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