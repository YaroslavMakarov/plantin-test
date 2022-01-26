import './Intro.scss';

import { ReactComponent as SvgIntroSearch } from '../../assets/svg/intro-search.svg';
import { ReactComponent as SvgGirl } from '../../assets/svg/girl.svg';

export const Intro = () => {
	return (
		<section className="intro">
			<h1 className="intro__header">
				Stay always tuned with planting trends
			</h1>
			<div className="intro__temperature">
				Current temperature is: 24°C
			</div>

			<div className="intro__search-input-wrapper">
				<input
					className="intro__search-input"
					type="text"
					placeholder="Search"
				/>

				<SvgIntroSearch className="intro__search-input-icon" />
			</div>

			<SvgGirl className="intro__girl-svg" />
		</section>
	);
};
