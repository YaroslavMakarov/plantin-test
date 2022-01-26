import { FC } from 'react';
import moment from 'moment';

import { Image } from '../../../Image';

import './BlogNewArticle.scss';

type Props = {
	article: {
		id: number,
		img: string,
		title: string,
		content: string,
		readingTime: number,
		createdAt: string,
	}
}

export const BlogNewArticle: FC<Props> = ({ article }) => {
	
	return (
		<div className="blog-new-article">
			<div className="blog-new-article__image">
				<Image imgSrc={article.img} />
			</div>

			<div className="blog-new-article__content">
				<div className="blog-new-article__date">
					{`
						${moment(article.createdAt, 'x').format('MMM DD')}
						 · ${article.readingTime} min read
					`}
				</div>

				<h3 className="blog-new-article__header">
					{article.title}
				</h3>

				<p className="blog-new-article__text">
					{article.content}
				</p>
			</div>
		</div>
	);
};
