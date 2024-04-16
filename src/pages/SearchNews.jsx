import React, { useState, useEffect } from 'react';
import { NewsCard, Search } from '../components/index';

const SearchNews = () => {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (term.trim() !== '') {
            setLoading(true);
            fetch(`https://newsapi.org/v2/everything?q=${term}&pageSize=70&sortBy=popularity&apiKey=${import.meta.env.VITE_NEWS_API}`)
            .then(res => res.json())
            .then(data => {
                const filteredArticles = data.articles.filter(
                    data => data.author !== null && 
                    data.title !== null && 
                    data.urlToImage !== null &&
                    data.urlToImage !== null &&
                    data.description !== null &&
                    data.description !== "" &&
                    data.author.length < 15
                )

                setData(filteredArticles);
                setLoading(false);
            })
            .catch(err => console.log(err));
        }
    }, [term])

    const handleSearch = (text) => {
        setTerm(text);
    };

    return (
        <div className='search-news-wrapper'>
            <div>
                <h1>Search News</h1>
                <Search searchText={handleSearch} />
            </div>
            {
                !loading && data.length === 0 && term !== '' && 
                <h1>No News Found.</h1>
            }
            {
                !loading ?
                <div className='search-news-data'>
                    {
                        data.map((data, index) => (
                            <div key={index}>
                                <NewsCard article={data} />
                            </div>
                        ))
                    }
                </div>
                :
                <h1>Loading...</h1>
            }
        </div>
    )
}

export default SearchNews;