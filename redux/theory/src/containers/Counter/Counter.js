import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        let results = (
            <ul>
                {this.props.globalResult.results.map((item) => <li key={item.id} onClick={() => this.props.deleteResult(item.id)}>{item.value}</li>)}
            </ul>
        );

        return (
            <div>
                <CounterOutput value={this.props.globalCounter.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.addCounter(5)}  />
                <CounterControl label="Add 10" clicked={() => this.props.addCounter(10)}  />
                <CounterControl label="Subtract 10" clicked={() => this.props.subtractCounter(10)}  />
                <hr/>
                <button onClick={() => this.props.storeResult(this.props.globalCounter.counter)}>Store result</button>
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
        onIncrementCounter: () => dispatch(actionCreators.incCounter()),
        onDecrementCounter: () => dispatch(actionCreators.decCounter()),
        addCounter: (value) => dispatch(actionCreators.addCounter(value)),
        subtractCounter: (value) => dispatch(actionCreators.substrartCounter(value)),
        storeResult: (value) => {dispatch(actionCreators.storeResult(value))},
        deleteResult: (id) => {dispatch(actionCreators.deleteResult(id))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);