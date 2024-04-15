import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { NewsCard } from '../index';
import 'swiper/css';
import 'swiper/css/scrollbar';

const CardSwiper = ({ articles, title }) => {
    const breakpoints = {
        // when window width is >= 320px
        320: {
            slidesPerView: 1
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 3
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 4
        }
    };

    const filteredArticles = articles.filter(
        article => article.author !== null && 
        article.title !== null && 
        article.urlToImage !== null &&
        article.urlToImage !== null &&
        article.description !== null &&
        article.description !== "" &&
        article.author.length < 15
    );

    return (
        <div className='card-wrapper'>
            <div className='card-heading'>
                <h2>Latest {title}</h2>
            </div>
            <div className='card-swiper'>
                <Swiper
                    spaceBetween={30}
                    breakpoints={breakpoints}
                    modules={[Scrollbar]}
                    scrollbar={{ draggable: true }}
                >
                    {filteredArticles.map((article, index) => (
                        <SwiperSlide key={index} className='swiper-wrapper-card'>
                            <div className='card-div'>
                                <NewsCard article={article} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default CardSwiper;