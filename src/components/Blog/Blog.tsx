import { useContext, useEffect, useState, useRef } from 'react';

import { BlogNew } from './New';
import { BlogTop } from './Top';
import { BlogInteresting } from './Interesting';
import { LazyLoading } from '../LazyLoading';

import './Blog.scss';

import { Context } from '../../Context';

import { customDelay } from '../../utility/customDelay';

import { useMedia } from '../../hooks/useMediaQuery';

import topArticles from '../../mock-data/top-articles.json';
import interestingArticles from '../../mock-data/interesting-articles.json';
import articlesData from '../../mock-data/news-articles.json';

let LAST_INTERESTING_ARTICLE_INDEX: number;

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
	const blogRef = useRef<HTMLDivElement>(null);
	const [isLazyLoading, setIsLazyLoading] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const { isTablet } = useMedia();

	const filteredArticles = (articles: Article[]): Article[] => {
	
		return articles.filter((article: Article) => {
			const { title, content } = article;
			const joinedText = (title + content).toLowerCase();
			
			return joinedText.includes(searchValue.toLowerCase());
		})
	};

	const spliceArr = (arr: Article[]): Article[] => {
		return arr.slice(0, LAST_INTERESTING_ARTICLE_INDEX);
	};
	
	// filtering articles regarding search input
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
			LAST_INTERESTING_ARTICLE_INDEX = isTablet ? 4 : 3;
			setFilteredTopArticles(topTopArticles);
			setFilteredNewArticles(newArticles);
			setFilteredInterestingArticles(spliceArr(topInterestingArticles));
		}
		LAST_INTERESTING_ARTICLE_INDEX = 6;
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
	
	// adding observer for lazy loading
	useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            setIsLazyLoading(true);
						setLoading(false);
          }
        },
        { rootMargin: '100px' },
      );
      if (blogRef.current) {
        observer.observe(blogRef.current);
      }
    }
  }, [loading]);

	// adding new items after triggering intersection observer
	useEffect(() => {
		if (isLazyLoading && !searchValue) {
			customDelay(3000).then(() => {
				setIsLazyLoading(false);
				setFilteredInterestingArticles(spliceArr(topInterestingArticles));
				LAST_INTERESTING_ARTICLE_INDEX += 3;
				setLoading(true);
			});
		}
	}, [isLazyLoading, searchValue]);

	// custom delay to appear div for lazy loading
	useEffect(() => {
		customDelay(3000).then(() => {
			setLoading(true);
		})
	}, [searchValue]);
	
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

					{isLazyLoading 
						&& !searchValue 
						&& filteredInterestingArticles.length < topInterestingArticles.length && (
						<LazyLoading />
					)}
				</div>
			) : (
				<div>NO ARTICLES</div>
			)}

			{loading && <div ref={blogRef} />}
		</>
	);
};
