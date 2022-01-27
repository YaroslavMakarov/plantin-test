import { useContext, useEffect, useState } from 'react';

import { Banner } from '../Banner';
import { BlogNew } from './New';
import { BlogTop } from './Top';
import { BlogInteresting } from './Interesting';

import './Blog.scss';

import { Context } from '../../Context';

import topArticles from '../../mock-data/top-articles.json';
import interestingArticles from '../../mock-data/interesting-articles.json';
import articlesData from '../../mock-data/news-articles.json';

export const Blog = () => {
	const { articles: topTopArticles } = topArticles;
	const { articles: topInterestingArticles } = interestingArticles;
	const { articles: newArticles } = articlesData;
	const [filteredTopArticles, setFilteredTopArticles] = useState<Article[]>([]);
	const [filteredNewArticles, setFilteredNewArticles] = useState<Article[]>([]);
	const [filteredInterestingArticles, setFilteredInterestingArticles]
		= useState<Article[]>([]);
	const [articlesCount, setArticlesCount] = useState<number>(0);
	const { state } = useContext(Context);
	const { searchValue } = state;

	const filteredArticles = (articles: Article[]): Article[] => {
	
		return articles.filter((article: Article) => {
			const { title, content } = article;
			const joinedText = (title + content).toLowerCase();
			
			return joinedText.includes(searchValue.toLowerCase());
		})
	};

	useEffect(() => {
		if (searchValue) {
			setFilteredTopArticles(
				filteredArticles(topTopArticles)
			);
			setFilteredNewArticles(
				filteredArticles(newArticles)
			);
			setFilteredInterestingArticles(
				filteredArticles(topInterestingArticles)
			);
		} else {
			setFilteredTopArticles(topTopArticles);
			setFilteredNewArticles(newArticles);
			setFilteredInterestingArticles(topInterestingArticles);
		}

	}, [searchValue]);

	useEffect(() => {
			const sum = 
				filteredTopArticles.length 
					+ filteredNewArticles.length
					+ filteredInterestingArticles.length;
			setArticlesCount(sum);
		},
		[filteredTopArticles, filteredNewArticles, filteredInterestingArticles]
	);

	return (
		<>
			{articlesCount ? (
				<div className="blog">
					{filteredNewArticles.length > 0 && (
						<BlogNew articles={filteredNewArticles} />
					)}

					{filteredTopArticles.length > 0 && (
						<BlogTop articles={filteredTopArticles} />
					)}

					{filteredInterestingArticles.length > 0 && (
						<BlogInteresting articles={filteredInterestingArticles} />
					)}

					<Banner />
				</div>
			) : (
				<div>NO ARTICLES</div>
			)}
		</>
	);
};
