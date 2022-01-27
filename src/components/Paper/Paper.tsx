import { FC, ReactNode } from 'react';

import './Paper.scss';

type Props = {
	children: ReactNode,
	variant?: "search" | 'banner'
};

export const Paper: FC<Props> = ({ children, variant }) => (
	<div className={`paper paper--${variant}`}>
		{children}
	</div>
);

Paper.defaultProps = {
	variant: 'search',
};
