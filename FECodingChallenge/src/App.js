import React, {Component} from 'react';
import Sections from './components/Sections/Sections.js';
import QuestionList from './components/QuestionList/QuestionList';
import {convertToTree} from './convertToTree';
import styles from './App.css';

export default class App extends Component {
    state = {
        dataBase: [
            '../data/sections.json',
            '../data/4,5,6,7,8,11,12,15,16,17.json',
            '../data/44,45,46.json',
            '../data/states.json',
        ],
        questions: {
            questionsList: null,
        },
        sections: {
            sectionsList: null,
            selectedCategory: null,
            selectedCategoryChildrenId: [],
        },
        expanded: {
            expandedSet: null,
            expandedList: [],
        },
    };

    componentWillMount() {
        // Get all Data
        this.getDataHandler();
    }

    updateSelectedCategory(selectedCategory) {
        this.setState({
            sections: {
                ...this.state.sections,
                selectedCategory,
                selectedCategoryChildrenId: this.selectedCategoryChildrenId(selectedCategory),
            }
        });
    }

    // Get all data
    getDataHandler() {
        Promise.all(this.state.dataBase.map(url => fetch(url)))
            .then(responses =>
                Promise.all(responses.map(res => res.json()))
                    .then(fetchedData => {
                        // Sections
                        let sectionsList = convertToTree(fetchedData[0]);

                        // Questions lists
                        let questionsList = [];
                        questionsList.push(...fetchedData[1], ...fetchedData[2]);

                        this.setState({
                            sections: {
                                ...this.state.sections,
                                sectionsList
                            },
                            questions: {
                                ...this.state.questions,
                                questionsList
                            },
                            expanded: {
                                ...this.state.expanded,
                                expandedList: [...fetchedData[3]]
                            }
                        })
                    })
            );
    };

    // Get all children's id from selected category
    selectedCategoryChildrenId = (selectedCategory) => {
        let selectedCategoryChildrenId = [];
        let closure = (selectedCategory) => {
            selectedCategoryChildrenId.push(selectedCategory.id);
            if (selectedCategory.children.length) {
                for (let child of selectedCategory.children) {
                    closure(child);
                }
            }
        };
        closure(selectedCategory);

        return selectedCategoryChildrenId;
    };

    // change expanded state
    changeExpandedState = () => {
        let counter = this.state.expanded.expandedSet;
        if (this.state.expanded.expandedSet < this.state.expanded.expandedList.length) {
            counter++;
        } else {
            counter = 0;
        }

        this.setState({
            expanded: {
                ...this.state.expanded,
                expandedSet: counter
            }
        })
    };

    render() {
        return (
            <div>
                <h1>Quiz</h1>
                <button className={styles.change_state} onClick={this.changeExpandedState}>Change expanded Questions</button>

                <div className={styles.content}>
                    {
                        this.state.sections.sectionsList &&
                        <div className={styles.sections}>
                            <Sections
                                sections={this.state.sections.sectionsList}
                                updateCategory={this.updateSelectedCategory.bind(this)}/>
                        </div>
                    }
                    {
                        this.state.questions.questionsList &&
                        <div className={styles.question_list}>
                            <QuestionList questionsList={this.state.questions.questionsList}
                                          selectedCategoryChildrenId={this.state.sections.selectedCategoryChildrenId}
                                          expanded={this.state.expanded}/>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
