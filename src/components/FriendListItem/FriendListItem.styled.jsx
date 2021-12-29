import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  :not(:last-child){
      margin-bottom:15px;
  }

  >img{
      margin-right:20px;
  }

  >p{
      font-size: 20px;
      font-weight:500;
  }
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin-right:20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? `green` : `red`)};
`;