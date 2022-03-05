import styled from 'styled-components';
import pixelToRem from '../utils/pixToRem';

interface FlexContainerProps {
  flex?: 'row' | 'column';
  width?: string;
  margin?: string;
  padding?: string;
}

export const Container = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flex};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export const Header = styled.div`
  display: flex;
  padding-bottom: ${pixelToRem(95)};
`;

export const Logo = styled.image`
  width: ${pixelToRem(201)};
  height: ${pixelToRem(41)};
  background-image: url('/images/logo-space-y.svg');
`;

export const SectionMain = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${pixelToRem(815)};
  max-height: ${pixelToRem(359)};
`;

export const Caption = styled.div`
  color: var(--sun);
  font: var(--font-text-4);
  letter-spacing: ${pixelToRem(5)};
  text-transform: uppercase;
`;

export const FirstTitle = styled.div`
  color: var(--text);
  font: var(--font-display);
  width: ${pixelToRem(814)};
  height: ${pixelToRem(162)};

  span {
    color: var(--sun);
  }
`;

export const SecundTitle = styled.div`
  color: var(--gray-05);
  font: var(--font-heading-3);
  width: ${pixelToRem(728)};
  height: ${pixelToRem(48)};
`;

export const AstronautIllustration = styled.image`
  position: absolute;
  background-image: url('/images/home-mars-right.svg');
  width: ${pixelToRem(550)};
  height: ${pixelToRem(563)};
  background-repeat: no-repeat;
  right: ${pixelToRem(-130)};
  top: ${pixelToRem(16)};
`;
