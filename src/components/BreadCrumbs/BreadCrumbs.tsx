import { useEffect, useState, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './BreadCrumbs.scss';

import { useMedia } from '../../hooks/useMediaQuery';

import { BREAD_CRUMBS_PATH } from '../../constants/breadCrumbs';

import { ReactComponent as SvgChevronLeft } from '../../assets/svg/chevron-left.svg';
import { ReactComponent as SvgChevronRight } from '../../assets/svg/chevron-right.svg';

type Path = '' | 'blog';

export const BreadCrumbs = () => {
	const { isMobileL } = useMedia();
	const { pathname } = useLocation();
	const [splitPathname, setSplitPathname] = useState<Array<string>>([])

	useEffect(() => {
		setSplitPathname(pathname.split('/'));
	}, [pathname]);

	return (
		<>
			{!isMobileL ? (
				<div className="bread-crumbs">
					{splitPathname.map((path: string, i: number) => {
						return i !== splitPathname.length - 1 
							? (
									<Fragment key={BREAD_CRUMBS_PATH[path as Path]}>
										<Link
											className="bread-crumbs__link"
											to={`/${path}`}
										>
											{BREAD_CRUMBS_PATH[path as Path]}
										</Link>

										<SvgChevronRight />
									</Fragment>
							) : (
									<Fragment key={BREAD_CRUMBS_PATH[path as Path]}>
										<span
											className="bread-crumbs__current-page"
										>
											{BREAD_CRUMBS_PATH[path as Path]}
										</span>

										<SvgChevronRight />
									</Fragment>
							)
					})}
				</div>
			) : (
				<div className="bread-crumbs">
					<SvgChevronLeft />

					<Link
						className="bread-crumbs__link"
						to="/"
					>
						Home
					</Link>
				</div>
			)}
		</>
	);
};
