import React from 'react';

const asyncComponent = (importComponent) => {
    return class extends React.Component {
        state = {
            component: null
        };

        componentDidMount() {
            importComponent()
                .then(comp => {
                    this.setState({component: comp.default});
                })
        }

        render() {
            const ComponentForRendering = this.state.component;

            return ComponentForRendering ? <ComponentForRendering {...this.props} /> : null;
        }
    }
};

export default asyncComponent;