import { Paper } from '../Paper';

import './Banner.scss';

import { useMedia } from '../../hooks/useMediaQuery';

import { ReactComponent as SvgSally } from '../../assets/svg/sally.svg';
import { ReactComponent as SvgLogo } from '../../assets/svg/header-logo-mobile.svg';

export const Banner = () => {
	const { isTablet } = useMedia();

	return (
		<Paper variant="banner">
			<SvgLogo className="banner__logo-svg" />

			<h1 className="banner__header">
				Get unlimited access to exclusive articles
			</h1>

			
			<div className="banner__text">
				Get rid of limits and read everything you wish
			</div>

			<button
				className="banner__button"
				type="button"
			>
				Try For Free
			</button>

			{!isTablet && <SvgSally className="banner__sally-svg" />}
		</Paper>
	);
};