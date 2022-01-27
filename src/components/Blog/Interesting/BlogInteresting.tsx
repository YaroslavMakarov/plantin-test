import { FC } from 'react';

import { PostsWrapper } from '../../PostsWrapper';
import { BlogItem } from '../Item';

import './BlogInteresting.scss';

export const BlogInteresting: FC<ArticlesProps> = ({ articles }) => {

	return (
		<PostsWrapper label="interesting">
			<div className="blog-interesting">
				{articles.map(article => (
					<div className="blog-interesting__items">
						<BlogItem article={article} />
					</div>
				))}
			</div>
		</PostsWrapper>
	);
};