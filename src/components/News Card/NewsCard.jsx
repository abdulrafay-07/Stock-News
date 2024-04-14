import React from 'react';

const NewsCard = ({ article }) => {
    
    const truncateDescription = (description, maxLength) => {
        if (description.length <= maxLength) {
            return description;
        } else {
            const lastSpaceIndex = description.lastIndexOf(' ', maxLength);
            return `${description.slice(0, lastSpaceIndex)}...`;
        }
    };

    return (
        <div>
            <img src={article.urlToImage} className='card-image' alt="Article" />
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