import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'api/api';
import { Container, Head, List, Item, Author, Content} from './Reviews.styled';

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
  
    useEffect(() => {
      const Review = async () => {
        try {
          const response = await fetchReviews(movieId);
          setReviews(response);
        } catch (error) {
          console.error();
        }
      };
      Review();
    }, [movieId]);
   
    return(
            <Container>
              {reviews.length !== 0 && (
                <div>
                  <Head>Movie Reviews</Head>
                  <List>
                    {reviews.map(review => (
                      <Item key={review.id}>
                        <Author>{review.author}</Author>
                        <Content>{review.content}</Content>
                      </Item>
                    ))}
                  </List>
                </div>
              )}
              {reviews.length === 0 && <div>No reviews available for this movie.</div>}
            </Container>
    )

};



export default Reviews;