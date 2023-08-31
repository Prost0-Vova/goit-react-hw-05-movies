import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import Home from 'pages/HomePage/HomePage';
import MoviesSearch from 'pages/MovieSearch/MovieSearch';
import Details from 'pages/Details/Details';
import Credits from 'components/Credits/Credits';
import Reviews from 'components/Reviews/Reviews';

export const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesSearch />} />
          <Route path="movies/:movieId" element={<Details />}>
            <Route path="credits" element={<Credits />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
  );
};

export default App;
