import { Link } from 'react-router-dom';

import './HeaderLinks.scss';

export const HeaderLinks = () => (
	<ul className="header-links">
		<li className="header-links__link-container">
		  <Link to='discover' className="header-links__link">
				Discover
			</Link>
		</li>
		<li className="header-links__link-container">
			<Link to='plants' className="header-links__link">
				My Plants
			</Link>
		</li>
		<li className="header-links__link-container">
			<Link to='diseases' className="header-links__link">
				Diseases
			</Link>
		</li>
		<li className="header-links__link-container">
			<Link to='blog' className="header-links__link">
				Blog
			</Link>
		</li>
		<li className="header-links__link-container">
			<Link to='faq' className="header-links__link">
				FAQ
			</Link>
		</li>
		<li className="header-links__link-container">
			<Link to='contact' className="header-links__link">
				Contact Us
			</Link>
		</li>
	</ul>
);
