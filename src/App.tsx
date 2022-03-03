import React from 'react';
import { GlobalStyles } from './styles/globalStyles';
import { Header } from './styles/styles';
import Button from './components/Button';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>hello world</h1>
      </Header>
      {/* <Title></Title> */}
      <Button text="Inscreva-se agora" />
      {/* "react-app/jest" */}
    </>
  );
}

export default App;
