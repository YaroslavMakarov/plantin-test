import './Header.scss';

import { ReactComponent as SvgHeaderMobileLogo } from '../../assets/svg/header-logo-mobile.svg';
import { ReactComponent as SvgMenu } from '../../assets/svg/menu.svg';
import { ReactComponent as SvgSearchMobile } from '../../assets/svg/header-search-mobile.svg';

export const Header = () => {
	return (
		<header className="header">
			<SvgHeaderMobileLogo />

			<div className="header__search-menu-container">
				<SvgSearchMobile className="header__mobile-menu" />

				<button
					className="header__mobile-menu"
					type="button"
				>
					<SvgMenu />
				</button>
			</div>
		</header>
	);
};
