import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const News = () => {
    const [article, setArticle] = useState(null);
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

    console.log(article)

    return !loading ? (
        <div className='news-wrapper'>
            <h1 id='news-title'>{article.title}</h1>
            <img src={article.urlToImage} alt={article.title} className='news-image' />
            <div className='news-info'>
                <div className='news-auth-pub'>
                    <h2>Author: {article.author}</h2>
                    <p>Published at: {new Date(article.publishedAt).toLocaleDateString()}</p>
                </div>
                <a href={article.url} target='_blank'>View Full Article</a>
            </div>
            <article id='news-content'>
                <p>{article.content}</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sed mollitia non commodi praesentium autem molestiae? Fugiat consequatur, odit aliquam tempora pariatur facere velit, ipsum voluptates, esse quae molestiae architecto! Id, repellendus odio deserunt recusandae atque, dolore ducimus neque quaerat quos reiciendis unde fugiat labore animi enim minus aliquam delectus aperiam beatae dignissimos soluta sapiente quasi earum? Nam, ducimus itaque. Molestiae culpa at consectetur minus deleniti. Minus numquam est iure itaque, dolorem adipisci odit totam dolore provident eius laudantium dolorum repellat! Sint incidunt earum dolores adipisci, quibusdam ex hic. Voluptate. Praesentium dicta expedita laudantium qui fugit cumque hic deserunt dignissimos aut ab necessitatibus, eum error. Incidunt minus est doloremque facilis repellat, odio cupiditate, nemo velit odit at cum. Nesciunt, beatae.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sed mollitia non commodi praesentium autem molestiae? Fugiat consequatur, odit aliquam tempora pariatur facere velit, ipsum voluptates, esse quae molestiae architecto! Id, repellendus odio deserunt recusandae atque, dolore ducimus neque quaerat quos reiciendis unde fugiat labore animi enim minus aliquam delectus aperiam beatae dignissimos soluta sapiente quasi earum? Nam, ducimus itaque. Molestiae culpa at consectetur minus deleniti. Minus numquam est iure itaque, dolorem adipisci odit totam dolore provident eius laudantium dolorum repellat! Sint incidunt earum dolores adipisci, quibusdam ex hic. Voluptate. Praesentium dicta expedita laudantium qui fugit cumque hic deserunt dignissimos aut ab necessitatibus, eum error. Incidunt minus est doloremque facilis repellat, odio cupiditate, nemo velit odit at cum. Nesciunt, beatae.
                </p>
            </article>
        </div>
    ) : <h1 className='loading-state'>Loading...</h1>
}

export default News;