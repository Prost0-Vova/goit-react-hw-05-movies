import React, { useEffect, useState } from 'react';
import { fetchTrends } from 'api/api';
import MoviesList from 'components/MoviesList/MoviesList';
import Loading from 'components/Loader/Loader';

export const Home = () => {
    const [trends, setTrends] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      const data = async () => {
        try {
          setIsLoading(true);
          const films = await fetchTrends();
          setTrends(films);
          
        } catch (error) {
          setError(true);
          
        }
         finally{
          setIsLoading(false);
         }
      };
      data();
    }, []);
  
    return (
      <>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <p>Error loading data</p>
        ) : (
          <MoviesList trends={trends} />
        )}
      </>
    );
  };
  
  export default Home;