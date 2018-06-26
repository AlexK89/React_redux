export const productQuery = (selectedCategory, selectedFamily, keyWord, selectedPriceLimits, offset, productsPerPage, sortBy) => {
    const selectedCategorySlug = (selectedCategory) ? (`"categories":[{"operator":"IN","value":["${selectedCategory.code}"]}]`) : '';
    const selectedFamilySlug = (selectedFamily) ? (`"family":[{"operator":"IN","value":["${selectedFamily.code}"]}],`) : '';
    const offsetSlug = `offset=${offset}&`;
    const productsPerPageSlug = `limit=${productsPerPage}&`;
    const keyWordSlug = (keyWord) ? (`keyword=${keyWord}&`) : '';
    const priceLimitsSlug = (selectedPriceLimits && selectedPriceLimits.max) ? (`priceFrom=${selectedPriceLimits.min}&priceTo=${selectedPriceLimits.max}&`) : '';
    const sortBySlug = `sortBy=${sortBy}&`;
    const url = `http://localhost:3000/products?search={${selectedCategorySlug}${selectedFamilySlug}}`;
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