/// <reference types="react-scripts" />

type Article = {
	id: number,
	img: string,
	title: string,
	content: string,
	readingTime: number,
	createdAt: string,
}

type ArticleProps = {
	article: Article
}

type ArticlesProps = {
	articles: Article[]
}
