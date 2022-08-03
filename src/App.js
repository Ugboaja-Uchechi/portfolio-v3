import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router';
import './App.css';
import { LightTheme } from './components/Theme';
// import { DarkTheme } from './components/Theme';
import Main from './components/Main';
import About from './components/About';
import Project from './components/Project';
import Skill from './components/Skills';
import GlobalStyle from './globalStyles';
import SoundBar from './subComponents/SoundBar';

function App() {
  return (
    <>
      <GlobalStyle />
        <ThemeProvider theme={LightTheme}>
          <SoundBar />
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/project' element={<Project />} />
            <Route exact path='/skill' element={<Skill />} />
          </Routes>
        </ThemeProvider>
    </>
  );
}

export default App;
