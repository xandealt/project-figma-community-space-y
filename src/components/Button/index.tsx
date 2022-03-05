import React from 'react';
import { ButtonComponent } from './styles';

export type IButtonProps = {
  text?: string;
  fullWidth: string;
  fullHeight: string;
};

export function Button({ text, fullWidth, fullHeight }: IButtonProps) {
  return (
    <ButtonComponent fullWidth={fullWidth} fullHeight={fullHeight}>
      {text}
    </ButtonComponent>
  );
}

Button.defaultProps = {
  text: '',
};
