import React from 'react';
import { Header, PrivateRoutes } from './components/index';
import { Home, SearchNews, News } from './pages/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/news/:slug' element={<News />} />
        <Route path='/search-news' element={<SearchNews />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;