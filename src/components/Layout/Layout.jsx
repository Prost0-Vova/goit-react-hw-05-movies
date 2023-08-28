import { Suspense } from 'react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Loading from 'components/Loader/Loader';
import { PiFilmSlateBold } from 'react-icons/pi';
import { Container, NavDiv, Header, Icon, NavigationLink, Footer } from './Layout.styled'



export const Layout = () => {
  return(
    <>
    <Container>
      <Header>
        <NavigationLink to="/">
          <Icon>
         <PiFilmSlateBold></PiFilmSlateBold>
         TMDB
          </Icon>
        </NavigationLink>
        <NavDiv>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/movies">Movie</NavigationLink>
        </NavDiv>
      </Header>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer>
       
      </Footer>
    </Container>
  </>

  )
};

export default Layout;
