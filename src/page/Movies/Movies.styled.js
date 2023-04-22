import styled from 'styled-components';

export const WrapSectionSearch = styled.section`
  width: 1280px;
  margin: 0 auto;
`;

export const FormField = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px 0;
`;

export const Lable = styled.label`
  display: flex;
  align-items: center;
  height: 30px;
  & input {
    margin-left: 10px;
  }
`;

export const SearchButton = styled.button`
  padding: 7px 15px;
  border-radius: 0.5em;
  margin: 10px;
  display: flex;
  width: max-content;
  border: none;

  font-size: 18px;
  background-color: #4caf50;
  color: #fff;

  &:hover {
    background-color: #ff4300;
    box-shadow: rgb(150, 150, 150) 2px 2px 8px;
  }
`;
