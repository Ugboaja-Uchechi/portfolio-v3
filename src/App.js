import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router';
import GlobalStyle from './globalStyles';
import { LightTheme } from './components/Theme';
import Loading from './subComponents/Loading';
import ReactGA from 'react-ga';
const TRACKING_ID = "G-KMNG7J30S0"; // TRACKING_ID
ReactGA.initialize(TRACKING_ID);

// Components

const Main = lazy(() => import("./components/Main"));
const About = lazy(() => import("./components/About"));
const Skill = lazy(() => import("./components/Skills"));
const Project = lazy(() => import("./components/Project"));
const SoundBar = lazy(() => import("./subComponents/SoundBar"));


function App() {

  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <GlobalStyle />
        <ThemeProvider theme={LightTheme}>
          <Suspense fallback={<Loading />}>
            <SoundBar />
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<Main />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/project' element={<Project />} />
                <Route exact path='/skill' element={<Skill />} />
              </Routes>
            </AnimatePresence>
          </Suspense>

        </ThemeProvider>
    </>
  );
}

export default App;
