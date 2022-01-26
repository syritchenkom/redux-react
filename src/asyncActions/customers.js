import { addManyCustomersAction } from '../store/customerReducer';

export const fetchCustomers = () => {
	return function (dispatch) {
		fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
			.then((response) => response.json())
			.then((json) => dispatch(addManyCustomersAction(json)));
	};
};
