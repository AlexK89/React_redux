import React, {Component} from 'react';

class Course extends Component {
    state = {
        title: ''
    };

    componentDidMount() {
        this.parseQuery();
    }

    componentDidUpdate() {
        this.parseQuery();
    }

    parseQuery = () => {
        // Default JS method for getting query from URL
        let query = new URLSearchParams(this.props.location.search);

        for (let item of query.entries()) {
            if (this.state.title !== item[1]) {
                this.setState({title: item[1]});
            }
        }
    };

    // shouldComponentUpdate(nextProps) {
    //     return nextProps.match.params.id !== this.props.match.params.id
    // }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;