export const convertToTree = (categories) => {
    let map = {}, node, roots = [];

    for (let key in categories) {
        // Convert Ids and Parent ids to string
        categories[key].id = categories[key].id.toString();
        categories[key].parentId = categories[key].parentId.toString();

        map[categories[key].id] = key; // initialize the map
        categories[key].children = []; // initialize the children
    }

    for (let key in categories) {
        node = categories[key];
        if (node.parentId !== null && categories[map[node.parentId]]) {
            categories[map[node.parentId]].children.push(node);
        } else {
            roots.push(node);
        }
    }

    return roots;
};
