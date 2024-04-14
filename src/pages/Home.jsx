import React, { useState, useEffect } from 'react';
import { Banner, CardSwiper } from '../components';

const Home = () => {
    const [techArticles, setTechArticles] = useState([]);
    const [politicsArticles, setPoliticsArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTechData = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=tech&from=2024-4-12&pageSize=30&sortBy=popularity&apiKey=${import.meta.env.VITE_NEWS_API}`);
                const data = await response.json();
                setTechArticles(data.articles);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        const fetchPoliticsData = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=politics&from=2024-4-12&pageSize=30&sortBy=popularity&apiKey=${import.meta.env.VITE_NEWS_API}`);
                const data = await response.json();
                setPoliticsArticles(data.articles);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    
        fetchTechData();
        fetchPoliticsData();
    }, [])

    return !loading ? (
        <div className='home-wrapper'>
            <Banner />
            <CardSwiper articles={techArticles} title='Tech News' />
            <CardSwiper articles={politicsArticles} title='Political News' />
        </div>
    ) : <h1 className='loading-state'>Loading...</h1>
}

export default Home;