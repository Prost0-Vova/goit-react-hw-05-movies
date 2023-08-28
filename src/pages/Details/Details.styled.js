import styled from '@emotion/styled';
import Button from 'components/Button/Button';

export const Container = styled.div`
display: flex;
margin-top: 50px;
padding: 20px;
background-color: rgba(60, 60, 60, 0.8));
border-radius: 10px;



`;

export const Head = styled.header`
color: black;
text-align: left;
margin-bottom: 20px;
margin-left: 30px;
margin-top: 150px;

h1 {
  font-size: 28px;
  
}



h2 {
  font-size: 24px;

}

span {
  font-size: 18px;
  margin-right: 10px;
}
`;

export const ImgBlock = styled.div`
text-align: center;
margin: 20px 0;
`;

export const Img = styled.img`
max-width: 100%;
height: auto;

`;

export const Companies = styled.div`

display: flex;
flex-wrap: wrap;
align-items: center;
margin-top: 20px;

img {
  max-height: 50px;
  max-width: 200px;
  margin-right: 30px;
}
`;

export const Company = styled.div`

`;

export const Divider = styled.hr`

  margin: 20px 0;
  border: none;
  border-top: 1px solid #ccc;
`;

export const MoreInfo = styled.div`
display: flex;
justify-content: center;
margin-left:100px;
  gap: 20px;
`;

export const MoreInfoBtn = styled(Button)`
margin: 20px 0 ;

border: none;
border-top: 1px solid #ccc;
`;


export const Overview = styled.p`
color:grey;
font-size:20px;
margin-top:50px;

`;