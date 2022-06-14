import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import NewsItem from './NewsItem';


const NewsList = (props) => {
	const [articles, setArticles] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=f63837176999449ab6c54c460ecbf813');
				setArticles(response.data.articles);
			} catch (e) {
				console.log(e);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	if (loading) {
		return <NewsListBlock>대기 중...</NewsListBlock>
	}

	if (!articles) {
		return null;
	}

	return (
		<NewsListBlock>
			{articles.map(article => (
				<NewsItem key={article.url} article={article} />
			))}
		</NewsListBlock>
	);
};

const NewsListBlock = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	width: 768px;
	margin: 0 auto;
	margin-top: 2rem;
	@media screen and (max-width: 768px) {
		width: 100%;
		padding: 0 1rem;
	}
`;

export default NewsList;