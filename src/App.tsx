import React from 'react';
// import Signin from './pages/Signin/index';
import SignIn from './pages/Signin/index';
import GlobalStyle from './styles/global';
import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Ernesto' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
