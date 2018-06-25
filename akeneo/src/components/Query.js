export const productQuery = (selectedCategory, keyWord, selectedPriceLimits, offset, productsPerPage, sortBy) => {
    const selectedCategorySlug = (selectedCategory) ? (`"categories":[{"operator":"IN","value":["${selectedCategory.code}"]}]`) : '';
    const offsetSlug = `offset=${offset}&`;
    const productsPerPageSlug = `limit=${productsPerPage}&`;
    const keyWordSlug = (keyWord) ? (`keyword=${keyWord}&`) : '';
    const priceLimitsSlug = (selectedPriceLimits && selectedPriceLimits.max) ? (`priceFrom=${selectedPriceLimits.min}&priceTo=${selectedPriceLimits.max}&`) : '';
    const sortBySlug = `sortBy=${sortBy}&`;
    const url = `http://localhost:3000/products?search={${selectedCategorySlug}}`;
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