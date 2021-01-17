import styled from "styled-components";

export const Container = styled.div`
  background-color: #1111;
  display: flex;
  flex-direction: column;
`;
export const FormCadastro = styled.div`
  background-color: #219ebc;
  width: 300px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  border-radius: 7px;
`;

export const FormInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  background-color: #023047;
  color: #fff;
  border-radius: 7px;
  border: none;
`;

export const Input = styled.input`
  background-color: #8ecae6;
  border-radius: 7px;
  border: none;
  outline: 0;
  border: 0.5px solid #8ecae6;

  :focus{
      border: 0.5px solid #fff;
  }
`;
