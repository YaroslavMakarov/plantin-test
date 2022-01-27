import { FC } from 'react';

import { PostsWrapper } from '../../PostsWrapper';
import { BlogItem } from '../Item';

import './BlogTop.scss';

export const BlogTop: FC<ArticlesProps> = ({ articles }) => {

	return (
		<PostsWrapper label="top of the day">
			<div className="blog-top">
				{articles.map(article => (
					<div
						key={article.id}
						className="blog-top__items"
					>
						<BlogItem article={article} variant="top" />
					</div>
				))}
			</div>
		</PostsWrapper>
	);
};
