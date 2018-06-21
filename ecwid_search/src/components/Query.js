import {token} from '../token';

export const productQuery = (priceLimits, keyWord, selectedCategory) => {
    const priceLimitsSlug = (priceLimits.min && priceLimits.max) ? (`&priceFrom=${priceLimits.min}&priceTo=${priceLimits.max}`) : '';
    const keyWordSlug = (keyWord) ? (`keyword=${keyWord}`) : '';
    const selectedCategorySlug = (selectedCategory) ? (`&category=${selectedCategory}`) : '';
    const url = `${token.url}products?${keyWordSlug}${priceLimitsSlug}${selectedCategorySlug}&withSubcategories=true&${token.key}`;

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