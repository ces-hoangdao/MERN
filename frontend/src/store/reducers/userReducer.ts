export const userReducer = (state: string, action: string) => {
	switch (action) {
		case 'LOGIN':
			return 'LOGIN';
		default:
			return state;
	}
};
