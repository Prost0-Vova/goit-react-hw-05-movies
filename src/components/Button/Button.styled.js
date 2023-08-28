import styled from '@emotion/styled';

export const Btn = styled.button`
width: 150px;
  height: 50px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: rgb(60, 122, 110);
  
  text-align: center;
  display: inline-block;
  color: #fff;
  border: none;
  text-decoration: none;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  
  font-weight: 500;
  

  &:hover {
    background-color: lightblue;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.2);
  }

`;