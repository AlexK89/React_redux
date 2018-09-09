import React, {Component} from 'react';
import Header from './components/Header/Header';
import FormPage from './components/FormPage/FormPage';
import './App.css';

class App extends Component {
    state = {
      formPageText: {
          title: 'One last step',
          description: 'To save your quote and process your policy, we’ll need you to confirm your details',
          ErnNotice: 'We\'re either exempt from having an ERN or we can provide it within 30 days.'
      },

    };
    render() {
        return (
            <div className="App">
                <Header/>
                <FormPage formPageText={this.state.formPageText}/>
            </div>
        );
    }
}

export default App;
