import React from 'react';
import styled from 'styled-components';


const NewsItemBlock = styled.div`
	display: flex;

	.thumbnail {
		margin-right: 1rem;
		img {
			display: block;
			width: 160px;
			height: 100px;
			object-fit: cover;
		}
	}

	.contents {
		h2 {
			//heading 태그 자체에 있는 margin 초기화
			margin: 0;
			a {
				color: black;
			}
		}
		p {
			margin: 0;
			line-height: 1.5;
			margin-top: 0.5rem;
			white-space: normal;
		}
	}

	& + & {
		margin-top: 3rem;
	}
`;

const NewsItem = ({ article }) => {
	const { title, description, url, urlToImage } = article;

	return (
		<NewsItemBlock>
			{/* 썸네일 이미지 */}
			{urlToImage && (
				<div className="thumbnail">
					<a href={url} target="_blank" rel="noopener noreferrer">
						<img src={urlToImage} alt="thumbnail" />
					</a>
				</div>
			)}

			<div className="contents">
				{/* 제목 */}
				<h2>
					<a href={url} target="_blank" rel="noopener noreferrer">
						{title}
					</a>
				</h2>
				{/* 내용 */}
				<p>{description}</p>
			</div>
		</NewsItemBlock>
	);
};

export default NewsItem;