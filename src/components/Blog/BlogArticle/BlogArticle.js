import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import img2 from '../../../assets/img/mountain.jpg';
import { Wrapper } from './BlogArticle.styles';

const BlogArticle = (props) => {
  const params = useParams();
  const [articleBlog, setArticleBlog] = useState({});
  const fetchArticle = () => {
    setArticleBlog({
      id: 10,
      data: new Date(2022, 1, 10),
      title: 'Lorem ipsum',
      shortDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: img2,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchArticle();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <h2>Lorem Ipsum</h2>
      <img src={articleBlog.img} />
      <h3>{articleBlog.title}</h3>
      <p>{articleBlog.description}</p>
    </Wrapper>
  );
};

BlogArticle.propTypes = {};

export default BlogArticle;
