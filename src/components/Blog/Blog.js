import PropTypes from 'prop-types';
import { Wrapper, BlogBoxes } from './Blog.styles';
import { MainTitle } from '../Main/Main.styles';
import React from 'react';
import BlogBox from './BlogBox/BlogBox';
import { articles } from '../../data/articles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogArticle from './BlogArticle/BlogArticle';

const Blog = ({ articles }) => {
  return (
    <Wrapper>
      <MainTitle>All articles</MainTitle>
      <BlogBoxes>
        {articles.map((articles) => (
          <BlogBox {...articles} key={articles.id} />
        ))}
      </BlogBoxes>
    </Wrapper>
  );
};

Blog.propTypes = {};

export default Blog;
