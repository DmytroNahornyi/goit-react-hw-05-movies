import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f4f4f4;
  min-height: 100vh;
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 18px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;

  &:focus {
    border-color: #0077ff;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  background-color: #0077ff;
  color: #fff;
  cursor: pointer;
`;

export const Loading = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
`;

export const Error = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: red;
  text-align: center;
  margin-top: 50px;
`;

export const GoBackButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  background-color: #0077ff;
  color: #fff;
  cursor: pointer;
`;
