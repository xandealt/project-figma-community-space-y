import styled from 'styled-components';
import pixelToRem from '../../utils/pixToRem';
import { IButtonProps } from '.';

export const ButtonComponent = styled.button<IButtonProps>`
  background: var(--mars);
  width: ${(props) => pixelToRem(Number(props.fullWidth))};
  height: ${(props) => pixelToRem(Number(props.fullHeight))};
  border: none;
  border-radius: ${pixelToRem(6)};
  color: var(--text);
  font: var(--text-3);
  font-weight: bold;
  margin-top: ${pixelToRem(32)};

  &:hover {
    cursor: pointer;
  }
`;
