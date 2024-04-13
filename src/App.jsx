import React, { useEffect } from 'react';
import { Header, PrivateRoutes } from './components/index';
import { Home, SearchNews } from './pages/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://newsapi.org/v2/everything?q=tech&sortBy=popularity&apiKey=${import.meta.env.VITE_NEWS_API}`);
      const data = await response.json();
      
    }

    fetchData();
  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/search-news' element={<SearchNews />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;