import { HeaderLinks } from './Links';import './Header.scss';

import { useMedia } from '../../hooks/useMediaQuery';

import { ReactComponent as SvgHeaderMobileLogo } from '../../assets/svg/header-logo-mobile.svg';
import { ReactComponent as SvgMenu } from '../../assets/svg/menu.svg';
import { ReactComponent as SvgSearchMobile } from '../../assets/svg/header-search-mobile.svg';
import { ReactComponent as SvgSearchDesktop } from '../../assets/svg/header-search-desktop.svg';
import { ReactComponent as SvgProfile } from '../../assets/svg/profile.svg';


export const Header = () => {
	const { isMobile } = useMedia();

	return (
		<header className="header">
			<div className="container">
				{isMobile && <SvgHeaderMobileLogo className="header__logo" />}

				{!isMobile && (
					<nav className="header__navigation">
						<HeaderLinks />
					</nav>
				)}
				
				{!isMobile && (
					<div className="header__options">
						<SvgSearchDesktop />

						<SvgProfile />
					</div>
				)}

				{isMobile && (
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
