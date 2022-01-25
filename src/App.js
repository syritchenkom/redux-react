import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

export default function App() {
	const dispatch = useDispatch();
	const cash = useSelector((state) => state.cash);
	const customers = useSelector((state) => state.customers);

	const addCash = (cash) => {
		dispatch({ type: 'ADD_CASH', payload: cash });
	};

	const getCash = (cash) => {
		dispatch({ type: 'GET_CASH', payload: cash });
	};

	const addCustomer = (name) => {
		const customer = {
			name,
			id: Date.now()
		};
		dispatch({ type: 'ADD_CUSTOMER', payload: customer });
	};
	return (
		<div className={'app'}>
			<div style={{ fontSize: '3rem', marginBottom: 10 }}>Баланс: {cash}</div>
			<div style={{ display: 'flex' }}>
				<button onClick={() => addCash(Number(prompt()))}>Add money</button>
				<button onClick={() => getCash(Number(prompt()))}>Get money</button>
				<button onClick={() => addCustomer(prompt())}>Add customers</button>
				<button onClick={() => getCash(Number(prompt()))}>Customer off</button>
			</div>
			<div>
				{customers.length > 0 ? (
					<div>
						{customers.map((customers) => (
							<div>{customers.name}</div>
						))}
					</div>
				) : (
					<div style={{ fontSize: '2rem', marginTop: 20 }}>No Customers!!</div>
				)}
			</div>
		</div>
	);
}
