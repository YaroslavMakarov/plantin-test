import { BlogNewArticle } from './Article';

import './BlogNew.scss';

import { ReactComponent as SvgNewArticle } from '../../../assets/svg/new-article.svg';

import articlesData from '../../../mock-data/news-articles.json';

export const BlogNew = () => {
	const { articles } = articlesData;

	return (
		<article className="blog-new">
			<SvgNewArticle className="blog-new__icon" />

			{articles.map(article => (
				<BlogNewArticle key={article.id} article={article} />
			))}
		</article>
	);
};
