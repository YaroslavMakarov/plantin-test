import { FC } from 'react';

import { BlogNewArticle } from './Article';

import './BlogNew.scss';

import { ReactComponent as SvgNewArticle } from '../../../assets/svg/new-article.svg';

export const BlogNew: FC<ArticlesProps> = ({ articles }) => {

	return (
		<article className="blog-new">
			<SvgNewArticle className="blog-new__icon" />

			{articles.map(article => (
				<BlogNewArticle key={article.id} article={article} />
			))}
		</article>
	);
};
