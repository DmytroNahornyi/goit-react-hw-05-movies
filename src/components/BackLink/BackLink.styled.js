import styled from 'styled-components';

export const BackLinkWrap = styled.div`
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const BackLinkStyle = styled.button`
  padding: 7px 15px;
  border-radius: 0.5em;

  display: flex;
  width: max-content;
  margin: 20px auto;
  border: none;

  font-size: 18px;
  background-color: #4caf50;
  color: #fff;

  &:hover {
    background-color: #ff4300;
    box-shadow: rgb(150, 150, 150) 2px 2px 8px;
  }
`;
