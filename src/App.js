import './App.css';
import Counter from './Counter.js'
import { connect } from 'react-redux'


const mapStateToProps = state => {
  return {
    value: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => {
      console.log(`SIma going to increment`);
      dispatch({type: "INCREMENT"});
    },
    onDecrement: () => {
      console.log(`I am going to decremnt`);
      dispatch({type: "DECREMENT"});
    },
    onIncrementAsync: () => {
      console.log(`I am going to incrementAsync`);
      dispatch({type: "INCREMENT_ASYNC"});
    }
  }
}


const App = connect(
  mapStateToProps,
  mapDispatchToProps
  )(Counter)

export default App;
