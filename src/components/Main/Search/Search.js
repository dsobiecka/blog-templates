import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';

import { Form } from './Search.styled';

const Search = () => {
  return (
    <Form action="">
      <SearchIcon className="searchIcon" />
      <input type="text" placeholder="search" />
    </Form>
  );
};

Search.propTypes = {};

export default Search;
