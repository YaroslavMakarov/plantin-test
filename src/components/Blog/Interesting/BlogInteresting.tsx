import { FC, useContext, Fragment } from 'react';

import { Banner } from '../../Banner';
import { BlogItem } from '../Item';
import { PostsWrapper } from '../../PostsWrapper';


import './BlogInteresting.scss';

import { Context } from '../../../Context';

import { useMedia } from '../../../hooks/useMediaQuery';

export const BlogInteresting: FC<ArticlesProps> = ({ articles }) => {
	const { state } = useContext(Context);
	const { searchValue } = state;
	const { isTablet } = useMedia();

	return (
		<PostsWrapper label="interesting">
			<div className="blog-interesting">
				{articles.map((article, index) => {
					const indexForBanner = isTablet ? 4 : 3;
					if (index === indexForBanner && !searchValue) {
						return (
							<Fragment key={article.id}>
								<div className="blog-interesting__banner">
									<Banner />
								</div>

								<div className="blog-interesting__items">
									<BlogItem article={article} variant="interesting" />
								</div>
							</Fragment>
						)
					} else {
						return (
							<div
								key={article.id}
								className="blog-interesting__items"
							>
								<BlogItem article={article} variant="interesting" />
							</div>
						);
					}
				})}
			</div>
		</PostsWrapper>
	);
};