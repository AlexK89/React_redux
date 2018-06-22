import {token} from '../token';

export const productQuery = (selectedCategory, keyWord, selectedPriceLimits, offset, productsPerPage) => {
    const offsetSlug = `offset=${offset}&`;
    const productsPerPageSlug = `limit=${productsPerPage}&`;
    const keyWordSlug = (keyWord) ? (`keyword=${keyWord}&`) : '';
    const selectedCategorySlug = (selectedCategory) ? (`&category=${selectedCategory.id}&withSubcategories=true&`) : '';
    const priceLimitsSlug = (selectedPriceLimits && selectedPriceLimits.max) ? (`priceFrom=${selectedPriceLimits.min}&priceTo=${selectedPriceLimits.max}&`) : '';
    const url = `${token.url}products?${offsetSlug}${productsPerPageSlug}${keyWordSlug}${priceLimitsSlug}${selectedCategorySlug}${token.key}`;
    console.log(url);
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
};

export const categoriesQuery = () => {
    const url = `${token.url}categories?${token.key}`;

    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
};