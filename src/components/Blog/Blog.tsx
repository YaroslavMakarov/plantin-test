import { Banner } from '../Banner';
import { BlogNew } from './New';

import './Blog.scss';

import topArticles from '../../mock-data/top-articles.json';
import interestingArticles from '../../mock-data/interesting-articles.json';
import { BlogTop } from './Top';
import { BlogInteresting } from './Interesting';

export const Blog = () => {
	const { articles: topTopArticles } = topArticles;
	const { articles: topInterestingArticles } = interestingArticles;

	return (
		<div className="blog">
			<BlogNew />

			<BlogTop articles={topTopArticles} />

			<BlogInteresting articles={topInterestingArticles} />

			<Banner />
		</div>
	);
};
