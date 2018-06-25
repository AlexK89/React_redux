import React from 'react';

export class KeywordSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            keyWord: ''
        }
    }

    searchByKeyword(event) {
        event.preventDefault();
        this.props.updateKeyword(this.state.keyWord);
        document.getElementById('keywordInput').value = '';
    }

    render() {
        return (
            <div className="keyword_search">
                <form onSubmit={(event) => this.searchByKeyword(event)}>
                    <input
                        id={"keywordInput"}
                        type="text"
                        onChange={(event) => {this.setState({keyWord: event.target.value})}}/>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}