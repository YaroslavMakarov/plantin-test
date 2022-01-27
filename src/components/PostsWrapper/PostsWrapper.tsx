import { FC, ReactNode } from 'react';

import './PostsWrapper.scss';

type Props = {
	children: ReactNode,
	label: string
};

export const PostsWrapper: FC<Props> = ({ label, children}) => {
	return (
		<section className="posts-wrapper">
			<div className="posts-wrapper__line" />

			<div className="posts-wrapper__label">
				{label}
			</div>

			{children}
		</section>
	);
};
