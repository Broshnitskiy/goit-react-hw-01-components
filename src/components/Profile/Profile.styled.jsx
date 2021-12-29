import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 350px;
  text-align: center;
  background-color: #CCA9EF;
  border-radius:5px;
  overflow: hidden;
`;

export const Box = styled.div`
  padding:10px;
  background-color: #EBF6F5;
  
  p:first-of-type{
      font-size: large;
      font-weight:500;
  }

  p:not(:last-child){
      margin-bottom:10px;
  }

  img{
      margin: 0 auto;
  }
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  font-size: 16px;

  li{
      display: flex;
      flex-direction:column;
  }
`;



