import { articles } from '../data/articles';
import { lightColors, darkColors } from '../assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Blog from '../components/Blog/Blog';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import ProgressBar from './ProgressBar/ProgressBar';
import { useState } from 'react';

function Root() {
  const [theme, setTheme] = useState('light');
  const toogleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    console.log('change color from Root');
  };

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightColors : darkColors}>
        <GlobalStyle />
        <ProgressBar />
        <Header onChangeColors={toogleTheme} />
        <Routes>
          <Route path="/" element={<Main articles={articles} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default Root;
