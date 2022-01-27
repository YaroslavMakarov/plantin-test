import { FC } from 'react';
import moment from 'moment';

import './BlogItemContent.scss';

type Props = {
	title: string,
	content: string,
	readingTime: number,
	createdAt: string,
};

export const BlogItemContent: FC<Props> = (
	{ title, content, readingTime, createdAt }
) => {
	
	return (
		<div className="blog-item-content">
			<div className="blog-item-content__date">
				{`
					${moment(createdAt, 'x').format('MMM DD')}
						· ${readingTime} min read
				`}
			</div>

			<h3 className="blog-item-content__header">
				{title}
			</h3>

			<p className="blog-item-content__text">
				{content}
			</p>
		</div>
	);
};