export const convertToTree = (categories) => {
    let map = {}, node, roots = [];

    for (let key in categories) {
        map[categories[key].code] = key; // initialize the map
        categories[key].children = []; // initialize the children
    }

    for (let key in categories) {
        node = categories[key];
        if (node.parent !== null) {
            // if you have dangling branches check that map[node.parent] exists
            categories[map[node.parent]].children.push(node);
        } else {
            roots.push(node);
        }
    }

    return roots;
};
