import { useMedia } from '../../hooks/useMediaQuery';

import './LazyLoading.scss';

import { ReactComponent as SvgLazyLoading } from '../../assets/svg/lazy-loading.svg';

export const LazyLoading = () => {
	const { isSmallLaptop } = useMedia();

	return (
		<>
			{!isSmallLaptop && (
				<div className="lazy-loading">
					<SvgLazyLoading />

					<SvgLazyLoading />

					<SvgLazyLoading />
				</div>
			)}
		</>
	);
};
