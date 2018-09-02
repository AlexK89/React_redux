import React, {Component} from 'react';
import Question from './QuestionItem/Question/Question';
import Answer from './QuestionItem/Answer/Answer';

class QuestionList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCategoriesQuestions: []
        }
    }

    componentDidMount() {
        this.filterQuestions();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedCategoryChildrenId[0] !== this.props.selectedCategoryChildrenId[0]) {
            this.filterQuestions();
        }
    }

    filterQuestions = () => {
        let selectedQuestions = [];

        if(this.props.selectedCategoryChildrenId.length) {
            this.props.selectedCategoryChildrenId.map((childId) => {
                let filteredById = this.props.questionsList.filter((item) => {
                    return item.sectionId === parseInt(childId);
                });

                selectedQuestions.push(...filteredById);
            });

            this.setState({
                selectedCategoriesQuestions: selectedQuestions
            });
        } else {
            this.setState({
                selectedCategoriesQuestions: [...this.props.questionsList]
            });

        }
    };

    render() {
        const expandedQuestionsSet = (this.props.expanded.expandedSet) ?
            this.props.expanded.expandedList[this.props.expanded.expandedSet - 1].expanded
        : [];
        const selectedCategoriesQuestions = (
            this.state.selectedCategoriesQuestions.map((question) => {
                return (
                    <div key={question.qa_id}>
                        <Question question={question.question} />
                        {
                            expandedQuestionsSet.map(item => {
                                if (question.tocId === item) {
                                    return <Answer key={question.tocId} answer={question.answer}/>
                                }
                            })
                        }
                    </div>
                );
            })
        );

        return (
            <div>
                {selectedCategoriesQuestions}
            </div>
        );
    }
}

export default QuestionList;