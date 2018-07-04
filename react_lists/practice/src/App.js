import React, {Component} from 'react';
import Validation from './components/ValidationInput/Validation.jsx';
import CharComponent from './components/CharComponent/CharComponent.jsx';
import './App.scss';

class App extends Component {
    state = {
        inputText: '',
        inputTextLength: 0,
        letters: []
    }

    changeInput = (inputText) => {
        const letters = [];
        for(let char of inputText) {
            letters.push(char);
        }
        this.setState({
            inputText,
            inputTextLength: inputText.length,
            letters
        });
    }

    removeChar = (index) => {
        let letters = this.state.inputText.split('');
        letters.splice(index, 1);

        let inputText = letters.join('');

        this.setState({
            inputText,
            letters
        })

    }

    render() {
        console.log(this.state.inputText);
        return (
            <div className="App">
                <div className="input_group">
                    <label htmlFor="input_text">Enter text</label>
                    <input
                        onChange={(event) => {this.changeInput(event.target.value)}}
                        type="text"
                        id="input_text"
                        value={this.state.inputText}
                    />
                </div>
                <Validation
                    inputTextLength={this.state.inputTextLength}/>
                <CharComponent
                    removeChar = {this.removeChar}
                    letters={this.state.letters}/>
            </div>
        );
    }
}

export default App;
