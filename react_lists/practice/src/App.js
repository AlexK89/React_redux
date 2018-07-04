import React, {Component} from 'react';
import Validation from './components/ValidationInput/Validation.jsx';
import './App.scss';

class App extends Component {
    state = {
        inputText: '',
        inputTextLength: 0
    }

    changeInput = (inputText) => {
        this.setState({
            inputText,
            inputTextLength: inputText.length
        });
    }

    render() {
        return (
            <div className="App">
                <div className="input_group">
                    <label htmlFor="input_text">Enter text</label>
                    <input
                        onChange={(event) => {this.changeInput(event.target.value)}}
                        type="text"
                        id="input_text"
                    />
                </div>
                <Validation
                    inputTextLength={this.state.inputTextLength}/>
            </div>
        );
    }
}

export default App;
