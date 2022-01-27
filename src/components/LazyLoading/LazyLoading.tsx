import './LazyLoading.scss';

import { ReactComponent as SvgLazyLoading } from '../../assets/svg/lazy-loading.svg';

export const LazyLoading = () => {
	return (
		<div className="lazy-loading">
			<SvgLazyLoading />

			<SvgLazyLoading />

			<SvgLazyLoading />
		</div>
	);
};
