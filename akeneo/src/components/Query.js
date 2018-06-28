export const productQuery = (selectedCategory, keyWord, selectedPriceLimits, pageNumber, productsPerPage, sortBy) => {
    // console.log(productsPerPage);
    const selectedCategorySlug = (selectedCategory) && (`"categories":[{"operator":"IN","value":["${selectedCategory.code}"]}]`);
    const keyWordSlug = (keyWord) && (`"identifier":[{"operator": "CONTAINS","value":"${keyWord}"}]`);
    const priceLimitsSlug = (selectedPriceLimits && selectedPriceLimits.max) && (`"Price": [{"operator": ">=", "value": {"amount": "${selectedPriceLimits.min}", "currency": "${selectedPriceLimits.currency}"}},{"operator": "<=","value": {"amount": "${selectedPriceLimits.max}","currency": "${selectedPriceLimits.currency}"}}]`);
    const pageNumberSlug = pageNumber ? `&page=${pageNumber}` : '';
    const productsPerPageSlug = productsPerPage ? `&limit=${productsPerPage}` : '';
    const sortBySlug = `sortBy=${sortBy}&`;
    const params = () => {
        let param = [selectedCategorySlug, keyWordSlug, priceLimitsSlug];

        return param.filter(item => item).join(',')
    };


    const url = `http://localhost:3000/products?search={${params()}}${pageNumberSlug}${productsPerPageSlug}`;
    console.log(url);
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
};

export const categoriesQuery = () => {
    const url = "http://localhost:3000/categories";

    return fetch(url, {
        method: 'GET',
    })
};

export const familiesQuery = () => {
    const url = "http://localhost:3000/families";

    return fetch(url, {
        method: 'GET',
    })
};