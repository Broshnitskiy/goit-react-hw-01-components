import styled from "styled-components";
import { getRandomHexColor } from '../../helpers/random-color';

export const Section = styled.section`
  width: 400px;
  margin: 0 auto;
  margin-bottom:30px;
  text-align: center;
  border: 1px solid black;
  border-radius: 4px;
  overflow: hidden;

  ul{
      display: flex;
      justify-content:center;
  }
`;

export const ListItem = styled.li`
        display: flex;
        flex-direction: column;
        padding: 15px;
        flex-basis: calc(100% / 5);
        font-weight:500;
        font-size:20px;
        background-color: ${(props) => {
         return getRandomHexColor();
        }};
        span:first-of-type{
            margin-bottom:10px;
            font-size:16px;
        }
`;

export const Title = styled.h2`
  padding: 20px 0;
  color: gray;
`;


