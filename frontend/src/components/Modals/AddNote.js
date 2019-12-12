import React, { useState,useContext } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import contextValue from '../../Context API/Context';
const axios = require('axios').default;

const AddNote = () => {
	const context = useContext(contextValue)
	const [noteName, setNoteName] = useState('');
	const [noteText, setNoteText] = useState('');
	const [alert, setAlert] = useState('');
	const submitData = async () => {
		if (noteText === '' || noteName === '' || alert === '')
			M.toast({ html: "All field's have to be filled in!" });
		else {
			try {
				const post = await axios.post('http://localhost:5000/notes', {
					noteName: noteName,
					noteText: noteText,
					importance: alert
				});
				M.toast({html:post.data});
			} catch (error) {
				console.error(error);
			}
			setNoteText('');
			setNoteName('');
			setAlert('');
			context.getNotes();
		}
	};

	return (
		<div id='add-note' style={modalStyle} className='modal'>
			<div className='modal-content'>
				<h4>Create New</h4>
				<div className='row'>
					<div className='input-field col s9'>
						<input
							id='first_name'
							type='text'
							autoComplete="off"
							className='validate'
							value={noteName}
							onChange={e => setNoteName(e.target.value)}
						/>
						<label htmlFor='first_name'>Note Name</label>
					</div>
					<div className='input-field col s3'>
						<select value={alert} onChange={e => setAlert(e.target.value)}>
							<option value='' disabled defaultValue>
								Alert Level
							</option>
							<option value='Urgent' className='red-text-color'>
								Urgent
							</option>
							<option value='Important'>Important</option>
							<option value='Not Important'>Not Important</option>
						</select>
						<label>Select </label>
					</div>
				</div>
				<div className='row'>
					<div className='input-field col s9'>
						<input
							id='last_name'
							type='text'
							autoComplete="off"
							value={noteText}
							onChange={e => setNoteText(e.target.value)}
							className='validate'
						/>
						<label htmlFor='last_name'>Note Text</label>
					</div>
				</div>
			</div>

			<div className='modal-footer valign-bottom'>
				<a
					onClick={submitData}
					href='#!'
					className='modal-close  waves-effect btn blue darken-2'>
					Enter
				</a>
			</div>
		</div>
	);
};
const modalStyle = {
	width: '50%',
	height: '40%'
};
export default AddNote;
