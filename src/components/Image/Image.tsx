import { FC } from 'react';

import './Image.scss';

type Props = {
	imgSrc: string
};

export const Image: FC<Props> = ({ imgSrc }) => {
	return (
		<>
			<img
				className="image"
				src={imgSrc}
				alt="article image"
			/>
		</>
	);
};