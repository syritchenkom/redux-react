import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { actionCreators } from './state/index';

import './App.css';
import { fetchCustomers } from './asyncActions/customers';
import {
	addCustomerAction,
	removeCustomerAction
} from './store/customerReducer';

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
		dispatch(addCustomerAction(customer));
	};

	const removeCustomer = (customer) => {
		dispatch(removeCustomerAction(customer.id));
	};
	return (
		<div className="App">
			<div style={{ fontSize: '3rem', marginBottom: 10 }}>Total: {cash}</div>
			<div style={{ display: 'flex' }}>
				<button onClick={() => addCash(Number(prompt()))}>Add money</button>
				<button onClick={() => getCash(Number(prompt()))}>Get money</button>
				<button onClick={() => addCustomer(prompt())}>Add customer</button>
				<button onClick={() => dispatch(fetchCustomers())}>
					Get Data customer
				</button>
			</div>
			{customers.length > 0 ? (
				<div>
					{customers.map((customer) => (
						<div
							onClick={() => removeCustomer(customer)}
							style={{
								fontSize: '2rem',
								border: '1px solid black',
								padding: '10px',
								marginTop: '5px',
								width: '12rem',
								textAlign: 'center'
							}}>
							{customer.name}
						</div>
					))}
				</div>
			) : (
				<div style={{ fontSize: '2rem', marginTop: 20 }}>No Customers!!</div>
			)}
		</div>
	);
}
