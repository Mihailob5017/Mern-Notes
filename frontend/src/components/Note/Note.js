import React ,{useContext} from 'react';
import contextValue from '../../Context API/Context';
const axios = require('axios').default;

const Note = ({ note }) => {
	const context = useContext(contextValue)
	const deleteNote = async () => {
		const resault = await axios.delete(
			`http://localhost:5000/notes/${note._id}`
		);
		console.log(resault.data);
		
		context.getNotes();
	};
	const checkLevel = () => {
		if (note.importance === 'Urgent')
			return { color: 'material-icons red-text', icon: '	error_outline',border:'collapsible-header bg-urgent' };
		if (note.importance === 'Important')
			return { color: 'material-icons green-text', icon: 'event' ,border:'collapsible-header bg-important' };

		return { color: 'material-icons blue-text', icon: 'add_circle_outline',border:'collapsible-header bg-regular' };
	};

	return (
		<li>
			<div className={checkLevel().border} >
				{note.noteName}
				<a className='btn-floating btn-small waves-effect waves-light red '>
					<i onClick={deleteNote} className='material-icons '>
						delete
					</i>
				</a>
			</div>
			<div className='collapsible-body' >
				<span style={{ fontSize: '1.5rem' }}>
					<i
						className={checkLevel().color}
						style={{ fontSize: '1.5rem', marginRight: '10px ' }}>
						{checkLevel().icon}
					</i>
					{note.noteText}
				</span>
			</div>
		</li>
	);
};

export default Note;
//
//red-text text-darken-4
