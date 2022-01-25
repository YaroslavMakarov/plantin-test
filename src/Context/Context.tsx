import { createContext, Dispatch } from 'react';

import { InitialState, initialState, ChangeInputValue } from './reducer'

export const Context = createContext<{
	state: InitialState;
	dispatch: Dispatch<ChangeInputValue>;
	}>({
			state: initialState,
			dispatch: () => undefined,
	});