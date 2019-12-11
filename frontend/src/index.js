import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StateProvider from './Context API/State';

const Index = () => (
	<StateProvider>
		<App />
	</StateProvider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
