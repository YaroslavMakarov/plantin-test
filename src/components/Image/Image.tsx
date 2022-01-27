import { FC } from 'react';

import './Image.scss';

type Props = {
	imgSrc: string
	minHeight?: 'default' | 'small'
};

export const Image: FC<Props> = ({ imgSrc, minHeight }) => {
	return (
		<>
			<img
				className={`image image--${minHeight}`}
				src={imgSrc}
				alt="article image"
			/>
		</>
	);
};

Image.defaultProps = {
	minHeight: 'default',
};
