import { useReducer } from 'react';
import {
  Routes,
  Route,
	Navigate,
} from "react-router-dom";

import { Blog } from './components/Blog';
import { Header } from './components/Header';

import './App.scss';

import { Context } from './Context';
import { reducer, initialState } from './Context/reducer';

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	
  return (
		<Context.Provider value={{ state, dispatch }}>
			<div className="app">
				<Header />

				<Routes>
					<Route
						path="/blog"
						element={<Blog />}
					/>

					<Route
        		path="*"
        		element={<Navigate to="/blog" />}
   			 />
				</Routes>
			</div>
		</Context.Provider>
  );
}

export default App;
