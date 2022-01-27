import { FC } from 'react';

import { PostsWrapper } from '../../PostsWrapper';
import { BlogItem } from '../Item';

import './BlogInteresting.scss';

export const BlogInteresting: FC<ArticlesProps> = ({ articles }) => {

	return (
		<PostsWrapper label="interesting">
			<div className="blog-interesting">
				{articles.map(article => (
					<div
						key={article.id}
						className="blog-interesting__items"
					>
						<BlogItem article={article} variant="interesting" />
					</div>
				))}
			</div>
		</PostsWrapper>
	);
};