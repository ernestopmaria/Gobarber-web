import React from 'react';
// import Signin from './pages/Signin/index';
import SignIn from './pages/SignIn/index';
import GlobalStyle from './styles/global';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
