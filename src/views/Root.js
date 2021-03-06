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
import { useEffect, useState } from 'react';
import Loading from './Loading/Loading';
import BlogArticle from '../components/Blog/BlogArticle/BlogArticle';
import NotFound from './404/404';
import Prefooter from '../components/Prefooter/Prefooter';
import Login from '../components/Login/Login';
import ManageBlog from '../components/ManageBlog/ManageBlog';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (articles) {
        resolve([...articles]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

function Root() {
  const [loadingSpinner, setLoadingSpinner] = useState(true);
  const [loadingArticle, setLoadingArticle] = useState(articles);
  const [isLoggedIn, setIsLogin] = useState(false);

  const loginHandler = (email, password) => {
    setIsLogin(true);
  };

  const logoutHandler = () => {
    setIsLogin(false);
  };

  useEffect(() => {
    setLoadingSpinner(true);
    mockAPI()
      .then(() => {
        setLoadingArticle(loadingArticle);
        setLoadingSpinner(false);
      })
      .catch((err) => console.log(err));
  }, [loadingArticle]);

  const [theme, setTheme] = useState('light');
  const toogleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    console.log('change color from Root');
  };

  return (
    <Router>
      {loadingSpinner ? (
        <Loading />
      ) : (
        <ThemeProvider theme={theme === 'light' ? lightColors : darkColors}>
          <GlobalStyle />
          <ProgressBar />
          <Header onChangeColors={toogleTheme} />
          <Routes>
            <Route path="/" element={<Main articles={articles} />} />
            <Route path="/blog" element={<Blog articles={articles} />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogarticles/:articleId" element={<BlogArticle />} />
            <Route path="/login" element={!isLoggedIn ? <Login onLogin={loginHandler} /> : <ManageBlog onLogout={logoutHandler} />} />
            <Route element={<NotFound />} />
          </Routes>
          <Prefooter isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
          <Footer />
        </ThemeProvider>
      )}
    </Router>
  );
}

export default Root;
