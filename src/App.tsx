import React from 'react';
// import Signin from './pages/Signin/index';
import SignIn from './pages/SignIn/index';
import GlobalStyle from './styles/global';
import AppProvider from './hooks/index';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;
