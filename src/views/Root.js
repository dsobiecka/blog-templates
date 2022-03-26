import { theme } from '../assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import Header from '../components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { articles } from '../data/articles';

import Main from '../components/Main/Main';
import Blog from '../components/Blog/Blog';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import ProgressBar from './ProgressBar/ProgressBar';

function Root() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ProgressBar />
        <Header />
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
