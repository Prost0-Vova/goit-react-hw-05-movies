import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CreditContainer,
  CreditHead,
  CreditList,
  CreditItem,
  CreditInfo,
  CreditP,
  CreditName,
} from './Credits.styled';
import { fetchCredits } from 'api/api';

export const Credits = () => {
  const [credit, setCredit] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const movieCredit = async () => {
      try {
        const response = await fetchCredits(movieId);
        setCredit(response);
      } catch (error) {
        console.error(error);
      }
    };
    movieCredit();
  }, [movieId]);

  return (
    <CreditContainer>
      {credit.length !== 0 ? (
        <>
          <CreditHead>Credits</CreditHead>
          <CreditList>
            {credit.map(actor => (
              <CreditItem key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                      : `https://placehold.co/200x300?text=No+Image`
                  }
                  alt={`${actor.name} profile`}
                />
                <CreditInfo>
                  <CreditName>{actor.name}</CreditName>
                  <CreditP>Character: {actor.character}</CreditP>
                  <CreditP>Popularity: {actor.popularity}</CreditP>
                </CreditInfo>
              </CreditItem>
            ))}
          </CreditList>
        </>
      )
      : (
        <div>Actors aren't available to show right now.</div>
      )}
    </CreditContainer>
  );
};

export default Credits;
