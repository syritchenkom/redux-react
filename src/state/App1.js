import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

import './App.css';

export default function App() {
	const account = useSelector((state) => state.account);
	const dispatch = useDispatch();

	const { depositMoney, withdrawMoney } = bindActionCreators(
		actionCreators,
		dispatch
	);
	return (
		<div className="App">
			<h1>{account}</h1>
			<button onClick={() => depositMoney(10)}>Deposit</button>
			<button onClick={() => withdrawMoney(10)}>Withdraw</button>
		</div>
	);
}
