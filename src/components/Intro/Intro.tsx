import {
	useEffect,
	useState,
	useContext,
	useCallback
} from 'react';
import debounce from 'lodash.debounce';

import { Paper } from '../Paper';

import './Intro.scss';

import { fetchTemperatureByLocation } from '../../api/weather';

import { useMedia } from '../../hooks/useMediaQuery';

import { Context } from '../../Context';
import { CHANGE_INPUT_VALUE } from '../../Context/reducer';

import { ReactComponent as SvgIntroSearch } from '../../assets/svg/intro-search.svg';
import { ReactComponent as SvgGirl } from '../../assets/svg/girl.svg';

export const Intro = () => {
	const [temperature, setTemperature] = useState<number>(0);
	const [value, setValue] = useState('');
	const { isTable } = useMedia();
	const { state, dispatch } = useContext(Context);

	const debounceInputValue = useCallback(
			debounce(
				inputValue => dispatch({ type: CHANGE_INPUT_VALUE, inputValue }),
				300,
			),
    [],
  );
	
	useEffect(() => {
		fetchTemperatureByLocation(703448, '5fe7d5a50540714068f029f1eaf1ffe4')
			.then(({ data }) => {
				const temperature = data.main.temp;
				const temperatureToCelsius = Math.round(temperature - 273.15);
				setTemperature(temperatureToCelsius);
			});
	}, []);

	return (
		<Paper>
			<h1 className="intro__header">
				Stay always tuned with planting trends
			</h1>

			{!isTable && (
				<div className="intro__temperature">
					{`Current temperature is: ${temperature}°C`}
				</div>
			)}

			{isTable && (
				<div className="intro__text">
					<span className="intro__text--bold">Tips &amp; Tricks</span>{' '}
					selected specially for{' '}
					<span className="intro__text--extra-bold">you!</span>
				</div>
			)}

			<div className="intro__search-input-wrapper">
				<input
					className="intro__search-input"
					type="text"
					placeholder="Search"
					value={value}
					onChange={({ target}) => {
						setValue(target.value);
						debounceInputValue(target.value);
					}}
				/>

				<SvgIntroSearch className="intro__search-input-icon" />
			</div>

			{!isTable && <SvgGirl className="intro__girl-svg" />}
		</Paper>
	);
};
