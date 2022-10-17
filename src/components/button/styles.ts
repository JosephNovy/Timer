import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secundary" | "danger" | "success";
interface ButtonContanierProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secundary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContanier = styled.button<ButtonContanierProps>`
  width: 100px;
  height: 40px;
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-300"]};

  /*${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `;
  }}*/
`;
