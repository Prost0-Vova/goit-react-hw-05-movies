import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
display:flex;

width:100%;



`;

export const Icon = styled.div`
display: flex;
padding-top:2px;
margin-right:10px;
`;

export const Text = styled.div`
display: flex;
color: rgb(60, 122, 110);
&:hover{
    color:lightblue;
  }

`


export const Head = styled.h2`

`;

export const List = styled.ul`

display: flex;
flex-wrap: wrap; 
list-style: none;
padding: 0;
justify-content: flex-start; 
`

export const Item = styled.li`
flex: 0 0 calc(33.3% - 20px);
border: 1px solid #ccc; 
padding: 10px; 
text-align: center; 
margin: 5px; 
vertical-align: top;


width:700px;
height:15px;
border: 1px solid rgb(60, 122, 110);
border-radius:5px;
margin-bottom: 10px;
padding: 5px 0px 10px 5px
`;

export const RouteLink = styled(Link)`
text-decoration: none;

`