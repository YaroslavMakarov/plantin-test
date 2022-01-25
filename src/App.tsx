import { useReducer } from 'react';

import './App.scss';

import { Context } from './Context';
import { Header } from './components/Header';

import { reducer, initialState } from './Context/reducer';

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	
  return (
		<Context.Provider value={{ state, dispatch }}>
			<div className="app">
				<Header />
			</div>
		</Context.Provider>
  );
}

export default App;
