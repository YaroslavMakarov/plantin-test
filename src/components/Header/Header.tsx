import { HeaderLinks } from './Links';import './Header.scss';

import { useMedia } from '../../hooks/useMediaQuery';

import { ReactComponent as SvgHeaderMobileLogo } from '../../assets/svg/header-logo-mobile.svg';
import { ReactComponent as SvgMenu } from '../../assets/svg/menu.svg';
import { ReactComponent as SvgSearchMobile } from '../../assets/svg/header-search-mobile.svg';
import { ReactComponent as SvgSearchDesktop } from '../../assets/svg/header-search-desktop.svg';
import { ReactComponent as SvgProfile } from '../../assets/svg/profile.svg';


export const Header = () => {
	const { isTable } = useMedia();

	return (
		<header className="header">
			<div className="container">
				{isTable && <SvgHeaderMobileLogo className="header__logo" />}

				{!isTable && (
					<nav className="header__navigation">
						<HeaderLinks />
					</nav>
				)}
				
				{!isTable && (
					<div className="header__options">
						<SvgSearchDesktop />

						<SvgProfile className="header__profile" />
					</div>
				)}

				{isTable && (
				<div className="header__options">
					<SvgSearchMobile className="header__mobile-menu" />

					<button
						className="header__mobile-menu"
						type="button"
					>
						<SvgMenu />
					</button>
				</div>)}
			</div>
		</header>
	);
};
