import React from 'react';
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter} from '../redux/actions/counterActions';

const App = (props) => {
  const { counter, incrementCounter, decrementCounter } = props

  return (
    <>
      <button onClick={incrementCounter}>inc</button>
      <button onClick={decrementCounter}>dec</button>
      <h1>{counter}</h1>
    </>
  )
}

const mapStateToProps = state => ({
  counter: state.counter.value
})

const mapDispatchToProps = {
  decrementCounter,
  incrementCounter
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

