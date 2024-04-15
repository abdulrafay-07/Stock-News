import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Sidebar, SingleNewsData } from '../components';

const News = () => {
    const [article, setArticle] = useState(null);
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const { slug } = useParams();

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=${slug}&apiKey=${import.meta.env.VITE_NEWS_API}`);
                const data = await response.json();

                const filteredArticles = data.articles.filter(data => data.title === slug);
                
                setArticle(filteredArticles[0]);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching article data:', error);
                setLoading(false);
            }
        };

        fetchArticle();
    }, [])

    return !loading ? (
        <div className='single-news-page'>
            <SingleNewsData article={article} />
            <Sidebar articles={articles} />
        </div>
    ) : <h1 className='loading-state'>Loading...</h1>
}

export default News;