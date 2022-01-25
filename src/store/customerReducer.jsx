export const customerReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_CUSTOMER':
			return { ...state, customers: [...state.customers, action.payload] };
		case 'REMO_CUSTOMER':
			return { ...state, cash: state.cash - action.payload };
		default:
			return state;
	}
};
