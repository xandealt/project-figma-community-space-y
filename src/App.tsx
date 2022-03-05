import React from 'react';
import { GlobalStyles } from './styles/globalStyles';
import {
  Container,
  Caption,
  Header,
  Logo,
  FirstTitle,
  SectionMain,
  SecundTitle,
  AstronautIllustration,
} from './styles/styles';
import { Button } from './components/Button/index';
import pixelToRem from './utils/pixToRem';

function App() {
  return (
    <>
      <Container flex="column" margin={pixelToRem(24, 102, 26, 112)}>
        <GlobalStyles />
        <Header>
          <Logo />
        </Header>
        <SectionMain>
          <Caption>Finalmente é possível!</Caption>
          <FirstTitle>
            Sua jornada para Marte começa aqui <span>.</span>
          </FirstTitle>
          <SecundTitle>
            A primeira viagem para Marte estará disponível a partir do dia
            12/03/2028. Inscreva-se em nossa lista de espera.
          </SecundTitle>
          <AstronautIllustration />
        </SectionMain>
        <Button fullWidth="264" fullHeight="52" text="Inscreva-se agora" />
      </Container>
      <Container />
    </>
  );
}

export default App;
