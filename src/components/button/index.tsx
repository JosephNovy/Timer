import React from "react";
import { ButtonContanier, ButtonVariant } from "./styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

export const Button = ({ variant = "primary" }: ButtonProps) => {
  return <ButtonContanier variant={variant}>Button</ButtonContanier>;
};
