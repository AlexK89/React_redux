import {token} from '../token';

export const productQuery = (selectedCategory, keyWord, priceLimits) => {
    const selectedCategorySlug = (selectedCategory) ? (`&category=${selectedCategory.id}&withSubcategories=true&`) : '';
    const keyWordSlug = (keyWord) ? (`keyword=${keyWord}&`) : '';
    const priceLimitsSlug = (priceLimits.min && priceLimits.max) ? (`priceFrom=${priceLimits.min}&priceTo=${priceLimits.max}&`) : '';
    const url = `${token.url}products?${keyWordSlug}${priceLimitsSlug}${selectedCategorySlug}${token.key}`;

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