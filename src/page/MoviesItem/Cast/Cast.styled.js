import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  padding-top: 20px;
  & li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    overflow: hidden;
    border-radius: 0.5em;
    box-shadow: rgb(150, 150, 150) 2px 2px 5px;

    flex-basis: calc((100% - 150px) / 6);

    & > div {
      padding: 10px 12px;
    }
  }
`;
