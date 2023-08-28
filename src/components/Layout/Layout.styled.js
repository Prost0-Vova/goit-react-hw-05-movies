import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
max-width: 1200px;
  margin: 0 auto;
 
  `;
  export const NavDiv = styled.div`
  display: flex;
  gap:50px;
  `

export const Header = styled.header`
display: flex;
flex-direction: column;

margin-bottom: 20px;
padding: 20px 0;
border-bottom: 1px solid #ccc;


`;

export const Icon = styled.div`
display:flex;
color:black;
gap:10px;
font-size:20px;
margin-bottom:20px;
&:hover{
    color:rgb(60, 122, 110);
}
`;

export const NavigationLink = styled(NavLink)`
text-decoration: none;

color: black;
&:hover{
    color:rgb(60, 122, 110);
}
&.active {
    color: lightblue;
  }
`;

export const Footer = styled.footer``;

export const Text = styled.p`
color:black;

`;

export const Black = styled.p`

`;