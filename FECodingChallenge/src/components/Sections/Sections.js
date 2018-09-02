import React, {Component} from 'react';
import styles from './Sections.css';
// const styles = {
//     lists: {
//         paddingLeft: '15px',
//         cursor: 'pointer'
//     }
// };

export const section = (props) => {
    const sectionsList = props.sections;

    const showCategoryItems = (category = {}) => {
        props.updateCategory(category);
    };

    const renderSectionsList = (categories) => {
        return (
            <ul className={styles.list}>
                {
                    Object.keys(categories).length &&
                        categories.map((category, key) => (
                            <li key={key}>
                                {
                                    category.parentId &&
                                    <p className={styles.list_item} onClick={() => {
                                        showCategoryItems(category)
                                    }}>
                                        ID: {category.id}, {category.title}
                                    </p>
                                }
                                {category.children.length > 0 && renderSectionsList(category.children)}
                            </li>
                        ))
                }
            </ul>
        )
    };

    return (Object.keys(sectionsList).length) ? renderSectionsList(sectionsList) : <h2>No categories</h2>;
};

export default section;