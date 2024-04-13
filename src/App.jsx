import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://newsapi.org/v2/everything?q=tech&sortBy=popularity&apiKey=${import.meta.env.VITE_NEWS_API}`);
      const data = await response.json();
      
    }

    fetchData();
  }, [])

  return (
    <div>App</div>
  )
}

export default App;