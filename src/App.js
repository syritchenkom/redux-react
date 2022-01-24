import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

export default function App() {
	const dispatch = useDispatch();
	const cash = useSelector((state) => state.cash.cash);
	console.log(cash);

	const addCash = (cash) => {
		dispatch({ type: 'ADD_CASH', payload: cash });
	};

	const getCash = (cash) => {
		dispatch({ type: 'GET_CASH', payload: cash });
	};
	return (
		<div className={'app'}>
			<div style={{ fontSize: '5rem' }}>{cash}</div>
			<div style={{ display: 'flex' }}>
				<button onClick={() => addCash(Number(prompt()))}>
					Поповнити рахунок
				</button>
				<button onClick={() => getCash(Number(prompt()))}>
					Зняти з рахунока
				</button>
			</div>
		</div>
	);
}
