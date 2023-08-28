import axios from 'axios';


const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'fdb8f03ce268aefc61b886dfc6829a18';

export const fetchCredits = async movieId => {
const response = await axios.get(
  `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
)
const films = response.data.cast;
return films;

};

export const fetchTrends = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  const results = response.data.results;
  return results;
};

export const searchMovies = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const results = response.data.results; 
    return results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const fetchDetails = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const films = response.data;
  return films;
};


export const fetchReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const films = response.data.results;
  return films;
};


