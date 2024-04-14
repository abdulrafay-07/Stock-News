import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ article }) => {
    
    const truncateDescription = (description, maxLength) => {
        if (description.length <= maxLength) {
            return description;
        } else {
            let truncated = description.slice(0, maxLength);

            while (truncated.replace(/[^\x00-\xff]/g, "**").length > maxLength) {
                truncated = truncated.slice(0, -1);
            }
            return `${truncated}...`;
        }
    };

    return (
        <div>
            <Link to={`/news/${encodeURIComponent(article.title)}`}>
                <img src={article.urlToImage} className='card-image' alt={article.title} />
            </Link>
            <p><span>Author:</span> {article.author}</p>
            <p>
                <span>Published At: </span>
                {new Date(article.publishedAt).toLocaleDateString()}
            </p>
            <p>{truncateDescription(article.description, 60)}</p>
        </div>
    )
}

export default NewsCard;