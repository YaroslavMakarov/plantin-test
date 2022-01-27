import { FC } from 'react';

import { BlogItemContent } from './Content';
import { Image } from '../../Image';

import './BlogItem.scss';

type Props = ArticleProps & {
	variant: 'top' | 'interesting'
}

export const BlogItem: FC<Props> = ({ article, variant }) => {
	const { img, title, content, readingTime, createdAt } = article;

	return (
		<article className="blog-item">
			<Image
				imgSrc={img}
				minHeight={ variant === 'top' ? 'default' : 'small'}
			/>

			<BlogItemContent
				title={title}
				content={content}
				readingTime={readingTime}
				createdAt={createdAt}
			/>
		</article>
	);
};