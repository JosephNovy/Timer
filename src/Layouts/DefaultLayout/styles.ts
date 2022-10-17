import styled from "styled-components";

export const LayoutContanier = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["gray-800"]};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;