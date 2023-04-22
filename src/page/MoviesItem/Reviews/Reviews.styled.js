import styled from 'styled-components';

export const Reviewe = styled.div`
  padding-top: 20px;
`;

export const RevieweItem = styled.li`
  & h3 {
    margin-bottom: 5px;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
