import React, { useEffect, useContext } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import './style.css';
//COMPONENTS
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Notes from './components/Note/Notes';
import AddBtn from './components/AddBtn';
import AddNote from './components/Modals/AddNote';
//CONTEXT
import contextValue from './Context API/Context';

const App = () => {
	const context = useContext(contextValue);

	useEffect(() => {
		Materialize.AutoInit();
		context.getNotes();
	}, []);
	return (
		<>
			<div className='container'>
				<Navbar />
				<AddBtn />
				<AddNote />
				{context.loading ? (
					<Preloader />
				) : (
					<Notes
						notes={context.filter ? context.filteredNotes : context.notes}
					/>
				)}
			</div>
		</>
	);
};

export default App;
