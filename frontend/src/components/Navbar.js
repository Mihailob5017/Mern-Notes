import React, { useState, useContext } from 'react';
import contextValue from '../Context API/Context';
const Navbar = () => {
	const [text, setText] = useState('');
	const context = useContext(contextValue);
	const handleSubmit = e => {
		e.preventDefault();
		context.setFilter();
		context.filterNotes(text);
	};
	const revertBack = () => {
		context.unsetFilter();
		setText('');
	};

	return (
		<>
			<nav>
				<div className='nav-wrapper blue darken-2'>
					<a href='#!' className='brand-logo '>
						MERN Notes
					</a>
				</div>
			</nav>
			<nav>
				<div className='nav-wrapper'>
					<form onSubmit={handleSubmit}>
						<div
							className='input-field white darken-2 '
							style={{ marginBottom: '2em' }}>
							<input
								id='search'
								type='search'
								autoComplete='off'
								value={text}
								onChange={e => setText(e.target.value)}
								required
							/>
							<label className='label-icon' htmlFor='search'>
								<i className='material-icons black-text'>search</i>
							</label>
							<i className='material-icons' onClick={revertBack}>
								close
							</i>
						</div>
					</form>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
