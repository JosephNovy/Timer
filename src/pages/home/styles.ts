import styled from "styled-components";

export const HomeContainer = styled.main`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`;

export const StartCountdownButton = styled.button`
  width: 100%;
  border: none;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-100"]};
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled)hover {
    background: ${(props) => props.theme["green-700"]};
  }
`;
export const StoptCountdownButton = styled.button`
  width: 100%;
  border: none;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => props.theme["red-500"]};
  color: ${(props) => props.theme["gray-100"]};
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled)hover {
    background: ${(props) => props.theme["green-700"]};
  }
`;
