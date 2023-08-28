import React from 'react';
import PropTypes from 'prop-types';
import {Container, List, Item, RouteLink, Icon, Text } from './MoviesList.styled';
import { PiFilmSlateBold } from 'react-icons/pi';

export const MoviesList = ({trends}) => {

return(
 <Container>

<List>

        {trends.map(trend => (
          <Item key={trend.id}>
            <RouteLink to={`/movies/${trend.id}`}>
              
              <Text><Icon><PiFilmSlateBold/></Icon> {trend.title} </Text>
            </RouteLink>
          </Item>
        ))}
      </List>
 </Container>

)

}

MoviesList.propTypes = {
    trendMovies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })
    ),
  };
  
  export default MoviesList;
