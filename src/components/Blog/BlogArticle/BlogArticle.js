import { useParams } from 'react-router-dom';

const BlogArticle = () => {
  const params = useParams();

  return <div>{params.articleId}</div>;
};

BlogArticle.propTypes = {};

export default BlogArticle;
