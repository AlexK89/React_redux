import React from 'react';

export class Products extends React.Component {

    render() {
        return (
            <div className={"products"}>
                {
                    this.props.products
                    ?
                        this.props.products.map((product, key) => {
                            const image = (product.values.HeroImage) ? product.values.HeroImage[0].data : '';
                            return (
                                <div key={key} className={"products__product"}>
                                    <p><strong>Product name:</strong></p>
                                    <p>{product.identifier}</p>
                                    <div className="products__product__image">
                                        {
                                            image
                                            ?
                                                <img src={image} alt={product.identifier}/>
                                            :
                                                ''
                                        }

                                    </div>
                                    <p>
                                        <strong>Price: </strong>
                                        {
                                            product.values.Price
                                            ?
                                                product.values.Price[0].data.map((price, key) => {
                                                    return (<span key={key}>{price.amount}{price.currency} </span>);
                                                })
                                            :
                                                ""
                                        }

                                    </p>
                                    <p><strong>Description:</strong></p>
                                    {
                                        product.values.Description
                                        ?
                                            <div dangerouslySetInnerHTML={{ __html: product.values.Description[0].data}} />
                                        :
                                            ""
                                    }


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