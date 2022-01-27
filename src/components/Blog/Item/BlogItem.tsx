import { FC } from 'react';

import { BlogItemContent } from './Content';
import { Image } from '../../Image';

import './BlogItem.scss';

export const BlogItem: FC<ArticleProps> = ({ article }) => {
	const { img, title, content, readingTime, createdAt } = article;

	return (
		<article className="blog-item">
			<Image imgSrc={img} />

			<BlogItemContent
				title={title}
				content={content}
				readingTime={readingTime}
				createdAt={createdAt}
			/>
		</article>
	);
};