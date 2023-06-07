import { css } from '@emotion/react';
import { CustomButton } from './style';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLoading?: boolean;
  width?: string;
  bgColor?: string;
  fontColor?: string;
  hoverBgColor?: string;
  position?: 'absolute' | 'relative' | 'fixed' | 'static' | 'sticky';
  bottom?: string;
}

const Button: React.FC<ButtonProps> = ({
  children = '',
  isLoading = false,
  width,
  bgColor,
  fontColor,
  hoverBgColor,
  position,
  bottom,
  ...attributes
}) => {
  return <div></div>;
};

export default Button;
