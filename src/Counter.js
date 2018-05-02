import React from 'react'

const Counter = ({value, onIncrement, onDecrement, onIncrementAsync}) => {
	return (
		<div>
			<div onClick={onIncrement} >+</div>
			<div onClick={onDecrement} >-</div>
			<div onClick={onIncrementAsync}>?</div>
			<div>Counter is {value}</div>
		</div>
	)
}

export default Counter