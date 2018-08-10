import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.addCounter(5)}  />
                <CounterControl label="Add 10" clicked={() => this.props.addCounter(10)}  />
                <CounterControl label="Subtract 10" clicked={() => this.props.subtractCounter(10)}  />
            </div>
        );
    }
}

// Make global state available in props
const mapStateToProps = state => {
  return {
      ...state
  }
};

// Send changed values to global state
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INC_COUNTER'}),
        onDecrementCounter: () => dispatch({type: 'DEC_COUNTER'}),
        addCounter: (value) => dispatch({type: 'ADD_COUNTER', value: value}),
        subtractCounter: (value) => dispatch({type: 'SUBTRACT_COUNTER', value: value}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);