import styled from "styled-components";

export const Container = styled.div`
  background-color: #1111;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FormCadastro = styled.form`
  background-color: #EC6726;
  width: 300px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 7px;

  h3{
    color: #212935;
    font-weight: bold;
    align-self: center;
    border-bottom: 1px solid #fff;
  }
`;

export const FormInput = styled.label`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin-bottom: 5px;

  span{
    font-weight: bold;
  }
`;

export const Button = styled.button`
  background-color: #212935;
  color: #fff;
  border-radius: 15px;
  border: none;
`;

export const Input = styled.input`
  border-radius: 7px;
  border: none;
  outline: 0;
  border: 0.5px solid #EC6726;
  padding: 0px 8px;

  :focus {
    border: 0.5px solid #fff;
  }
`;

export const TableView = styled.div`
`
export const DivTotal = styled.div`
display: flex;
background-color: #212935;
flex-direction: column;
justify-content: center;
padding: 25px;
border-radius: 7px;
`