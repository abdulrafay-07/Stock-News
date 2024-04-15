import React from 'react';
import { NewsCard } from '../index';

const Sidebar = ({ articles }) => {
    return (
        <div className='sidebar-wrapper'>
            <h2>More Latest News</h2>
            {
                articles.map((article, index) => (
                    <div id={index+1}>
                        <NewsCard article={article} />
                    </div>
                ))
            }
        </div>
    )
}

export default Sidebar;