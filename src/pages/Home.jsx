import React, { useState, useEffect } from 'react';
import { Banner, CardSwiper } from '../components';

const Home = () => {
    const [articles, setArticles] = useState({
        tech: [],
        politics: [],
        gaming: [],
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 2);

        const formattedDate = `${yesterday.getFullYear()}-${(yesterday.getMonth() + 1).toString().padStart(2, '0')}-${yesterday.getDate().toString().padStart(2, '0')}`;

        const fetchData = async (category, query) => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${formattedDate}&pageSize=35&sortBy=popularity&apiKey=${import.meta.env.VITE_NEWS_API}`);
                const data = await response.json();
                setArticles(prevState => ({
                    ...prevState,
                    [category]: data.articles
                }));
            } catch (error) {
                console.error(`Error fetching ${category} data:`, error);
            }
        }

        Promise.all([
            fetchData('tech', 'tech'),
            fetchData('politics', 'politics'),
            fetchData('gaming', 'gaming')
        ]).then(() => setLoading(false));
    }, [])

    return !loading ? (
        <div className='home-wrapper'>
            <Banner />
            <CardSwiper articles={articles.tech} title='Tech News' />
            <CardSwiper articles={articles.politics} title='Political News' />
            <CardSwiper articles={articles.gaming} title='Gaming News' />
        </div>
    ) : <h1 className='loading-state'>Loading...</h1>
}

export default Home;