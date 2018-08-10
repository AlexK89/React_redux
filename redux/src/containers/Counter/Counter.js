import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        let results = (
            <ul>
                {this.props.results.map((item) => <li key={item.id} onClick={() => this.props.deleteResult(item.id)}>{item.value}</li>)}
            </ul>
        );

        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.addCounter(5)}  />
                <CounterControl label="Add 10" clicked={() => this.props.addCounter(10)}  />
                <CounterControl label="Subtract 10" clicked={() => this.props.subtractCounter(10)}  />
                <hr/>
                <button onClick={this.props.storeResult}>Store result</button>
                {results}
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
        onIncrementCounter: () => dispatch({type: actions.INC_COUNTER}),
        onDecrementCounter: () => dispatch({type: actions.DEC_COUNTER}),
        addCounter: (value) => dispatch({type: actions.ADD_COUNTER, value: value}),
        subtractCounter: (value) => dispatch({type: actions.SUBTRACT_COUNTER, value: value}),
        storeResult: () => {dispatch({type: actions.STORE_RESULT})},
        deleteResult: (id) => {dispatch({type: actions.DELETE_RESULT, id: id})}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);