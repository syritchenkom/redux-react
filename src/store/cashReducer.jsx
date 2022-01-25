export const cashReducer = (state = 0, action) => {
	switch (action.type) {
		case 'ADD_CASH':
			return state + action.payload;
		case 'GET_CASH':
			return state - action.payload;
		default:
			return state;
	}
};
