const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export type ChangeInputValue = {
	type: typeof CHANGE_INPUT_VALUE,
	inputValue: string
};

export type InitialState = {
	searchValue: string
};

export const initialState: InitialState = {
	searchValue: '',
}

export const reducer = (state=initialState, action: ChangeInputValue): InitialState => {
	switch (action.type) {
			case CHANGE_INPUT_VALUE:
			return { searchValue: action.inputValue };

			default:
			return state;
	}
}