import Loading from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar/Searchbar';
import {searchMovies} from 'api/api';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const MoviesSearch = () => {
    const [trends, setTrends] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const query = searchParams.get('query');  
    

    useEffect(() => {
        if (!query) {
          return;
        }
    
        const fetchMovies = async query => {
          setLoading(true);
    
          try {
            const results = await searchMovies(query);
    
            setTrends(results);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching movies:', error);
            setTrends([]);
            setLoading(false);
          }
        };
    
        fetchMovies(query);
      }, [query]);
    
      const handleChange = async query => {
        setSearchParams({ query });
      };
    
      return (
        <>
          <h2>Search movies</h2>
          <Searchbar onSubmit={handleChange} />
          {loading ? <Loading /> : <MoviesList trends={trends} />}
        </>
      );
    };
    
  


    export default MoviesSearch;