import React, { useReducer } from 'react';
import Reducer from './Reducer';
import Context from './Context';
import {
	GET_USERS,
	SET_FILTER,
	UNSET_FILTER,
	SET_LOADING,
	UNSET_LOADING,
	FILTER_NOTES
} from './Type';
const axios = require('axios').default;

const State = props => {
	const initalState = {
		notes: [],
		filteredNotes: [],
		filter: false,
		loading: false
	};

	const [state, dispatch] = useReducer(Reducer, initalState);
	//Get notes from axios
	const getNotes = async () => {
		setLoading();
		const res = await axios.get('http://localhost:5000/notes');
		const data = res.data;
		dispatch({ type: GET_USERS, payload: data });
		unsetLoading();
	};
	//Filter notes
	const filterNotes = value => {
		const newNotes = state.notes.filter(
			note => note.noteName.indexOf(value) !== -1
		);
		dispatch({ type: FILTER_NOTES, payload: newNotes });
	};

	//LOADING
	const setLoading = () => dispatch({ type: SET_LOADING });
	const unsetLoading = () => dispatch({ type: UNSET_LOADING });
	//FILTER
	const setFilter = () => dispatch({ type: SET_FILTER });
	const unsetFilter = () => dispatch({ type: UNSET_FILTER });

	return (
		<Context.Provider
			value={{
				notes: state.notes,
				loading: state.loading,
				filter: state.filter,
				filteredNotes: state.filteredNotes,
				getNotes,
				setFilter,
				unsetFilter,
				filterNotes
			}}>
			{props.children}
		</Context.Provider>
	);
};
export default State;
