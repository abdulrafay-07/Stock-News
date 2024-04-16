import React, { useState } from 'react';

const Search = ({ searchText }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }

    return (
        <div className='search-wrapper'>
            <form onSubmit={handleSubmit} id='search-form'>
                <div>
                    <input type="text" placeholder="Search News..."
                        onChange={e => setText(e.target.value)}
                    />
                    <button type="submit">
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Search