import React, { useEffect, useState, useRef, Suspense } from 'react';
import Button from 'components/Button/Button';
import Loading from 'components/Loader/Loader';
import { fetchDetails } from 'api/api';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import {
  Container,
  Head,
  ImgBlock,
  Img,
  Companies,
  Company,
  Divider,
  MoreInfo,
  MoreInfoBtn,
  Overview,
} from './Details.styled';

export const Details = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || '/');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movie = await fetchDetails(movieId);
        setDetails(movie);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (!details) {
    return <Loading />;
  }

  return (
    <>
      <Link to={backLinkRef.current}>
        <Button text="Go back" />
      </Link>
      <Container>
        <ImgBlock>
          <h1>{details.title}</h1>
          <p>User score: {details.popularity}%</p>
          <Img
            src={
              details.poster_path
                ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                : `https://via.placeholder.com/200x300?text=No+Image`
            }
            alt={details.title}
          />
        </ImgBlock>
        <Head>
          <h2>Genres</h2>

          <p>
            {details.genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </p>

          <h2>Productions</h2>

          {details.production_companies.length > 0 && (
            <>
              <Companies>
                {details.production_companies.map(company => (
                  <Company key={company.id}>
                    {
                      <Img
                        src={
                          company.logo_path
                            ? `https://image.tmdb.org/t/p/w500${company.logo_path}`
                            : `https://via.placeholder.com/100x50?text=${company.name}`
                        }
                        alt={company.name}
                      />
                    }
                  </Company>
                ))}
              </Companies>
            </>
          )}
          <Overview>{details.overview}</Overview>
        </Head>
      </Container>
      <Divider />
      <MoreInfo>
        <Link to="Credits">
          <MoreInfoBtn text="Credits" />
        </Link>
        <Link to="Reviews">
          <MoreInfoBtn text="Reviews" />
        </Link>
      </MoreInfo>
      <Divider />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Details;
