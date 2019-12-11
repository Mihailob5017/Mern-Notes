import {
	GET_USERS,
	SET_LOADING,
	UNSET_LOADING,
	FILTER_NOTES,
	SET_FILTER,
	UNSET_FILTER
} from './Type';
export default (state, action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				notes: action.payload
			};
		case SET_LOADING:
			return { ...state, loading: true };

		case UNSET_LOADING:
			return { ...state, loading: false };
		case FILTER_NOTES:
			return { ...state, filteredNotes: action.payload };
		case SET_FILTER:
			return { ...state, filter: true };
		case UNSET_FILTER:
			return { ...state, filter: false };

		default:
			return state;
	}
};
